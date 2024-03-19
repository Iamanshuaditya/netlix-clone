import express from "express";
import { Request, Response } from "express";
import getProfile from "../controllers/getProfile";
const router = express.Router();

router.get('/getprofile/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await getProfile(id);
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to fetch profile" });
  }
});

export default router;