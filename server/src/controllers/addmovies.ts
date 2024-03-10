import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function addMovies(id: number,profileId: number, title: string) {
    try {
        const res = prisma.movie.create({
            data: {
                id,
                profileId,
                title,  
        }
        })
        
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export default addMovies