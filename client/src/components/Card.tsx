import { CardValues } from "@/store/atoms/CardValues";
import { DrawerState } from "@/store/atoms/Drawer";
import MovieId from "@/store/atoms/movies/MovieId";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSetRecoilState } from "recoil";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  title: string;

  vote_count: number;
}

function Card({
  top,
  title,
  movieData,
}: {
  top: number;
  title: string;
  movieData: Movie[];
}) {
  function handleRightClick() {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollableWidth = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= scrollableWidth) {
        container.scrollLeft -= 1500;
      } else {
        container.scrollLeft += 1500;
      }
    }
  }

  function leftClick() {
    if (scrollContainerRef.current) {
      if (scrollContainerRef.current.scrollLeft > 0) {
        scrollContainerRef.current.scrollLeft -= 1500;
      } else {
        scrollContainerRef.current.scrollLeft += 1500;
      }
    }
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className={`top-[${top}em] maxWidth:absolute z-50  `}>
        <h1 className="font-semibold text-[1.2500em] ml-20 mb-2  xl:text-6xl xl:mb-10  xl:w-[150%] ]">
          {title}
        </h1>
        <div
          className="text-white bg-[#00000088] z-50  w-8 justify-center opacity-0  left-[5em]  grid items-center  absolute hover:opacity-100 transition duration-150  h-[11.5em]"
          onClick={leftClick}
        >
          <FaChevronLeft />
        </div>
        <div
          className="absolute left-20 overflow-y-scroll   "
          ref={scrollContainerRef}
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          <div className="w-[75rem] flex  xl:w-[243em] ">
            <Image movieData={movieData} />
          </div>
        </div>
        <div
          className="text-white bg-[#00000088] z-50    hover:opacity-100 w-8 justify-center  opacity-0 h-[11.5em] left-[78em]  grid items-center absolute    transition duration-150"
          onClick={handleRightClick}
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Card;

function Image({ movieData }: { movieData: Movie[] }) {
  const setCardValue = useSetRecoilState(CardValues);
  const setDrawerValue = useSetRecoilState(DrawerState);
  const setVideoId = useSetRecoilState(MovieId);
  const backdropImages: string[] = [];

  function handleclick(index: number) {
    const value = movieData[index];
    setCardValue([value]);
    console.log(value);
    console.log(value.id);
    setVideoId(value.id);
    setDrawerValue(true);
  }

  movieData.forEach((item) => {
    if (item.backdrop_path) {
      backdropImages.push(item.backdrop_path);
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
          className="m-1 hover:scale-110 transition duration-150 ease-out xl:w-[90em] xl:h-[24em] w-[28em] h-[11em] "
        />
      ))}
    </>
  );
}
