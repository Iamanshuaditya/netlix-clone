const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
import getCustomerSubscriptionsByEmail from '../controllers/customerController'

router.get('/customer/subscriptions', async (req: Request, res: Response) => {
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
  
export default router