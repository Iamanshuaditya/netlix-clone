import express from "express";
import { Request, Response } from "express";
import addProfile from "../controllers/addProfile";
const router = express.Router();

router.post('/addprofile', async (req: Request, res: Response) => {
    const {avatar,name,userId}  = req.body
    try {
        const response = await addProfile(avatar, name, userId)
        res.json(response)
        console.log(response)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

export default router