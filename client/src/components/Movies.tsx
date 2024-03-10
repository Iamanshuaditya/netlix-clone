import { useRecoilValue } from "recoil";
import Card from "./Card";
import Trending from "@/store/atoms/movies/Trending";
import Data from "@/utlis/Movies_Data";
import topRatedState from "@/store/atoms/movies/top_rated";
import ActionState from "@/store/atoms/movies/action";
import ComediesState from "@/store/atoms/movies/comedies";
import horrorState from "@/store/atoms/movies/horror";
import RomanceState from "@/store/atoms/movies/romance";
import DocumentaryState from "@/store/atoms/movies/Documentaries";

function Movies() {
  const trending = useRecoilValue(Trending);
  const topRated = useRecoilValue(topRatedState);
  const action = useRecoilValue(ActionState);
  const Comedies = useRecoilValue(ComediesState);
  const Horror = useRecoilValue(horrorState);
  const romance = useRecoilValue(RomanceState);
  const Documentaries = useRecoilValue(DocumentaryState);
  return (
    <div className="">
      <Data />
      <div className=" text-white grid  gap-48 absolute top-[34em]   xl:top-[36em] xl:gap-72  tab:top-[50em]">
        <Card title="Trending Now" top={30} movieData={trending} />
        <Card title="Top Rated" top={44} movieData={topRated} />
        <Card title="Action Thrillers" top={58} movieData={action} />
        <Card title="Comedies" top={70} movieData={Comedies} />
        <Card title="Scary Movies" top={83} movieData={Horror} />
        <Card title="Romance Movies" top={92} movieData={romance} />
        <Card title="Documentaries" top={112} movieData={Documentaries} />
      </div>
    </div>
  );
}

export default Movies;
