import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialState: Movie[] = [];

const RomanceTvShow = atom<Movie[]>({
  key: "RomanceTvShow",
  default: initialState,
});

export default RomanceTvShow;
