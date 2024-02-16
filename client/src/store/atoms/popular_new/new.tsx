import { atom } from "recoil";

const initailState: string[] = [];

const NewMovies = atom<string[]>({
  key: "newMoviesState",
  default: initailState,
});
export default NewMovies;
