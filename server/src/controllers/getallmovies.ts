import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getallmovies(profileId: number) {
    try {
        const response = await prisma.movie.findMany({
            where: {
                profileId
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}

export default getallmovies;
