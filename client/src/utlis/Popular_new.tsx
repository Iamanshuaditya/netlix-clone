import NewMovies from "@/store/atoms/popular_new/new";
import NewTvShows from "@/store/atoms/popular_new/newTv";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface Movie {
  backdrop_path: string;
}

function PopularNew() {
  const setNewMovies = useSetRecoilState(NewMovies);
  const setTvShow = useSetRecoilState(NewTvShows);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const [newMovieResponse, NewTvshowResponse] = await Promise.all([
          axios.get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=b5567485072637e740f970c66c1c9c8c"
          ),
          axios.get(
            "https://api.themoviedb.org/3/tv/airing_today?api_key=b5567485072637e740f970c66c1c9c8c"
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
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [setNewMovies, setTvShow]);
  return <></>;
}

export default PopularNew;
