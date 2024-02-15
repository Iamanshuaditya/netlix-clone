import { atom } from "recoil";

const initialMoviesState: string[] = [];

const RomanceState = atom<string[]>({
  key: "RomanceState",
  default: initialMoviesState,
});

export default RomanceState;
