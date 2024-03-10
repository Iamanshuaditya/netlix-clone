const express = require("express");
import { Request, Response } from "express";
import createUser from "../controllers/user";
const router = express.Router();

router.post('/createuser' ,async (req: Request, res: Response) => {
    const { name, email } = req.body;
    try {
        await createUser(email, name)

        res.json("User created  Sucessfully ")
    } catch (error) {
        res.status(503).json({error:"unable to add user"})
    }
})

export default router