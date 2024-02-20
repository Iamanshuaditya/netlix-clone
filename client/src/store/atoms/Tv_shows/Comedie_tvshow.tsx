import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];
const ComediestvShows = atom<Movie[]>({
  key: "ComediesState",
  default: initialState,
});

export default ComediestvShows;
