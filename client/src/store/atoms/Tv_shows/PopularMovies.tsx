import { atom } from "recoil";

const initialState: string[] = [];

const PopularMovies = atom<string[]>({
  key: "PopularMoviesState",
  default: initialState,
});

export default PopularMovies;
