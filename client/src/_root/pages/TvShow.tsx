import Card from "@/components/Card";
import SearchCard from "@/components/SearchCard";
import { DrawerState } from "@/store/atoms/Drawer";
import SearchState from "@/store/atoms/Search";
import trendingshows from "@/store/atoms/Tv_shows";
import ComediestvShows from "@/store/atoms/Tv_shows/Comedie_tvshow";
import RomanceTvShow from "@/store/atoms/Tv_shows/Romance_tv";
import topRatedTvShows from "@/store/atoms/Tv_shows/top_rated";
import tvDocumentryState from "@/store/atoms/Tv_shows/tv_Documentry";
import Drawer from "../../components/Drawer";

import TvShows from "@/utlis/Tv_shows";

import { useRecoilState, useRecoilValue } from "recoil";

function TvShow() {
  const isDrawerOpen = useRecoilValue(DrawerState);
  const trending = useRecoilValue(trendingshows);
  const [searchValues] = useRecoilState(SearchState);
  const topRatedShows = useRecoilValue(topRatedTvShows);
  const comedies = useRecoilValue(ComediestvShows);
  const romance = useRecoilValue(RomanceTvShow);
  const tvDocumentry = useRecoilValue(tvDocumentryState);
  return (
    <>
      {isDrawerOpen ? <Drawer /> : ""}

      {searchValues == "" ? (
        <div className=" grid gap-52 text-white mt-5 xl:gap-[37rem] xl:mt-10">
          <TvShows />
          <Card title="Trending Now" top={30} movieData={trending} />
          <Card title="Top Rated " top={30} movieData={topRatedShows} />
          <Card title="Comedies " top={30} movieData={comedies} />
          <Card title="Romance " top={30} movieData={romance} />
          <Card title="Documentaries " top={30} movieData={tvDocumentry} />
        </div>
      ) : (
        <SearchCard />
      )}
    </>
  );
}

export default TvShow;
