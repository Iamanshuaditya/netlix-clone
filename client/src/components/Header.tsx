import netflix from "../../public/images/netflix.png";
import { NavLink, useLocation } from "react-router-dom";
import { Location } from "history";
import { Menu } from "./Menu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userEmailState } from "@/store/atoms/email";
import { Bell, Search } from "lucide-react";
import { ProfileMenu } from "./ProfileMenu";
import SearchState from "@/store/atoms/Search";
import SearchResults from "../utlis/Search";

function Header() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  interface Match {
    url: string;
  }

  interface CustomNavLinkProps {
    to: string;
    activeClassName: string;
    isActive: (match: Match, location: Location) => boolean;
  }

  const isLinkActive = (match: Match, location: Location) => {
    return location.pathname === match.url;
  };

  const [storedEmail, setStoredEmail] = useState<string | null>(null);
  const [, setUserEmail] = useRecoilState(userEmailState);
  const setSearch = useSetRecoilState(SearchState);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const storedDataString: string | null = localStorage.getItem(
      "firebase:authUser:AIzaSyDgD287llU9DZavRUzQbG_cpVnSQ0v5Crk:[DEFAULT]"
    );

    const storedData = storedDataString ? JSON.parse(storedDataString) : null;

    const email = storedData?.email;
    setStoredEmail(email);
    setUserEmail(email);
  }, [setUserEmail]);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }

  function handleHome() {
    navigate("/");
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY > 1) {
          header.classList.add("active");
        } else {
          header.classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navLinkProps: CustomNavLinkProps = {
    to: "/",
    activeClassName: "text-white",
    isActive: isLinkActive,
  };

  return (
    <nav className="sticky xl:w-[400%] top-0 w-full z-[1000] bg-neutral-900 header bg-transparent pl-20 pr-4 ">
      <SearchResults />
      <div className="grid grid-cols-5 xl:grid-cols-2 justify-between items-center bg-[#171717]  h-16 mr-16   text-white w-full bg-transparent xl:h-60 xl:w-[92%] xl:mr-0   ml-0">
        <Menu />
        <div className="grid grid-cols-[1fr,1fr] justify-between w-[35rem] items-center text-[#cbd5ffe1] maxWidth:hidden">
          <img
            src={netflix}
            alt="netflex-logo"
            className="w-28 object-contain"
            onClick={handleHome}
          />
          <div>
            <ul className="grid grid-cols-[4em,4.8em,4em,7em,4em] gap-4  font-medium text-[14px] cursor-pointer  ">
              <li>
                {" "}
                <NavLink {...navLinkProps} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink {...navLinkProps} to={"/tv-shows"}>
                  Tv Shows
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/new-and-popular">New & Popular</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/my-list">My List</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`grid grid-cols-4 xl:grid-cols-[5em,3em,5em] text-white  col-start-5 items-center w-[100%]  
            isSearchOpen ? 42 : 80
          }relative`}
        >
          {!location.pathname.includes("/login") && (
            <Search
              size={20}
              className="absolute  cursor-pointer xl:w-20 xl:h-20 "
              onClick={toggleSearch}
            />
          )}

          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className={`bg-transparent p-1 pl-10 transition-all duration-300 col-start-1 col-end-3 xl:col-start-1 xl:text-5xl xl:w-20 ${
              isSearchOpen ? "w-32" : "w-0"
            }`}
            style={{ visibility: isSearchOpen ? "visible" : "hidden" }}
          ></input>
          <Bell size={20} className="xl:hidden" />
          {storedEmail == null || storedEmail === "" ? (
            <button
              className="bg-red-500 text-[14px] w-24 hover:bg-red-700 text-white font-bold py-2 xl:h-fit px-4 border border-red-700 rounded-lg"
              type="button"
              onClick={handleClick}
            >
              Sign In
            </button>
          ) : (
            <ProfileMenu />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
