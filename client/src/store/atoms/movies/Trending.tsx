import { atom } from "recoil";
import { Movie } from "../../../components/Card";

const initialMoviesState: Movie[] = [];

const Trending = atom<Movie[]>({
  key: "trendingState",
  default: initialMoviesState,
});

export default Trending;
