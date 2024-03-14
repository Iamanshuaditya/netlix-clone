import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function getUserProfiles(userId: number) {
    try {
      const response = await prisma.profile.findMany({
        where: {
          userId: userId,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  export default getUserProfiles;