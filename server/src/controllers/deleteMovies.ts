import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteMovies(id:number) {
try {
    const res = prisma.movie.delete({
        where: {
            id: id
        }
        
    })
} catch (error) {
    console.log(error)
}
}

export default deleteMovies