import SearchCard from "@/components/SearchCard";
import { DrawerState } from "@/store/atoms/Drawer";
import SearchState from "@/store/atoms/Search";
import { useRecoilState, useRecoilValue } from "recoil";
import Drawer from "../../components/Drawer";
import Data from "@/utlis/Movies_Data";
import { useEffect, useState } from "react";
import axios from "axios";
import ListCard from "@/components/ListCard";
import { Skeleton } from "@/components/ui/skeleton";
const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

function MyList() {
  const isDrawerOpen = useRecoilValue(DrawerState);
  const [searchValues] = useRecoilState(SearchState);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Renamed to isLoading

  const profileId = localStorage.getItem("profileId");

  useEffect(() => {
    if (profileId) {
      // Only fetch movies if profileId exists
      try {
        axios.get(`${backendBaseUrl}/getallmovies/${profileId}`).then((res) => {
          setMovies(res.data);
          setIsLoading(false); // Set isLoading to false after fetching data
        });
      } catch (error) {
        console.log("unable to get movies");
        setIsLoading(false); // Ensure isLoading is set to false in case of error
      }
    } else {
      setIsLoading(false); // Set isLoading to false if no profileId is found
    }
  }, [profileId]); // Ensure useEffect runs only when profileId changes

  // Render loading skeleton while fetching data
  if (isLoading) {
    return (
      <div className="text-white">
        <SkeletonCard />
      </div>
    );
  }

  // Render movies list if movies exist
  if (movies.length > 0) {
    return (
      <>
        <ListCard movieData={movies} top={10} title="" />
      </>
    );
  }

  // Render content based on searchValues and drawer state
  return (
    <>
      {isDrawerOpen ? <Drawer /> : ""}
      <Data />
      {searchValues === "" ? (
        <div>
          <section className="pb-16 pt-10 text-white  ">
            <div className="container flex w-full max-w-screen-2xl flex-col gap-2.5 ">
              <h1 className="text-2xl font-bold sm:text-3xl ">
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

// Extracted SkeletonCard component
function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 absolute left-20 top-28">
      <Skeleton className="h-[5em] w-[10em] rounded-xl bg-[#1B1B1E]  " />
      <div className="space-y-2 ">
        <Skeleton className="h-4 w-[250px] bg-[#1B1B1E]" />
        <Skeleton className="h-4 w-[200px] bg-[#1B1B1E]" />
      </div>
    </div>
  );
}

export default MyList;
