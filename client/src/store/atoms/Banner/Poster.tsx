import { atom } from "recoil";

const initialState: string[] = [];
const Poster = atom({
  key: "PosterState",
  default: initialState,
});

export default Poster;
