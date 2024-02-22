import Movies from "@/components/Movies";
import SearchCard from "@/components/SearchCard";
import SearchState from "@/store/atoms/Search";
import { useRecoilState, useRecoilValue } from "recoil";
import Drawer from "../../components/Drawer";
import { DrawerState } from "@/store/atoms/Drawer";

function MoviesPage() {
  const [searchValues] = useRecoilState(SearchState);
  const isDrawerOpen = useRecoilValue(DrawerState);
  return (
    <>
      {isDrawerOpen ? <Drawer /> : ""}
      {searchValues == "" ? (
        <div className="relative top-[-31em] mb-[61em] xl:mb-[30em] xl:top-[-120em]">
          <Movies />
        </div>
      ) : (
        <SearchCard />
      )}
    </>
  );
}

export default MoviesPage;
