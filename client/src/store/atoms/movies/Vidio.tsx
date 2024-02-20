import { atom } from "recoil";

interface Video {
  iso_639_1: string;
  playedOnce: boolean;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

const vidioState = atom<Video[]>({
  key: "Vidio",
  default: [],
});

export default vidioState;
