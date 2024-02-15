import { atom } from "recoil";

const initialState: string[] = [];

const topRatedState = atom<string[]>({
  key: "topRatedState",
  default: initialState,
});

export default topRatedState;
