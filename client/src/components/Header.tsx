import netflix from "../images/netflix.png";
import { NavLink, useLocation } from "react-router-dom";

// import { Menu } from "./Menu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userEmailState } from "@/store/atoms/email";
import { Bell, Search } from "lucide-react";
import ProfileMenu from "./ProfileMenu";
import SearchState from "@/store/atoms/Search";
import SearchResults from "../utlis/Search";
import toast from "react-hot-toast";
import NewMenu from "./NewMenu";

function Header() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

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

  function handleBellClick() {
    return toast.success("Do a star on Github", {
      position: "bottom-center",
    });
  }

  return (
    <nav className="sticky top-0  z-[1000] bg-neutral-900 header bg-transparent pl-20 pr-4  xl:p-0  tab:w-[48em] w-[84em]  xl:w-[20em]">
      <SearchResults />
      <div className="grid grid-cols-5   justify-between items-center bg-[#171717]   h-16 mr-16   text-white w-full bg-transparent ml-0">
        <NewMenu />
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
                <NavLink
                  to={"/"}
                  className={(navData) =>
                    navData.isActive ? "text-white" : "text-[#cbd5ffe1]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="tv-shows">
                  <NavLink
                    to={"/tv-shows"}
                    className={(navData) =>
                      navData.isActive ? "text-white" : "text-[#cbd5ffe1]"
                    }
                  >
                    Tv Shows
                  </NavLink>
                </a>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/movies"
                  className={(navData) =>
                    navData.isActive ? "text-white" : "text-[#cbd5ffe1]"
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/new-and-popular"
                  className={(navData) =>
                    navData.isActive ? "text-white" : "text-[#cbd5ffe1]"
                  }
                >
                  New & Popular
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/my-list"
                  className={(navData) =>
                    navData.isActive ? "text-white" : "text-[#cbd5ffe1]"
                  }
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`grid grid-cols-4  text-white  col-start-5 items-center w-[81%]  xl:col-start-4 xl:w-[200%]
            isSearchOpen ? 42 : 80
          }relative`}
        >
          {!location.pathname.includes("/login") && (
            <Search
              size={20}
              className="absolute  cursor-pointer tab:justify-end tab:col-start-2 "
              onClick={toggleSearch}
            />
          )}

          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className={`bg-transparent p-1 pl-10 transition-all duration-300 col-start-1  tab:w-28 col-end-3 xl:w-16 xl:pl-10 xl:col-start-1 xl:text-base tab:col-start-2  ${
              isSearchOpen ? "w-32" : "w-0"
            }`}
            style={{ visibility: isSearchOpen ? "visible" : "hidden" }}
          ></input>
          <Bell size={20} className="xl:hidden" onClick={handleBellClick} />
          {storedEmail == null || storedEmail === "" ? (
            <button
              className="bg-red-500 text-[14px] w-24 p-2 hover:bg-red-700 text-white font-bold  xl:h-fit px-4 border border-red-700 rounded-lg xl:text-base xl:w-[5em] xl:p-1"
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
