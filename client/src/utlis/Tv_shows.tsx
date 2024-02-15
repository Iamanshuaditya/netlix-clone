import trendingshows from "@/store/atoms/Tv_shows";
import ComediestvShows from "@/store/atoms/Tv_shows/Comedie_tvshow";
import RomanceTvShow from "@/store/atoms/Tv_shows/Romance_tv";
import topRatedTvShows from "@/store/atoms/Tv_shows/top_rated";
import tvDocumentryState from "@/store/atoms/Tv_shows/tv_Documentry";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
interface Movie {
  backdrop_path: string;
}

function TvShows() {
  const setTrendingTvShow = useSetRecoilState(trendingshows);
  const setTopRatedTvShow = useSetRecoilState(topRatedTvShows);
  const setComedyTvShow = useSetRecoilState(ComediestvShows);
  const setRomanseTvshow = useSetRecoilState(RomanceTvShow);
  const setTvDocumentry = useSetRecoilState(tvDocumentryState);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const [
          trendingResponseTv,
          topRatedResponse,
          comediesResponse,
          romanceResponse,
          documentaryResponse,
        ] = await Promise.all([
          axios.get(
            "https://api.themoviedb.org/3/trending/tv/day?api_key=b5567485072637e740f970c66c1c9c8c"
          ),
          axios.get(
            "https://api.themoviedb.org/3/tv/top_rated?api_key=b5567485072637e740f970c66c1c9c8c"
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/tv?api_key=b5567485072637e740f970c66c1c9c8c&with_genres=35"
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/tv?api_key=b5567485072637e740f970c66c1c9c8c&with_genres=37"
          ),
          axios.get(
            "https://api.themoviedb.org/3/discover/tv?api_key=b5567485072637e740f970c66c1c9c8c&with_genres=99"
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

        setTrendingTvShow(processResponse(trendingResponseTv));
        setTopRatedTvShow(processResponse(topRatedResponse));
        setComedyTvShow(processResponse(comediesResponse));
        setRomanseTvshow(processResponse(romanceResponse));
        setTvDocumentry(processResponse(documentaryResponse));
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [
    setTrendingTvShow,
    setTopRatedTvShow,
    setComedyTvShow,
    setRomanseTvshow,
    setTvDocumentry,
  ]);
  return <></>;
}

export default TvShows;
