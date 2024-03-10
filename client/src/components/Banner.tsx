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
      const truncatedOverview =
        randomMovie.overview.length > 310
          ? `${randomMovie.overview.slice(0, 380)}....`
          : randomMovie.overview;
      SetOverview(truncatedOverview);
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
      <div className="relative  overflow-hidden object-cover xl:top-[-4em] tab:w-[48em] tab:top-[-6em] top-[-4em] xl:w-[27em]  w-[84em]">
        <div
          className="opacity-20  bg-no-repeat h-[100em]  object-cover banner tab:bg-tablet xl:bg-mobile  "
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${poster}")`,
            backgroundSize: "84.5em",
          }}
        ></div>
        <div className="absolute text-[f8fafc] top-[15em] left-20 xl:top-[10em]  xl:left-6 tab:text-2xl tab:top-[12em]">
          <div className=" w-[32em]  xl:w-full xl:grid xl:gap-6  ">
            <h1 className="font-bold text-[2.25em] opacity-100 mb-2  leading-10  ">
              {title}
            </h1>

            <div className="grid gap-2">
              <p className="text-[#16a34a] font-semibold text-[0.875em]  mb-2">
                <Match />% Match <em></em>
                <span className="text-[#d1d5db]">{releseDate}</span>
              </p>
              <p className=" text-gray-300 xl:leading-[1.5em]  tab:w-[70%]">
                <h1 className=" text-gray-300 xl:leading-[1.5em]   overflow-hidden ">
                  {overview}
                </h1>
              </p>
            </div>
            <div className=" grid grid-cols-4 xl:grid-cols-[6em,8em] items-center space-x-2 pt-1.5 mt-1  xl:gap-4">
              <button
                type="button"
                onClick={handlePlay}
                className="inline-grid grid-cols-5  items-center justify-center  xl:rounded-2xl font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 px-6  xl:px-0 py-2 xl:py-1 h-auto gap-1.5 rounded tab:py-3"
                aria-label="Play video"
              >
                <FaPlay className="col-start-2 " />
                Play
              </button>
              <button
                type="button"
                onClick={handleMoreInfo}
                className="inline-flex items-center justify-center text-sm font-medium  ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 px-4 py-2 h-auto gap-2 rounded  tab:text-base tab:py-5"
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
