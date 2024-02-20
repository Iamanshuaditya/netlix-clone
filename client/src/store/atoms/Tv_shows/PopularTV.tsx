import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];

const PopularTvShow = atom<Movie[]>({
  key: "PopularTvShowState",
  default: initialState,
});

export default PopularTvShow;
