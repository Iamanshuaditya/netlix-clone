import Card from "@/components/Card";
import SearchCard from "@/components/SearchCard";
import SearchState from "@/store/atoms/Search";
import PopularMovies from "@/store/atoms/Tv_shows/PopularMovies";
import PopularTvShow from "@/store/atoms/Tv_shows/PopularTV";
import NewMovies from "@/store/atoms/popular_new/new";
import NewTvShows from "@/store/atoms/popular_new/newTv";
import PopularNew from "@/utlis/Popular_new";
import { useRecoilState, useRecoilValue } from "recoil";
import Drawer from "../../components/Drawer";
import { DrawerState } from "@/store/atoms/Drawer";
import Data from "@/utlis/Movies_Data";

function NewPopular() {
  const newMovies = useRecoilValue(NewMovies);
  const isDrawerOpen = useRecoilValue(DrawerState);
  const [searchValues] = useRecoilState(SearchState);
  const newTvShow = useRecoilValue(NewTvShows);
  const PopularShow = useRecoilValue(PopularTvShow);
  const moviesPopular = useRecoilValue(PopularMovies);
  return (
    <>
      {isDrawerOpen ? <Drawer /> : ""}
      <Data />

      {searchValues == "" ? (
        <div className=" mt-5 grid gap-52 text-white xl:gap-[33em] tab:gap-[20em] ">
          <PopularNew />
          <Card top={5} title="New Tv Show" movieData={newTvShow} />
          <Card top={5} title="New Movies" movieData={newMovies} />
          <Card top={5} title="Popular Tv Shows" movieData={PopularShow} />
          <Card top={5} title="Popular Movies" movieData={moviesPopular} />
        </div>
      ) : (
        <SearchCard />
      )}
    </>
  );
}

export default NewPopular;
