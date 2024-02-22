import SearchCard from "@/components/SearchCard";
import { DrawerState } from "@/store/atoms/Drawer";
import SearchState from "@/store/atoms/Search";
import { useRecoilState, useRecoilValue } from "recoil";
import Drawer from "../../components/Drawer";
import Data from "@/utlis/Movies_Data";

function MyList() {
  const isDrawerOpen = useRecoilValue(DrawerState);
  const [searchValues] = useRecoilState(SearchState);

  return (
    <>
      {isDrawerOpen ? <Drawer /> : ""}
      <Data />
      {searchValues == "" ? (
        <div>
          <section className="pb-16 pt-10 text-white xl:w-[400%] ">
            <div className="container flex w-full max-w-screen-2xl flex-col gap-2.5 xl:text-4xl xl:leading-[7.5rem]">
              <h1 className="text-2xl font-bold sm:text-3xl xl:text-6xl">
                Your list is empty
              </h1>
              <p className="text-slate-400 dark:text-slate-400">
                Add shows and movies to your list to watch them later
              </p>
            </div>
          </section>
        </div>
      ) : (
        <SearchCard />
      )}
    </>
  );
}

export default MyList;
