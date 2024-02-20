import Trending from "@/store/atoms/movies/Trending";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";
import topRatedState from "@/store/atoms/movies/top_rated";
import ActionState from "@/store/atoms/movies/action";
import ComediesState from "@/store/atoms/movies/comedies";
import horrorState from "@/store/atoms/movies/horror";
import RomanceState from "@/store/atoms/movies/romance";
import DocumentaryState from "@/store/atoms/movies/Documentaries";
import vidioState from "@/store/atoms/movies/Vidio";
import MovieId from "@/store/atoms/movies/MovieId";

const api_key = import.meta.env.VITE_TMDB_API;

function Data() {
  const setTopRated = useSetRecoilState(topRatedState);
  const setTrendings = useSetRecoilState(Trending);
  const setAction = useSetRecoilState(ActionState);
  const setComedies = useSetRecoilState(ComediesState);
  const setHorror = useSetRecoilState(horrorState);
  const setRomance = useSetRecoilState(RomanceState);
  const setDocumentary = useSetRecoilState(DocumentaryState);
  const setMovieVideo = useSetRecoilState(vidioState);
  const VidioId = useRecoilValue(MovieId);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const requests = [
          axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
            { params: { with_genres: "28" } }
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
            { params: { with_genres: "35" } }
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
            { params: { with_genres: "27" } }
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
            { params: { with_genres: "10749" } }
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
            { params: { with_genres: "99" } }
          ),
        ];

        if (VidioId) {
          requests.push(
            axios.get(
              `https://api.themoviedb.org/3/movie/${VidioId}/videos?api_key=${api_key}`
            )
          );
        }
        const responses = await Promise.all(requests);

        setTrendings(responses[0].data.results);
        setTopRated(responses[1].data.results);
        setAction(responses[2].data.results);
        setComedies(responses[3].data.results);
        setHorror(responses[4].data.results);
        setRomance(responses[5].data.results);
        setDocumentary(responses[6].data.results);

        if (VidioId && responses.length === requests.length) {
          setMovieVideo(responses[responses.length - 1].data.results);
          console.log(
            "Movie Videos:",
            responses[responses.length - 1].data.results
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [
    setTrendings,
    setTopRated,
    setAction,
    setComedies,
    setHorror,
    setRomance,
    setDocumentary,
    setMovieVideo,
    VidioId,
  ]);

  return <></>;
}

export default Data;
