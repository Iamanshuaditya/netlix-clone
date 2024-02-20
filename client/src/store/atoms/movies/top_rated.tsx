import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];

const topRatedState = atom<Movie[]>({
  key: "topRatedState",
  default: initialState,
});

export default topRatedState;
