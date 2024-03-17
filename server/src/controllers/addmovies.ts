import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function addMovies(title: string,profileId: number) {
    try {
        const res = await prisma.movie.create({
            data: {
                title,
                profileId
        }
        })
        
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}

export default addMovies