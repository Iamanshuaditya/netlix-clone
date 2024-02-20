import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialMoviesState: Movie[] = [];

const ComediesState = atom<Movie[]>({
  key: "Comedies",
  default: initialMoviesState,
});

export default ComediesState;
