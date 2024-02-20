import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialMoviesState: Movie[] = [];

const RomanceState = atom<Movie[]>({
  key: "RomanceState",
  default: initialMoviesState,
});

export default RomanceState;
