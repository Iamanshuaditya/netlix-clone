import { atom } from "recoil";

const userId = atom<number | null>({
  key: "userId",
  default: null,
});
export default userId;
