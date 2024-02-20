import { Movie } from "@/components/Card";
import { atom } from "recoil";

const SearchResultsState = atom<Movie[]>({
  key: "SearchResults",
  default: [],
});
export default SearchResultsState;
