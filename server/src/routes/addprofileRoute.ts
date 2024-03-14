import express from "express";
import { Request, Response } from "express";
import addProfile from "../controllers/addProfile";
const router = express.Router();

router.post('/addprofile', async (req: Request, res: Response) => {
    const {avatar,name,userId}  = req.body
    try {
        const response = await addProfile(avatar, name, userId)
     
        console.log(response)
        res.status(200).json(response);

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' });

    }
})

export default router