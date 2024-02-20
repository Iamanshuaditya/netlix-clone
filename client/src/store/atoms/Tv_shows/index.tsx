import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];

const trendingshows = atom<Movie[]>({
  key: "trendingShows",
  default: initialState,
});
export default trendingshows;
