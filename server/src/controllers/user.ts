import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
 
async function createUser(email: string,name:string)   {
    try {
        const res = await prisma.user.create({
            data: {
                email,
                name
          }
        })
        
        console.log(res)
    } catch (error) {
        console.error({ error: "unable to createUser user" })
    }
}

export default createUser