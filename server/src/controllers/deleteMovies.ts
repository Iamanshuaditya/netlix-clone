import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteMovies(id: number) {
    try {
        const res = await prisma.movie.delete({
            where: {
                id: id
            }
        });
        return res;  
    } catch (error) {
        console.log(error);
        throw error;  
    }
}

export default deleteMovies;
