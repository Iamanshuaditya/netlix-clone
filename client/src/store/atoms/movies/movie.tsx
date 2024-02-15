import { atom } from "recoil";

const initialMoviesState: string[] = [];

const MovieState = atom<string[]>({
  key: "movieState",
  default: initialMoviesState,
});

export default MovieState;
