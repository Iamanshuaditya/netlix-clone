import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./_root/pages/Home";
import Profile from "./_root/pages/Profile";
import RootLayout from "./_root/RootLayout";
import Login from "./_root/pages/Login";
import Plans from "./components/Plans";
import { userEmailState } from "./store/atoms/email";
import { useRecoilState } from "recoil";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Account from "./components/Account";
import HelpCenter from "./_root/pages/HelpCenter";
import TvShow from "./_root/pages/TvShow";
import NewPopular from "./_root/pages/New-Popular";
import MyList from "./_root/pages/My-List";
import MoviesPage from "./_root/pages/MoviesPage";
import AddProfile from "./components/AddProfile";
import { username } from "./store/atoms/userName";
import Whoiswatching from "./_root/pages/Whoiswatching";
import UpdatProfile from "./_root/pages/UpdatProfile";

function App() {
  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedDataString: string | null = localStorage.getItem(
      "firebase:authUser:AIzaSyDgD287llU9DZavRUzQbG_cpVnSQ0v5Crk:[DEFAULT]"
    );

    const storedData = storedDataString ? JSON.parse(storedDataString) : null;

    const email = storedData?.email;
    setStoredEmail(email);
  }, []);
  const [, setUserEmail] = useRecoilState(userEmailState);
  const [, setUserName] = useRecoilState(username);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <RootLayout>
              <Routes>
                <Route index element={<Home />} />
                <Route
                  path="/login"
                  element={
                    storedEmail == null || "" ? <Login /> : <Navigate to="/" />
                  }
                />
                <Route path="/login/plans" element={<Plans />} />
                <Route path="/account" element={<Account />} />
                <Route path="/help-centers" element={<HelpCenter />} />
                <Route path="/tv-shows" element={<TvShow />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/new-and-popular" element={<NewPopular />} />
                my-list
                <Route path="/my-list" element={<MyList />} />
              </Routes>
            </RootLayout>
          }
        />
        <Route path="/whoiswatching" element={<Whoiswatching />} />
        <Route
          path="/manageprofile/:encodedString"
          element={<UpdatProfile />}
        />
        <Route path="manageprofile/add" element={<AddProfile />} />
        <Route path="/manageprofile" element={<Profile />}>
          <Route path="add" element={<AddProfile />} />
          <Route path=":encodedString" element={<UpdatProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
