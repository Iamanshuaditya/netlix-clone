import Banner from "@/components/Banner";
import Movies from "@/components/Movies";
import SearchCard from "@/components/SearchCard";
import SearchState from "@/store/atoms/Search";
import { useRecoilState } from "recoil";

function Home() {
  const [searchValues] = useRecoilState(SearchState);
  return (
    <div className="text-white">
      {searchValues == "" ? (
        <>
          {" "}
          <Banner />
          <Movies />
        </>
      ) : (
        <SearchCard />
      )}
    </div>
  );
}

export default Home;
