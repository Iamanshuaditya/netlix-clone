import { atom } from "recoil";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const initialState: Movie[] = [];
const RandomBannerState = atom<Movie[]>({
  key: "RamdomBanner",
  default: initialState,
});

export default RandomBannerState;
