import Banner from "@/components/Banner";
import Drawer from "@/components/Drawer";
import Movies from "@/components/Movies";
import SearchCard from "@/components/SearchCard";
import { DrawerState } from "@/store/atoms/Drawer";
import SearchState from "@/store/atoms/Search";
import { userEmailState } from "@/store/atoms/email";
import { username } from "@/store/atoms/userName";
import userId from "@/store/atoms/userid";
import axios from "axios";

import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function Home() {
  const isDrawerOpen = useRecoilValue(DrawerState);

  const [searchValues] = useRecoilState(SearchState);
  console.log(searchValues);
  const email = useRecoilValue(userEmailState);
  const name = useRecoilValue(username);
  const [, setId] = useRecoilState(userId);
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

  useEffect(() => {
    if (email !== null && email !== undefined) {
      axios
        .post("http://localhost:4242/checkuser", { email: email })
        .then((res) => {
          console.log(res);
          if (res.data[0].email) {
            console.log("Email found:", res.data[0].email);
            console.log(res.data[0].id);
            setId(res.data[0].id);
          } else {
            axios
              .post("http://localhost:4242/createuser", {
                email: email,
                name: name,
              })
              .then((res) => {
                console.log(res);
              });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [email, name, setId]);

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
