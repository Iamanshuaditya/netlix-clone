import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Banner() {
  return (
    <div className="relative top-0">
      <div className="relative top-[-33em] overflow-hidden object-cover  xl:w-[400%] ">
        <div
          className="opacity-10 bg-no-repeat h-[100em] xl:h-[158em] "
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original//mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg")`,
          }}
        ></div>
        <div className="absolute text-[f8fafc] top-[42em] left-20 xl:top-[69em]">
          <div className=" w-[32em] xl:w-[76em] xl:grid xl:gap-6  ">
            <h1 className="font-bold text-[2.25em] opacity-100 mb-1  leading-10 xl:text-[7.5em] xl:leading-[1.2em]">
              The Hunger Games: The Ballad of Songbirds & Snakes
            </h1>
            <div className="grid gap-6">
              <p className="text-[#16a34a] font-semibold text-[0.875em] mb-1 xl:text-[3em]">
                72% Match <em></em>
                <span className="text-[#d1d5db]">2023-11-15</span>
              </p>
              <p className="xl:text-[3.5em] text-gray-300 xl:leading-[1.5em] ">
                64 years before he becomes the tyrannical president of Panem,
                Coriolanus Snow sees a chance for a change in fortunes when he
                mentors Lucy Gray Baird, the female tribute..
              </p>
            </div>
            <div className=" grid grid-cols-4 xl:grid-cols-[4em,4em] items-center space-x-2 pt-1.5 mt-1 xl:text-8xl xl:gap-12">
              <button
                type="button"
                className="inline-grid grid-cols-5  items-center justify-center xl:text-6xl xl:rounded-2xl font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 px-6  xl:px-8 xl:py-10 py-2 h-auto gap-1.5 rounded  xl:gap-12"
                aria-label="Play video"
              >
                <FaPlay className="col-start-2 xl:" />
                Play
              </button>
              <button
                type="button"
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
