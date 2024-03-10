import express from "express";
import { Request, Response } from "express";
import addmovies from "../controllers/addmovies";
const router = express.Router();

router.post('/addmovies', async (req:Request,res: Response) => {
    const { id, profileId, title } = req.body
   try {
       const response = addmovies(id, profileId, title)
       console.log(response)
       res.json("movie added")
   } catch (error) {
       console.log(error)
       res.status(500).json("can't added movies")
   }
    
})

export default router