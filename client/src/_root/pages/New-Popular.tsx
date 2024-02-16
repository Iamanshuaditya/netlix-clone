import Card from "@/components/Card";
import PopularMovies from "@/store/atoms/Tv_shows/PopularMovies";
import PopularTvShow from "@/store/atoms/Tv_shows/PopularTV";
import NewMovies from "@/store/atoms/popular_new/new";
import NewTvShows from "@/store/atoms/popular_new/newTv";
import PopularNew from "@/utlis/Popular_new";
import { useRecoilValue } from "recoil";

function NewPopular() {
  const newMovies = useRecoilValue(NewMovies);
  const newTvShow = useRecoilValue(NewTvShows);
  const PopularShow = useRecoilValue(PopularTvShow);
  const moviesPopular = useRecoilValue(PopularMovies);
  return (
    <div className=" mt-5 grid gap-52 text-white ">
      <PopularNew />
      <Card top={5} title="New Tv Show" movieData={newTvShow} />
      <Card top={5} title="New Movies" movieData={newMovies} />
      <Card top={5} title="Popular Tv Shows" movieData={PopularShow} />
      <Card top={5} title="Popular Movies" movieData={moviesPopular} />
    </div>
  );
}

export default NewPopular;
