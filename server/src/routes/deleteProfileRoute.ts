import express from "express";
import { Request, Response } from "express";
import deleProfile from "../controllers/deleteProfile";
const router = express.Router();

router.post('/deleteProfile/:profileId', async (req: Request, res: Response) => {
    const id = parseInt(req.params.profileId);

    try {
        const response = await deleProfile(id);
        res.json(response); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" }); 
    }
});
