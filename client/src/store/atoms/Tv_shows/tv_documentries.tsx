import { atom } from "recoil";

const initialState: string[] = [];

const Tvdocumentries = atom<string[]>({
  key: "Tvdocumentries",
  default: initialState,
});

export default Tvdocumentries;
