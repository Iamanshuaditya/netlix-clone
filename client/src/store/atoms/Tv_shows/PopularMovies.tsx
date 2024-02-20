import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];

const PopularMovies = atom<Movie[]>({
  key: "PopularMoviesState",
  default: initialState,
});

export default PopularMovies;
