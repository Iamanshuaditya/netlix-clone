import { atom } from "recoil";

const initialMoviesState: string[] = [];

const Trending = atom<string[]>({
  key: "trendingState",
  default: initialMoviesState,
});

export default Trending;
