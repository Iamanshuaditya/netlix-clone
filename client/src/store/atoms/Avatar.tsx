import { atom } from "recoil";

export const AvatarState = atom<string | null>({
  key: "avatar",
  default: "",
});
