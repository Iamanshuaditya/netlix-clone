import express from "express";
import { Request, Response } from "express";
import deleteMovies from "../controllers/deleteMovies";
const router = express.Router();


router.delete('/deletemovie', async (req: Request, res: Response) => {
    const id = parseInt(req.body.id)
    try {
        const response = await deleteMovies(id)
        console.log(response)
        res.json(response)
    } catch (error) {
        console.log(error)
    }
})