import express from "express";
import { Request, Response } from "express";
import deleProfile from "../controllers/deleteProfile";
const router = express.Router();

router.delete('/deleteProfile/:profileId', async (req: Request, res: Response) => {
    const id = parseInt(req.params.profileId);
    const userId = req.body.userId

    try {
        const response = await deleProfile(id,userId);
        res.json(response); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" }); 
    }
});


export default router