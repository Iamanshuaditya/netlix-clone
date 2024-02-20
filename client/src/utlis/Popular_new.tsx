import PopularMovies from "@/store/atoms/Tv_shows/PopularMovies";
import PopularTvShow from "@/store/atoms/Tv_shows/PopularTV";
import NewMovies from "@/store/atoms/popular_new/new";
import NewTvShows from "@/store/atoms/popular_new/newTv";
import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

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

        setNewMovies(newMovieResponse.data.results);
        setTvShow(NewTvshowResponse.data.results);
        setPopularTvShow(popularTvShowResponse.data.results);
        setPopularMovies(PopularMovieResponse.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [setNewMovies, setTvShow, setPopularTvShow, setPopularMovies]);
  return <></>;
}

export default PopularNew;
