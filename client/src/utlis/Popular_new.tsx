import PopularMovies from "@/store/atoms/Tv_shows/PopularMovies";
import PopularTvShow from "@/store/atoms/Tv_shows/PopularTV";
import NewMovies from "@/store/atoms/popular_new/new";
import NewTvShows from "@/store/atoms/popular_new/newTv";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface Movie {
  backdrop_path: string;
}

const api_key = import.meta.env.VITE_TMDB_API;

function PopularNew() {
  const setNewMovies = useSetRecoilState(NewMovies);
  const setTvShow = useSetRecoilState(NewTvShows);
  const setPopularTvShow = useSetRecoilState(PopularTvShow);
  const setPopularMovies = useSetRecoilState(PopularMovies);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const [
          newMovieResponse,
          NewTvshowResponse,
          popularTvShowResponse,
          PopularMovieResponse,
        ] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
          ),
        ]);
        const processResponse = (response: AxiosResponse) => {
          const processedData = response.data.results.map((movie: Movie) =>
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : null
          );

          return processedData;
        };

        setNewMovies(processResponse(newMovieResponse));
        setTvShow(processResponse(NewTvshowResponse));
        setPopularTvShow(processResponse(popularTvShowResponse));
        setPopularMovies(processResponse(PopularMovieResponse));
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [setNewMovies, setTvShow, setPopularTvShow, setPopularMovies]);
  return <></>;
}

export default PopularNew;
