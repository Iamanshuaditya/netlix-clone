import admin from 'firebase-admin';
const stripe = require('stripe')('sk_test_51OfhrwG8kvu8uWqCmRagnaPk3NrIsQ2IfCcvHOOu0QB9MVuiiRKLstQs6cEPaQTvkyolmq0f6L9gkSKjCUFF4L5s00900Srmfz');
import express, { Request, Response } from 'express';
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const YOUR_DOMAIN = 'http://localhost:5173/';

const serviceAccount = require('../src/servicekey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/netflix-clone-c71e9/database/netflix-clone-c71e9-default-rtdb/data/~2F',
});
const db = admin.firestore();

app.get('/', (req: Request, res: Response) => {
  res.send('hwllo world')
})

app.post('/create-checkout-session', async (req: Request, res: Response) => {
  try {
    const prices = await stripe.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ['data.product'],
    });
    const customer_email = req.body.user_email || '';

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      customer_email,
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    console.log('Session ID:', session.id);

    res.json({ sessionId: session.id });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Error creating checkout session');
  }
});

app.post('/create-portal-session', async (req: Request, res: Response) => {
  try {
    const { session_id } = req.body;
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

    const returnUrl = YOUR_DOMAIN;

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer,
      return_url: returnUrl,
    });

    res.redirect(303, portalSession.url);
  } catch (error) {
    console.error('Error creating portal session:', error);
    res.status(500).send('Error creating portal session');
  }
});

app.post('/webhook', express.raw({ type: 'application/json' }), async (request: Request<any, any, any, any, { 'stripe-signature': string }>, response: Response) => {
    try {
      let event = request.body;

      const endpointSecret = 'we_1OmsQ4G8kvu8uWqCaSEznTTj';

      if (endpointSecret) {
        const signature = request.headers['stripe-signature'];
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      }

      let subscription;
      let status;
      switch (event.type) {
        case 'customer.subscription.trial_will_end':
        case 'customer.subscription.deleted':
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
          subscription = event.data.object;
          status = subscription.status;
          console.log(`Subscription status is ${status}.`);
          break;
        default:
          console.log(`Unhandled event type ${event.type}.`);
      }
    } catch (error) {
      console.error('Error processing webhook:', error);
      return response.sendStatus(400);
    }
    response.send();
  }
);
app.get('/check-subscription-status', async (req: Request, res: Response) => {
  try {
    const userToken = req.headers['authorization'];
    if (!userToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decodedToken = await admin.auth().verifyIdToken(userToken);
    const userEmail = decodedToken.email;
    if (!userEmail) {
      return res.status(400).json({ error: 'Email not found in Firebase token' });
    }

    const subscriptionStatus = await checkSubscriptionStatus(userEmail);

    res.json({ subscriptionStatus });
  } catch (error) {
    console.error('Error checking subscription status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function checkSubscriptionStatus(email: string): Promise<boolean> {
  try {
    const customer = await stripe.customers.list({ email: email, limit: 1 });
    if (customer.data.length === 0) {
      return false;
    }

    const subscriptions = await stripe.subscriptions.list({ customer: customer.data[0].id, limit: 1 });
    if (subscriptions.data.length === 0) {
      return false;
    }

    return subscriptions.data[0].status === 'active';
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return false;
  }
}


interface StripeCustomer {
  id: string;

}

async function getProductName(productId: string) {
  try {
    const product = await stripe.products.retrieve(productId);
    return product.name;
  } catch (error) {
    console.error('Error fetching product name:', error);
    throw error;
  }
}

async function getCustomerSubscriptionsByEmail(userEmail: string) {
  try {
    const customers = await stripe.customers.list({
      email: userEmail,
      limit: 3,
    });

    const subscriptionsPromises = customers.data.map(async (customer: any) => {
      const subscriptions = await stripe.subscriptions.list({
        customer: customer.id,
        limit: 10,
      });

      const formattedSubscriptions = await Promise.all(subscriptions.data.map(async (subscription: any) => {
        const productName = await getProductName(subscription.plan.product);
        return {
          plan: subscription.plan,
          productName: productName,
        };
      }));

      return {
        customer,
        subscriptions: formattedSubscriptions,
      };
    });

    const subscriptions = await Promise.all(subscriptionsPromises);
    return subscriptions;
  } catch (error) {
    console.error('Error fetching customer subscriptions:', error);
    throw error;
  }
}




app.get('/customer/subscriptions', async (req: Request, res: Response) => {
  try {
    const userEmail = req.query.email as string;  
    if (!userEmail) {
      return res.status(400).json({ error: 'Email not provided' });
    }

    const subscriptions = await getCustomerSubscriptionsByEmail(userEmail);
    res.json({ subscriptions });
  } catch (error) {
    console.error('Error fetching customer subscriptions:', error);
    res.status(500).json({ error: 'Error fetching customer subscriptions' });
  }
});

app.listen(4242, () => console.log('Running on port 4242'));





 
