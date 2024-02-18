import { atom } from "recoil";

const initialState: string[] = [];

const SearchResultsState = atom<string[]>({
  key: "SearchResults",
  default: initialState,
});
export default SearchResultsState;
