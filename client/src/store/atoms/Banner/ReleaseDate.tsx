import { atom } from "recoil";

const initialState: string[] = [];
const ReleaseDate = atom({
  key: "ReleaseDateState",
  default: initialState,
});

export default ReleaseDate;
