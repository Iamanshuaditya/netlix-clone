import { stripe } from "../routes/checkout";
import getProductName from "./ProductController";

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
  

  export default getCustomerSubscriptionsByEmail