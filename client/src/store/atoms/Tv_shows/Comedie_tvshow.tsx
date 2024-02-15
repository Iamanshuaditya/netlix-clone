import { atom } from "recoil";

const initialState: string[] = [];
const ComediestvShows = atom<string[]>({
  key: "ComediesState",
  default: initialState,
});

export default ComediestvShows;
