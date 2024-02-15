import { atom } from "recoil";

const initialMoviesState: string[] = [];

const ComediesState = atom<string[]>({
  key: "ComediesState",
  default: initialMoviesState,
});

export default ComediesState;
