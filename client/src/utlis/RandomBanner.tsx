import RandomBannerState from "@/store/atoms/Banner/BannerAtom";
import axios, { AxiosResponse } from "axios";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const api_key = import.meta.env.VITE_TMDB_API;

function RandomBanner() {
  const setRandombanner = useSetRecoilState(RandomBannerState);

  const endPoint = getRandomEndpoints();
  useEffect(() => {
    axios.get(endPoint).then((response: AxiosResponse) => {
      const data = response.data.results;
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomMovie = data[randomIndex];
      setRandombanner([randomMovie]);
    });
  }, [endPoint, setRandombanner]);

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
