import { atom } from "recoil";

const initialMoviesState: string[] = [];

const ComediesState = atom<string[]>({
  key: "Comedies",
  default: initialMoviesState,
});

export default ComediesState;
