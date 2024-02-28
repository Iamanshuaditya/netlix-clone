import { stripe } from "../routes/checkout";

async function getProductName(productId: string) {
    try {
      const product = await stripe.products.retrieve(productId);
      return product.name;
    } catch (error) {
      console.error('Error fetching product name:', error);
      throw error;
    }
}
  
export default getProductName