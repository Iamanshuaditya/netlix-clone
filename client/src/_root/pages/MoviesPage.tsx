import Movies from "@/components/Movies";
import SearchCard from "@/components/SearchCard";
import SearchState from "@/store/atoms/Search";
import { useRecoilState } from "recoil";

function MoviesPage() {
  const [searchValues] = useRecoilState(SearchState);
  return (
    <>
      {searchValues == "" ? (
        <div className="relative top-[-31em] mb-[61em]">
          <Movies />
        </div>
      ) : (
        <SearchCard />
      )}
    </>
  );
}

export default MoviesPage;
