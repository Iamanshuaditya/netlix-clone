import { atom } from "recoil";

const initialMoviesState: string[] = [];

const horrorState = atom<string[]>({
  key: "horrorState",
  default: initialMoviesState,
});

export default horrorState;
