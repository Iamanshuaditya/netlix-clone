import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteProfile(profileId:number) {
    try {
        const res = prisma.profile.delete({
            where: {
                id: profileId
            }
        })

        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


export default deleteProfile