import express from "express";
import { Request, Response } from "express";
import deleteMovies from "../controllers/deleteMovies";
const router = express.Router();

router.delete('/deletemovie/:movieId', async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.movieId);  
    try {
        const response = await deleteMovies(movieId);  
        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Unable to delete movie' });  
    }
});

export default router;
