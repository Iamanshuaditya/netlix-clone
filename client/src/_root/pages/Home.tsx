import { useEffect, useState } from "react";
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
import { useRecoilState, useRecoilValue } from "recoil";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
  const isDrawerOpen = useRecoilValue(DrawerState);
  const [newuser, SetnewUser] = useState(false);
  const [, setUserEmail] = useRecoilState(userEmailState);
  const [, setUserName] = useRecoilState(username);
  const [searchValues] = useRecoilState(SearchState);
  console.log(searchValues);
  const email = useRecoilValue(userEmailState);
  const name = useRecoilValue(username);
  const [UserId, setUserID] = useRecoilState(userId);

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
    if (UserId !== null && UserId !== undefined) {
      localStorage.setItem("UserId", UserId.toString());
    }
  }, [UserId]);

  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);

        setUserEmail(user.email);
        setUserName(user.displayName);
      } else {
        setUserEmail(null);
        setUserName(null);
      }
    });

    return () => unsubscribe();
  }, [auth, setUserEmail, setUserName]);

  useEffect(() => {
    if (email !== null && email !== undefined) {
      const checkuser = async () => {
        await axios
          .post("http://localhost:4242/checkuser", { email: email })
          .then((res) => {
            console.log(res);
            if (res.data[0].email) {
              console.log("Email found:", res.data[0].email);
              console.log(res.data[0].id);
              setUserID(res.data[0].id);

              SetnewUser(false);
              localStorage.setItem("userID", res.data[0].id);
              localStorage.setItem("userEmail", res.data[0].email);
            } else {
              SetnewUser(true);
            }
          });
      };

      const createuser = async () => {
        const checkEmail = localStorage.getItem("userEmail");
        if (!checkEmail) {
          if (name) {
            axios
              .post("http://localhost:4242/createuser", {
                email: email,
                name: name,
              })
              .then((res) => {
                console.log(res);
              });
          }
        }
      };

      checkuser();
      createuser();
      console.log(newuser);
    }
  }, [email, name, setUserID, newuser]);

  return (
    <div className="text-white">
      {isDrawerOpen ? <Drawer /> : ""}
      {searchValues === "" ? (
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
