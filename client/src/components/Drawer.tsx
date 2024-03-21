import { CardValues } from "@/store/atoms/CardValues";
import { DrawerState } from "@/store/atoms/Drawer";
// import MovieId from "@/store/atoms/movies/MovieId";
import vidioState from "@/store/atoms/movies/Vidio";
import axios from "axios";

import { Check, Plus, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useState } from "react";

import { FaPlay } from "react-icons/fa";
import { PiColumnsFill } from "react-icons/pi";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Gpt from "./chat/Gpt";

function Drawer() {
  const [isAdded, setisAdded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [movieId, setMovieId] = useState<number | undefined>();

  const [showGpt, SetShowGpt] = useState(true);
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const Cardvalue = useRecoilValue(CardValues);
  const DrawerValue = useRecoilValue(DrawerState);
  const [overview, setOverview] = useState("");
  const setDrawerValue = useSetRecoilState(DrawerState);
  const MovieVidio = useRecoilValue(vidioState);

  useEffect(() => {
    const res = Cardvalue[0];

    if (res.original_title) {
      setTitle(res.original_title);
    } else {
      setTitle(res.name);
    }

    setLanguage(res.original_language);
    setOverview(res.overview);
    setReleaseYear(res.release_date);
  }, [Cardvalue]);

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };
  // const apiKey = import.meta.env.VITE_TMDB_API;
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };
  const videoUrl = `https://www.youtube.com/embed/${
    MovieVidio[0]?.key
  }?autoplay=${isPlaying ? "1" : "0"}&mute=${isMuted ? "1" : "0"}`;

  const id = localStorage.getItem("profileId");

  const backdropPath = Cardvalue[0].backdrop_path;
  const genreIds = Cardvalue[0].genre_ids;
  const originalLanguage = Cardvalue[0].original_language;
  const originalTitle = Cardvalue[0].original_title;
  const popularity = Cardvalue[0].popularity;
  const posterPath = Cardvalue[0].poster_path;
  const releaseDate = new Date(Cardvalue[0].release_date);
  const adult = Cardvalue[0].adult;

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

  useEffect(() => {
    const fetchUserMovies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4242/getallmovies/${id}`
        );
        const userMovies: Movie[] = response.data.map((movieData: Movie) => {
          return { ...movieData, id: movieData.id };
        });

        const movieExists = userMovies.some(
          (movie: Movie) => movie.title === title
        );
        setisAdded(movieExists);
        if (movieExists) {
          const existingMovie = userMovies.find(
            (movie: Movie) => movie.title === title
          );
          if (existingMovie) {
            setMovieId(existingMovie.id);
            console.log(existingMovie.id);
          }
        }
      } catch (error) {
        console.log("Error fetching user movies:", error);
      }
    };

    fetchUserMovies();
  }, [id, title]);

  const movieData = {
    title,
    backdropPath,
    genreIds,
    originalLanguage,
    originalTitle,
    overview,
    popularity,
    posterPath,
    releaseDate,
    adult,
  };
  async function AddtoList() {
    try {
      const response = await axios.post(
        `http://localhost:4242/addmovies/${id}`,
        movieData
      );
      console.log(response.data);
      if (response.status >= 200 && response.status < 300) {
        setisAdded(true);
      }
    } catch (error) {
      console.log("unable to Add Movie", error);
    }
  }

  async function RemovefromList() {
    try {
      const response = await axios.delete(
        `http://localhost:4242/deletemovie/${movieId}`
      );
      if (response.status >= 200 && response.status < 300) {
        setisAdded(false);
      }
      console.log(response.data);
    } catch (error) {
      console.log("Unable to remove movie", error);
    }
  }

  function handleToggle() {
    SetShowGpt(!showGpt);
  }

  return (
    <div className={DrawerValue ? "block" : "hidden"}>
      <div className="fixed inset-0 flex items-start justify-center sm:items-center z-[1000]   ">
        <div
          data-state="open"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in "
          style={{ pointerEvents: "auto" }}
          data-aria-hidden="true"
          aria-hidden="true"
        ></div>
        <div
          role="dialog"
          id="radix-:ra:"
          aria-describedby="radix-:rc:"
          aria-labelledby="radix-:rb:"
          data-state="open"
          className="fixed  h-full z-50 grid gap-4  animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 w-full overflow-hidden rounded-md bg-zinc-900 p-0 text-left align-middle shadow-xl dark:bg-zinc-900 sm:max-w-3xl "
          style={{ pointerEvents: "auto" }}
        >
          <div className="relative aspect-video">
            <div className="bg-black/10 bg-gradient-to-b from-neutral-900/10 to-neutral-900 absolute inset-0 z-10 h-full w-full"></div>
            <div className="absolute top-0 left-0  w-full h-full ">
              <div className="w-full h-full">
                {MovieVidio[0] ? (
                  isPlaying ? (
                    <iframe
                      width="780"
                      height="430"
                      src={videoUrl}
                      title={title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <embed
                      width="780"
                      height="430"
                      src={`https://www.youtube.com/embed/${MovieVidio[0].key}?autoplay=0`}
                      title={title}
                      className="w-full h-full"
                    ></embed>
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="absolute bottom-6 z-20 flex w-full items-center justify-between gap-2 px-10">
              <div className="flex items-center gap-2.5  ">
                <button
                  type="button"
                  onClick={handlePlayButtonClick}
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 px-4 xl:px-2 group h-auto rounded py-1.5  "
                  aria-label="Play show"
                >
                  {isPlaying ? (
                    <PiColumnsFill className="mr-3 xl:mr-1" size={20} />
                  ) : (
                    <FaPlay className="mr-5 xl:mr-2" size={20} />
                  )}
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent h-auto rounded-full bg-neutral-800 p-1.5 ring-1 ring-slate-400 hover:bg-neutral-800 hover:ring-white focus:ring-offset-0 dark:bg-neutral-800 dark:hover:bg-neutral-800  "
                  aria-label="Add to My List"
                  data-state="closed"
                >
                  {isAdded ? (
                    <Check onClick={RemovefromList} />
                  ) : (
                    <Plus onClick={AddtoList} className=" " />
                  )}
                </button>
              </div>
              <button
                type="button"
                onClick={handleMuteToggle}
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent h-auto rounded-full bg-neutral-800 p-1.5 opacity-50 ring-1 ring-slate-400 hover:bg-neutral-800 hover:opacity-100 hover:ring-white focus:ring-offset-0 dark:bg-neutral-800 dark:hover:bg-neutral-800"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className=" " />
                ) : (
                  <Volume2 className=" " />
                )}
              </button>
            </div>
          </div>
          {showGpt ? (
            <div className="overflow-scroll  h-80    ">
              <div className="grid gap-2.5 px-10 pb-10">
                <div className="flex justify-between ">
                  <h2
                    id="radix-:rb:"
                    className="dark:text-slate-50 text-lg font-medium leading-6 text-slate-50 sm:text-xl  "
                  >
                    {title}
                  </h2>
                  <button
                    type="button"
                    onClick={handleToggle}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Netflix GPT
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-sm sm:text-base  ">
                  <p className="font-semibold text-green-400">55% Match</p>
                  <p>{releaseYear}</p>
                  <span className="grid h-4 w-7 place-items-center text-xs font-bold text-neutral-400 ring-1 ring-neutral-400 ">
                    {language}
                  </span>
                </div>
                <p
                  id="radix-:rc:"
                  className="line-clamp-3 text-xs text-slate-50 dark:text-slate-50 sm:text-sm    "
                >
                  {overview}
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm ">
                  <span className="text-slate-600  ">Genres:</span>
                  Science Fiction, Action, Adventure
                </div>
              </div>
            </div>
          ) : (
            <Gpt onclick={handleToggle} />
          )}
          <button
            type="button"
            className="absolute right-4 top-4 z-20 rounded-full bg-neutral-800 p-1.5 opacity-70 ring-offset-slate-900 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-slate-800 dark:bg-neutral-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
          >
            <X onClick={() => setDrawerValue(!DrawerState)} />

            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
