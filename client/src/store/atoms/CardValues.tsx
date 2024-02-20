import { Movie } from "@/components/Card";
import { atom } from "recoil";

const initialMovies: Movie[] = [];

export const CardValues = atom<Movie[]>({
  key: "CardValues",
  default: initialMovies,
});
