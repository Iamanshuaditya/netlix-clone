import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function addMovies(profileId: number, title: string) {
    try {
        const res = await prisma.movie.create({
            data: {
                
                profileId,
                title,  
        }
        })
        
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}

export default addMovies