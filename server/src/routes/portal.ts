const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
const YOUR_DOMAIN = "http://localhost:5173/";  
import {stripe}  from "./checkout";


router.post('/create-portal-session', async (req: Request, res: Response) => {
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
  
export default router