import { stripe } from "../routes/checkout";
import { admin } from '../services/firebaseService';
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
  export default checkSubscriptionStatus;

export {admin} 