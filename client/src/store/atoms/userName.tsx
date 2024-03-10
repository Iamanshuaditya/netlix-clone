import { atom } from "recoil";

export const username = atom<string | null>({
  key: "usernameState",
  default: null,
});
