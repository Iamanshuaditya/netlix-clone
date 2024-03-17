import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteProfile(id: number) {
 
    try {
        const res = await prisma.profile.delete({
            where: {
                id
            }
        });

        console.log(res);

        if (res) {
            return { success: true, message: 'Profile deleted successfully' };
        } else {
            return { success: false, message: 'Profile not found or not deleted' };
        }
    } catch (error) {
        console.log(error);
        return { success: false, message: 'Internal server error' };
    }
}

export default deleteProfile;
