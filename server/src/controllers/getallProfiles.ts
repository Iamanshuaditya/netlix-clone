import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function getallProfile() {
    try {
        const response = prisma.profile.findMany()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


export default getallProfile