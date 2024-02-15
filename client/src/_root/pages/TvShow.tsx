import Card from "@/components/Card";
import trendingshows from "@/store/atoms/Tv_shows";
import ComediestvShows from "@/store/atoms/Tv_shows/Comedie_tvshow";
import RomanceTvShow from "@/store/atoms/Tv_shows/Romance_tv";
import topRatedTvShows from "@/store/atoms/Tv_shows/top_rated";
import tvDocumentryState from "@/store/atoms/Tv_shows/tv_Documentry";

import TvShows from "@/utlis/Tv_shows";

import { useRecoilValue } from "recoil";

function TvShow() {
  const trending = useRecoilValue(trendingshows);
  const topRatedShows = useRecoilValue(topRatedTvShows);
  const comedies = useRecoilValue(ComediestvShows);
  const romance = useRecoilValue(RomanceTvShow);
  const tvDocumentry = useRecoilValue(tvDocumentryState);
  return (
    <>
      <div className=" grid gap-52 text-white mt-5">
        <TvShows />
        <Card title="Trending Now" top={30} movieData={trending} />
        <Card title="Top Rated " top={30} movieData={topRatedShows} />
        <Card title="Comedies " top={30} movieData={comedies} />
        <Card title="Romance " top={30} movieData={romance} />
        <Card title="Documentaries " top={30} movieData={tvDocumentry} />
      </div>
    </>
  );
}

export default TvShow;
