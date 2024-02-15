import { atom } from "recoil";

const initialMoviesState: string[] = [];

const DocumentaryState = atom<string[]>({
  key: "DocumentaryState",
  default: initialMoviesState,
});

export default DocumentaryState;
