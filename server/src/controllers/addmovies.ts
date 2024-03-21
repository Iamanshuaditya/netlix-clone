import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function addMovies(title: string,profileId: number,backdropPath: string,genreIds: number[], originalLanguage: string,originalTitle: string,overview: string,popularity: number,posterPath: string,releaseDate: Date,tmdbId: number, adult: boolean) {
    try {
        const res = await prisma.movie.create({
            data: {
                title,
                profileId,
                backdropPath,
                genreIds,
                originalLanguage,
                originalTitle,
                overview,
                popularity,
                posterPath,
                releaseDate,
                tmdbId,
                adult

        }
        })
        
        console.log(res)
    } catch (error) {
        console.error(error)
    }
}

export default addMovies