import { atom } from "recoil";

const initialState: string[] = [];
const Overview = atom({
  key: "OverviewState",
  default: initialState,
});

export default Overview;
