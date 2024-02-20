import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initailState: Movie[] = [];

const NewMovies = atom<Movie[]>({
  key: "newMoviesState",
  default: initailState,
});
export default NewMovies;
