const stripe = require("stripe")(
  "sk_test_51OfhrwG8kvu8uWqCmRagnaPk3NrIsQ2IfCcvHOOu0QB9MVuiiRKLstQs6cEPaQTvkyolmq0f6L9gkSKjCUFF4L5s00900Srmfz"
);
const express = require("express");
const router = express.Router();
import { Request, Response } from "express";
const YOUR_DOMAIN = "https://netlix-web.vercel.app/";

router.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    const prices = await stripe.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ["data.product"],
    });
    const customer_email = req.body.user_email || "";

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      customer_email,
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    console.log("Session ID:", session.id);

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Error creating checkout session");
  }
});
export default router

export {stripe}