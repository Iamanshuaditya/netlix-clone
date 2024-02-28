const express = require("express");
import { Request, Response } from "express";
const router = express.Router();
import { stripe } from "./checkout";

router.post('/webhook', express.raw({ type: 'application/json' }), async (request: Request<any, any, any, any, { 'stripe-signature': string }>, response: Response) => {
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


export default router