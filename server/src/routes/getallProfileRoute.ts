import express from "express";
import { Request, Response } from "express";
import getUserProfiles from "../controllers/getallProfiles";
const router = express.Router();

router.get('/getallprofiles/:userId', async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const response = await getUserProfiles(userId);
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to fetch profiles" });
  }
});

export default router;