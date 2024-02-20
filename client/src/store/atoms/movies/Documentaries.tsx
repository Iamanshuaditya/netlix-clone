import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialMoviesState: Movie[] = [];

const DocumentaryState = atom<Movie[]>({
  key: "DocumentaryState",
  default: initialMoviesState,
});

export default DocumentaryState;
