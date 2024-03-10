import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function getallmovies() {
    try {
        const response = prisma.movie.findMany()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


export default getallmovies