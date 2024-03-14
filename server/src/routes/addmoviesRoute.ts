import express from "express";
import { Request, Response } from "express";
import addMovies from "../controllers/addmovies";
const router = express.Router();

router.post('/addmovies/:profileId', async (req: Request, res: Response) => {
    const { title } = req.body;
    const profileId = parseInt(req.params.profileId);
    try {
        const response = await addMovies(profileId, title);
        console.log(response);
        res.json("Movie added");
    } catch (error) {
        console.log(error);
        res.status(500).json("Cannot add movie");
    }
});

export default router;
