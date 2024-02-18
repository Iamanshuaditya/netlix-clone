import SearchCard from "@/components/SearchCard";
import SearchState from "@/store/atoms/Search";
import { useRecoilState } from "recoil";

function MyList() {
  const [searchValues] = useRecoilState(SearchState);

  return (
    <>
      {searchValues == "" ? (
        <div>
          <section className="pb-16 pt-10 text-white">
            <div className="container flex w-full max-w-screen-2xl flex-col gap-2.5">
              <h1 className="text-2xl font-bold sm:text-3xl">
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
