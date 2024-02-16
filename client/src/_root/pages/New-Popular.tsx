import Card from "@/components/Card";
import NewMovies from "@/store/atoms/popular_new/new";
import NewTvShows from "@/store/atoms/popular_new/newTv";
import PopularNew from "@/utlis/Popular_new";
import { useRecoilValue } from "recoil";

function NewPopular() {
  const newMovies = useRecoilValue(NewMovies);
  const newTvShow = useRecoilValue(NewTvShows);
  return (
    <div className=" relative grid gap-52 text-white top-6">
      <PopularNew />
      <Card top={5} title="New Tv Show" movieData={newTvShow} />
      <Card top={5} title="New Movies" movieData={newMovies} />
    </div>
  );
}

export default NewPopular;
