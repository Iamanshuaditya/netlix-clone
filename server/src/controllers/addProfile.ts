import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function addprofile(avatar: string, name: string, userId: number) {
    try {
        const res =  await prisma.profile.create({
            data: {
                avatar: avatar,
                name: name,
                user: { connect: { id: userId } } 
            }
        })

        console.log(res)
    } catch (error) {
        console.log(error)
    }
}



export default addprofile