import RandomBannerState from "@/store/atoms/Banner/BannerAtom";
import { CardValues } from "@/store/atoms/CardValues";
import { DrawerState } from "@/store/atoms/Drawer";
import MovieId from "@/store/atoms/movies/MovieId";
import RandomBanner from "@/utlis/RandomBanner";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Banner() {
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [overview, SetOverview] = useState("");
  const [releseDate, SetReleaseDate] = useState("");
  const setVideoId = useSetRecoilState(MovieId);
  const setCardValue = useSetRecoilState(CardValues);
  const setDrawerValue = useSetRecoilState(DrawerState);
  const Match = () => {
    const num = Math.floor(100 * Math.random()) + 1;
    return num;
  };
  const randomBanner = useRecoilValue(RandomBannerState);
  function handleMoreInfo() {
    const banner = randomBanner[0];
    setCardValue([banner]);
    setVideoId(banner.id);
    setDrawerValue(true);
  }

  useEffect(() => {
    if (randomBanner.length > 0) {
      const randomMovie = randomBanner[0];
      setPoster(randomMovie.poster_path);
      setTitle(randomMovie.title);
      SetOverview(randomMovie.overview);
      SetReleaseDate(randomMovie.release_date);
    }
  }, [randomBanner]);

  function handlePlay() {
    const banner = randomBanner[0];
    setCardValue([banner]);
    setVideoId(banner.id);
    setDrawerValue(true);
  }
  return (
    <div className="relative top-0 ">
      <RandomBanner />
      <div className="relative top-[-33em] overflow-hidden object-cover  xl:w-[400%] ">
        <div
          className="opacity-20 w-full bg-no-repeat h-[100em] xl:h-[185em] object-cover banner "
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${poster}")`,
          }}
        ></div>
        <div className="absolute text-[f8fafc] top-[42em] left-20 xl:top-[69em]">
          <div className=" w-[32em] xl:w-[76em] xl:grid xl:gap-12  ">
            <h1 className="font-bold text-[2.25em] opacity-100 mb-2  leading-10 xl:text-[7.5em] xl:leading-[1.2em] ">
              {title}
            </h1>

            <div className="grid gap-2">
              <p className="text-[#16a34a] font-semibold text-[0.875em] xl:text-[3em] mb-2">
                <Match />% Match <em></em>
                <span className="text-[#d1d5db]">{releseDate}</span>
              </p>
              <p className="xl:text-[3.5em] text-gray-300 xl:leading-[1.5em] ">
                <h1 className="xl:text-[1em] text-gray-300 xl:leading-[1.5em]   overflow-hidden ">
                  {overview}
                </h1>
              </p>
            </div>
            <div className=" grid grid-cols-4 xl:grid-cols-[4em,4em] items-center space-x-2 pt-1.5 mt-1 xl:text-8xl xl:gap-12">
              <button
                type="button"
                onClick={handlePlay}
                className="inline-grid grid-cols-5  items-center justify-center xl:text-6xl xl:rounded-2xl font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 px-6  xl:px-8 xl:py-10 py-2 h-auto gap-1.5 rounded  xl:gap-12"
                aria-label="Play video"
              >
                <FaPlay className="col-start-2 xl:" />
                Play
              </button>
              <button
                type="button"
                onClick={handleMoreInfo}
                className="inline-flex items-center justify-center text-sm font-medium xl:text-6xl xl:rounded-2xl ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 px-4 py-2 h-auto gap-2 rounded xl:px-8 xl:py-12 xl:gap-4 xl:w-[115%]"
                aria-label="Open show's details modal"
              >
                <IoMdInformationCircleOutline />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
