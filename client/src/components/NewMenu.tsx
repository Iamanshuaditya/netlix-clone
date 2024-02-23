import { useState } from "react";
import logo from "../../public/images/logo.png";
import { Bell, Clapperboard, Home, List, TrendingUp } from "lucide-react";

function NewMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="  gap-6 lg:gap-10 hidden xl:flex ">
        <a className="hidden lg:block" href="/">
          <img
            alt="netflix"
            width="1024"
            height="276.74"
            decoding="async"
            data-nimg="1"
            className="h-auto w-40 object-cover transition-opacity hover:opacity-80 active:opacity-100 "
            src={logo}
            style={{ color: "transparent" }}
          />
        </a>

        <button
          className="grid grid-cols-2 items-center justify-center rounded-md font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent h-auto w-[19em] py-4 px-10 pl-[3.5em] text-base hover:bg-neutral-800 focus:ring-0 dark:hover:bg-neutral-800 lg:hidden"
          type="button"
          aria-haspopup="menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <img
            alt="netflix"
            width="1024"
            height="276.74"
            decoding="async"
            data-nimg="1"
            className="h-auto w-8 object-cover transition-opacity hover:opacity-80 active:opacity-100 mt-4 "
            src={logo}
            style={{ color: "transparent" }}
          />
          <span className="font-bold text-7xl">Menu</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed left-0   transform translate-x-16 translate-y-70 min-w-max z-50 top-64 border-none">
          <div
            role="menu"
            aria-orientation="vertical"
            className="z-50 min-w-[8rem] overflow-hidden border border-slate-100 p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 overflow-y-auto overflow-x-hidden rounded-sm bg-neutral-800 text-slate-200 dark:bg-neutral-800 dark:text-slate-200 top-52 border-none w-[54em] h-[64em]"
          >
            <div>
              <div className="px-10  text-sm font-semibold text-slate-900 dark:text-slate-300 py-12  w-[40em] ">
                <a className="flex items-center" href="/">
                  <img
                    alt="netflix"
                    width="1024"
                    height="276.74"
                    decoding="async"
                    data-nimg="1"
                    className="h-auto w-8 object-cover transition-opacity hover:opacity-80 active:opacity-100 mr-8 mt-2"
                    src={logo}
                    style={{ color: "transparent" }}
                  />
                  <span className="text-white text-6xl">Netflix Web</span>
                </a>
              </div>
              <div
                role="separator"
                aria-orientation="horizontal"
                className="-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700   "
              ></div>
              <a
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-12 py-10  font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-5xl "
                data-orientation="vertical"
                data-radix-collection-item=""
                href="/"
              >
                <Home size={57} className="mr-7" />
                <span className="line-clamp-1">Home</span>
              </a>
              <a
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-12 py-10  font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-5xl"
                data-orientation="vertical"
                data-radix-collection-item=""
                href="/tv-shows"
              >
                <Clapperboard size={57} className="mr-7" />
                <span className="line-clamp-1">TV Shows</span>
              </a>
              <a
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-12 py-10 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-5xl"
                data-orientation="vertical"
                data-radix-collection-item=""
                href="/tv-shows"
              >
                <Clapperboard size={57} className="mr-7" />
                <span className="line-clamp-1">TV Shows</span>
              </a>

              <a
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-12 py-10   font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-5xl"
                data-orientation="vertical"
                data-radix-collection-item=""
                href="/new-and-popular"
              >
                {" "}
                <TrendingUp size={57} className="mr-7" />
                <span className="line-clamp-1">New &amp; Popular</span>
              </a>
              <a
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-12 py-10   font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-5xl"
                data-orientation="vertical"
                data-radix-collection-item=""
                href="/my-list"
              >
                <List size={57} className="mr-7" />
                <span className="line-clamp-1">My List</span>
              </a>
              <div
                role="menuitem"
                className="relative flex cursor-default select-none items-center rounded-sm px-12 py-10 text-5xl font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-orientation="vertical"
                data-radix-collection-item=""
              >
                <Bell size={57} className="mr-7" />

                <span className="line-clamp-1">Notifications</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewMenu;
