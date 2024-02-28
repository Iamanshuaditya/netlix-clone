const express = require("express");
import { Request, Response } from "express";
const router = express.Router();

import checkSubscriptionStatus  from '../controllers/subscriptionController'
import admin from 'firebase-admin';

router.get('/check-subscription-status', async (req: Request, res: Response) => {
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

  export default router