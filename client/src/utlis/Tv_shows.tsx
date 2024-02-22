import trendingshows from "@/store/atoms/Tv_shows";
import ComediestvShows from "@/store/atoms/Tv_shows/Comedie_tvshow";
import RomanceTvShow from "@/store/atoms/Tv_shows/Romance_tv";
import topRatedTvShows from "@/store/atoms/Tv_shows/top_rated";
import tvDocumentryState from "@/store/atoms/Tv_shows/tv_Documentry";
import MovieId from "@/store/atoms/movies/MovieId";
import vidioState from "@/store/atoms/movies/Vidio";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const api_key = import.meta.env.VITE_TMDB_API;

function TvShows() {
  const setTrendingTvShow = useSetRecoilState(trendingshows);
  const setTopRatedTvShow = useSetRecoilState(topRatedTvShows);
  const setComedyTvShow = useSetRecoilState(ComediestvShows);
  const setRomanseTvshow = useSetRecoilState(RomanceTvShow);
  const setTvDocumentry = useSetRecoilState(tvDocumentryState);
  const setMovieVideo = useSetRecoilState(vidioState);
  const VidioId = useRecoilValue(MovieId);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const requests = [
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
        ];

        if (VidioId) {
          requests.push(
            axios.get(
              `https://api.themoviedb.org/3/tv/${VidioId}/videos?api_key=${api_key}`
            )
          );
        }

        const responses = await Promise.all(requests);

        setTrendingTvShow(responses[0].data.results);
        setTopRatedTvShow(responses[1].data.results);
        setComedyTvShow(responses[2].data.results);
        setRomanseTvshow(responses[3].data.results);
        setTvDocumentry(responses[4].data.results);

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
    setTrendingTvShow,
    VidioId,
    setTopRatedTvShow,
    setComedyTvShow,
    setRomanseTvshow,
    setTvDocumentry,
  ]);
  return <></>;
}

export default TvShows;
