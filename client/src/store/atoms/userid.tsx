import { atom } from "recoil";

const userId = atom<number | null | string>({
  key: "userId",
  default: null,
});
export default userId;
