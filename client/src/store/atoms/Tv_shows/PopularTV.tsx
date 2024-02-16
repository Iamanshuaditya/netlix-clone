import { atom } from "recoil";

const initialState: string[] = [];

const PopularTvShow = atom<string[]>({
  key: "PopularTvShowState",
  default: initialState,
});

export default PopularTvShow;
