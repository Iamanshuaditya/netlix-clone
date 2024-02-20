import { Movie } from "@/components/Card";
import { atom } from "recoil";

const intialState: Movie[] = [];

const ActionState = atom<Movie[]>({
  key: "ActionState",
  default: intialState,
});

export default ActionState;
