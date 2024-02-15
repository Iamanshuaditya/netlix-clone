import { atom } from "recoil";

const initialState: string[] = [];

const tvDocumentryState = atom<string[]>({
  key: "tvDocumentryState",
  default: initialState,
});

export default tvDocumentryState;
