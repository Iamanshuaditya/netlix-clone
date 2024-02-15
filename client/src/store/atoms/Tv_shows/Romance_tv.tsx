import { atom } from "recoil";

const initialState: string[] = [];

const RomanceTvShow = atom<string[]>({
  key: "RomanceTvShow",
  default: initialState,
});

export default RomanceTvShow;
