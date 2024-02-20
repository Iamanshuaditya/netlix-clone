import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];

const tvDocumentryState = atom<Movie[]>({
  key: "tvDocumentryState",
  default: initialState,
});

export default tvDocumentryState;
