import { atom } from "recoil";

const intialState: string[] = [];

const ActionState = atom<string[]>({
  key: "ActionState",
  default: intialState,
});

export default ActionState;
