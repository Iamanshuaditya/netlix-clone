import Banner from "@/components/Banner";
import Drawer from "@/components/Drawer";
import Movies from "@/components/Movies";
import SearchCard from "@/components/SearchCard";
import { DrawerState } from "@/store/atoms/Drawer";
import SearchState from "@/store/atoms/Search";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function Home() {
  const isDrawerOpen = useRecoilValue(DrawerState);
  const [searchValues] = useRecoilState(SearchState);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  return (
    <div className="text-white">
      {isDrawerOpen ? <Drawer /> : ""}
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
