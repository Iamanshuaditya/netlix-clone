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
import Movies from "./components/Movies";
import NewPopular from "./_root/pages/New-Popular";
import MyList from "./_root/pages/My-List";

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
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, [auth, setUserEmail]);

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
                <Route path="/movies" element={<Movies />} />
                <Route path="/new-and-popular" element={<NewPopular />} />
                my-list
                <Route path="/my-list" element={<MyList />} />
              </Routes>
            </RootLayout>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
