import Trending from "@/store/atoms/movies/Trending";
import MovieState from "@/store/atoms/movies/movie";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import axios, { AxiosResponse } from "axios";
import topRatedState from "@/store/atoms/movies/top_rated";
import ActionState from "@/store/atoms/movies/action";
import ComediesState from "@/store/atoms/movies/comedies";
import horrorState from "@/store/atoms/movies/horror";
import RomanceState from "@/store/atoms/movies/romance";
import DocumentaryState from "@/store/atoms/movies/Documentaries";

interface Movie {
  backdrop_path: string;
}

function Data() {
  const setMovieState = useSetRecoilState(MovieState);
  const setTopRated = useSetRecoilState(topRatedState);
  const setTrendings = useSetRecoilState(Trending);
  const setAction = useSetRecoilState(ActionState);
  const setComedies = useSetRecoilState(ComediesState);
  const setHorror = useSetRecoilState(horrorState);
  const setRomance = useSetRecoilState(RomanceState);
  const setDocumentary = useSetRecoilState(DocumentaryState);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const [
          movieResponse,
          trendingResponse,
          topRatedResponse,
          actionResponse,
          comediesResponse,
          horrorResponse,
          romanceResponse,
          documentaryResponse,
        ] = await Promise.all([
          axios.get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b5567485072637e740f970c66c1c9c8c"
          ),
          axios.get(
            "https://api.themoviedb.org/3/trending/all/day?api_key=b5567485072637e740f970c66c1c9c8c"
          ),
          axios.get(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=b5567485072637e740f970c66c1c9c8c"
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b5567485072637e740f970c66c1c9c8c",
            {
              params: { with_genres: "28" },
            }
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b5567485072637e740f970c66c1c9c8c",
            {
              params: { with_genres: "35" },
            }
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b5567485072637e740f970c66c1c9c8c",
            {
              params: { with_genres: "27" },
            }
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b5567485072637e740f970c66c1c9c8c",
            {
              params: { with_genres: "10749" },
            }
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b5567485072637e740f970c66c1c9c8c",
            {
              params: { with_genres: "99" },
            }
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

        setMovieState(processResponse(movieResponse));

        setTrendings(processResponse(trendingResponse));
        setTopRated(processResponse(topRatedResponse));
        setAction(processResponse(actionResponse));
        setComedies(processResponse(comediesResponse));
        setHorror(processResponse(horrorResponse));
        setRomance(processResponse(romanceResponse));
        setDocumentary(processResponse(documentaryResponse));
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [
    setMovieState,
    setTrendings,
    setTopRated,
    setAction,
    setComedies,
    setHorror,
    setRomance,
    setDocumentary,
  ]);

  return <></>;
}

export default Data;
