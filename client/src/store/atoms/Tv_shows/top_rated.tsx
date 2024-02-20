import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];

const topRatedTvShows = atom<Movie[]>({
  key: "topRatedTvShows",
  default: initialState,
});

export default topRatedTvShows;
