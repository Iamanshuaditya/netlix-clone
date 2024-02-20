import trendingshows from "@/store/atoms/Tv_shows";
import ComediestvShows from "@/store/atoms/Tv_shows/Comedie_tvshow";
import RomanceTvShow from "@/store/atoms/Tv_shows/Romance_tv";
import topRatedTvShows from "@/store/atoms/Tv_shows/top_rated";
import tvDocumentryState from "@/store/atoms/Tv_shows/tv_Documentry";
import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const api_key = import.meta.env.VITE_TMDB_API;

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
            `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=35`
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=37`
          ),
          axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=99`
          ),
        ]);

        setTrendingTvShow(trendingResponseTv.data.results);
        setTopRatedTvShow(topRatedResponse.data.results);
        setComedyTvShow(comediesResponse.data.results);
        setRomanseTvshow(romanceResponse.data.results);
        setTvDocumentry(documentaryResponse.data.results);
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
