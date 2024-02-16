import { atom } from "recoil";

const initailState: string[] = [];

const NewTvShows = atom<string[]>({
  key: "newTvShowState",
  default: initailState,
});
export default NewTvShows;
