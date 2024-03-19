import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function getProfile(id: number) {
    try {
      const response = await prisma.profile.findUnique({
        where: {
          id
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  export default getProfile;