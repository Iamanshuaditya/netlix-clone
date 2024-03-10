import express from "express";
import { Request, Response } from "express";
import checkUser from "../controllers/checkUser";
const router = express.Router();

router.post('/checkuser', async (req: Request, res: Response) => {
    const { email } = req.body; 
    try {
      const response =   await checkUser(email);
      res.json(response)
    } catch (error) {
        res.status(503).json({ error: "unable checking user" });
    }
});

export default router;
