import express from "express";
import { Request, Response } from "express";
import updateProfile from "../controllers/updateProfile";
const router = express.Router()


router.post('/updateprofile/:profileId', async (req: Request, res: Response) => {
    const profileId = Number(req.params.profileId)
    const {name,avatar}  = req.body
    try {
        const response = await updateProfile(profileId, name, avatar)
        console.log(response)
        res.json({ "Profile Updated": response })
    } catch (error) {
        console.error(error)
        res.json({"Unable to update Profile": error})
    }
})


export default router