import { atom } from "recoil";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  name: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: string;
}

const RandomBannerState = atom<Movie[]>({
  key: "RamdomBanner",
  default: [],
});

export default RandomBannerState;
