import { atom } from "recoil";

const initialState: string[] = [];

const topRatedTvShows = atom<string[]>({
  key: "topRatedTvShows",
  default: initialState,
});

export default topRatedTvShows;
