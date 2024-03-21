/*
  Warnings:

  - A unique constraint covering the columns `[avatar]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "adult" BOOLEAN,
ADD COLUMN     "backdropPath" TEXT,
ADD COLUMN     "genreIds" INTEGER[],
ADD COLUMN     "originalLanguage" TEXT,
ADD COLUMN     "originalTitle" TEXT,
ADD COLUMN     "overview" TEXT,
ADD COLUMN     "popularity" DOUBLE PRECISION,
ADD COLUMN     "posterPath" TEXT,
ADD COLUMN     "releaseDate" TIMESTAMP(3),
ADD COLUMN     "tmdbId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_avatar_key" ON "Profile"("avatar");
