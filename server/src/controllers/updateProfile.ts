import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
 

async function updateProfile(profileId:number,name:string,avatar: string,) {
    try {
        const res = await prisma.profile.update({
            where: {
               id:profileId
            },
            
            data: {
                name,
                avatar

}
        })

        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export default updateProfile