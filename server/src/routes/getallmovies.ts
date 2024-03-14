import express from "express";
import { Request, Response } from "express";
import getallMovies from "../controllers/getallmovies";
const router = express.Router();

router.get('/getallmovies', async (req: Request, res: Response) => {
    try {
        const response = await getallMovies();
        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Unable to fetch movies" });
    }
});

export default router;
