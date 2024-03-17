import express from "express";
import { Request, Response } from "express";
import getallMovies from "../controllers/getallmovies";
const router = express.Router();

router.get('/getallmovies/:profileId', async (req: Request, res: Response) => {
    const profileId = Number(req.params.profileId);
    try {
        const response = await getallMovies(profileId);
        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Unable to fetch movies" });
    }
});

export default router;
