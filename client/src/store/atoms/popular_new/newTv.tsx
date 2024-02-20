import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initailState: Movie[] = [];

const NewTvShows = atom<Movie[]>({
  key: "newTvShowState",
  default: initailState,
});
export default NewTvShows;
