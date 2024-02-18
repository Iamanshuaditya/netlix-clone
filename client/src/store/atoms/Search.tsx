import { atom } from "recoil";

const SearchState = atom<string>({
  key: "SearchState",
  default: "",
});
export default SearchState;
