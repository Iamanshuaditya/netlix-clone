import { DrawerState } from "@/store/atoms/Drawer";
import MovieId from "@/store/atoms/movies/MovieId";

import { useSetRecoilState } from "recoil";

interface Movie {
  id: number;
  title: string;
  backdropPath: string;
  genreIds: number[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  tmdbId: number | null;
  adult: boolean;
  profileId: number;
}

function ListCard({
  top,
  title,
  movieData,
}: {
  top: number;
  title: string;
  movieData: Movie[];
}) {
  return (
    <div>
      <div className={`top-[${top}em] maxWidth:absolute z-50  `}>
        <h1 className="font-semibold text-[1.2500em] ml-20 mb-2  xl:w-[150%] xl:ml-5 tab:text-3xl tab:w-[180%]">
          {title}
        </h1>
      </div>
      <div
        className="absolute left-20 overflow-y-scroll xl:left-4 "
        style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
      >
        <div className="w-[75rem] flex xl:w-[19rem] tab:w-[45em]">
          <Image movieData={movieData} />
        </div>
      </div>
    </div>
  );
}

export default ListCard;

function Image({ movieData }: { movieData: Movie[] }) {
  const setDrawerValue = useSetRecoilState(DrawerState);
  const setVideoId = useSetRecoilState(MovieId);
  const backdropImages: string[] = [];

  function handleclick(index: number) {
    const value = movieData[index];

    setVideoId(value.id);
    setDrawerValue(true);
  }

  movieData.forEach((item) => {
    if (item.backdropPath) {
      backdropImages.push(item.backdropPath);
    }
  });

  return (
    <>
      {backdropImages.map((backdropPath, index) => (
        <img
          onClick={() => handleclick(index)}
          key={index}
          src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
          alt="Backdrop"
          className="m-1 hover:scale-110 transition duration-150 ease-out  w-[15em] h-[8em] "
        />
      ))}
    </>
  );
}
