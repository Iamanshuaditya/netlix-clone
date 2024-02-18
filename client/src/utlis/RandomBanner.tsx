import RandomBannerState from "@/store/atoms/Banner/BannerAtom";
import Overview from "@/store/atoms/Banner/Overview";
import Poster from "@/store/atoms/Banner/Poster";
import ReleaseDate from "@/store/atoms/Banner/ReleaseDate";
import RandomTitle from "@/store/atoms/Banner/Title";
import axios, { AxiosResponse } from "axios";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const api_key = import.meta.env.VITE_TMDB_API;

function RandomBanner() {
  const setRandombanner = useSetRecoilState(RandomBannerState);
  const setTitle = useSetRecoilState(RandomTitle);
  const setOverview = useSetRecoilState(Overview);
  const setRelaseDate = useSetRecoilState(ReleaseDate);
  const setPoster = useSetRecoilState(Poster);
  const endPoint = getRandomEndpoints();
  useEffect(() => {
    axios.get(endPoint).then((response: AxiosResponse) => {
      const data = response.data.results;

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomMovie = data[randomIndex];
      setTitle(randomMovie.original_title);
      setRandombanner(randomMovie);
      setOverview(randomMovie.overview);
      setRelaseDate(randomMovie.release_date);
      setPoster(randomMovie.poster_path);
    });
  }, [
    endPoint,
    setRandombanner,
    setTitle,
    setOverview,
    setRelaseDate,
    setPoster,
  ]);

  return <></>;
}

export default RandomBanner;

function getRandomEndpoints() {
  const endPoints = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
  ];
  const randomIndex = Math.floor(Math.random() * endPoints.length);

  return endPoints[randomIndex];
}
