import { atom } from "recoil";

const DefaultId = "";

const MovieId = atom<string | null | number>({
  key: "MovieIdState",
  default: DefaultId,
});

export default MovieId;
