import { atom } from "recoil";

const initialState: string[] = [];

const trendingshows = atom<string[]>({
  key: "trendingShows",
  default: initialState,
});
export default trendingshows;
