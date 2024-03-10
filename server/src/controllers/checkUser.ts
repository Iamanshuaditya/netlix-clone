import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkUser(emailaddresss: string) {
    try {
        const user = await prisma.user.findMany({
            where: {
                email : emailaddresss
            }
        });
        console.log(user)
        return user
    } catch (error) {
        console.error("Error occurred while checking user:", error);
        throw error;
    }
}

export default checkUser;
