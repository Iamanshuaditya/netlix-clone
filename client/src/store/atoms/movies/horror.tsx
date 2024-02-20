import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialMoviesState: Movie[] = [];

const horrorState = atom<Movie[]>({
  key: "horrorState",
  default: initialMoviesState,
});

export default horrorState;
