import { auth } from "@/firebase/FirebaseConfig";
import { HelpCircle, LogOut, Pencil, User } from "lucide-react";
import { useState } from "react";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
    location.reload();
  };

  return (
    <div>
      <button
        className="inline-flex items-center justify-center rounded-md font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent h-auto shrink-0 px-2 py-1.5 text-base hover:bg-transparent focus:ring-0 hover:dark:bg-neutral-800 [&amp;[data-state=open]>svg]:rotate-180"
        aria-label="Account menu trigger"
        type="button"
        id="radix-:r2:"
        aria-haspopup="menu"
        aria-expanded={isMenuOpen ? "true" : "false"}
        data-state={isMenuOpen ? "open" : "closed"}
        onClick={toggleMenu}
      >
        <img
          alt="Classic profile icon (red)"
          loading="lazy"
          width="28"
          height="28"
          decoding="async"
          data-nimg="1"
          className="rounded-sm object-cover transition-opacity hover:opacity-80 w-32"
          src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/gqeggax72gql50gq3ag0.webp"
          style={{ color: "transparent" }}
        ></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 hidden h-4 w-4 transition-transform duration-200 lg:inline-block"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute xl:top-[20em] right-5">
          <div
            data-side="bottom"
            data-align="end"
            role="menu"
            aria-orientation="vertical"
            data-state="open"
            data-radix-menu-content=""
            dir="ltr"
            id="radix-:r3:"
            aria-labelledby="radix-:r2:"
            className="z-50 min-w-[8rem] overflow-hidden border border-slate-100 p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 overflow-y-auto overflow-x-hidden rounded-sm bg-neutral-800/90 text-slate-200 dark:bg-neutral-800/90 dark:text-slate-200  xl:w-[45em] xl:h-[48em] border-none "
            data-orientation="vertical"
            style={{ outline: " none" }}
          >
            <a
              role="menuitem"
              className="relative flex cursor-default select-none items-center rounded-sm xl:px-12 py-1.5  xl:leading-[2] px-2  font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 xl:text-6xl"
              data-orientation="vertical"
              data-radix-collection-item=""
              href="/"
            >
              <Pencil className="text-[#94a3b8]    xl:w-[2em] xl:h-[1.5em]  xl:mr-4 w-4 h-4 xl:ml-3" />
              <span className="line-clamp-1">Manage Profiles</span>
            </a>
            <span
              role="menuitem"
              className="relative flex cursor-default select-none items-center rounded-sm xl:px-8 py-1.5  xl:leading-[2] px-2  font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 xl:text-6xl"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <LogOut className="text-[#94a3b8]  xl:w-[3em] xl:h-[1.5em] xl:mr-0 mr-2 w-4 h-4 " />
              <span className="line-clamp-1">Exit Profile</span>
            </span>
            <a
              role="menuitem"
              className="relative flex cursor-default select-none items-center rounded-sm xl:px-8 py-1.5  xl:leading-[2] px-2  font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 xl:text-6xl"
              data-orientation="vertical"
              data-radix-collection-item=""
              href="/account"
            >
              <User className="text-[#94a3b8]   xl:w-[3em] xl:h-[1.5em] xl:mr-0 mr-2 w-4 h-4" />
              <span className="line-clamp-1">Account</span>
            </a>
            <a
              role="menuitem"
              className="relative flex cursor-default select-none items-center rounded-sm xl:px-8 py-1.5  xl:leading-[2] px-2  font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 xl:text-6xl"
              data-orientation="vertical"
              data-radix-collection-item=""
              href="/help-centers"
            >
              <HelpCircle className="text-[#94a3b8]  xl:w-[3em] xl:h-[1.5em] xl:mr-0  mr-2 w-4 h-4 " />
              <span className="line-clamp-1">Help Center</span>
            </a>
            <div
              role="separator"
              aria-orientation="horizontal"
              className="-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700"
            ></div>
            <span
              className="relative flex cursor-default select-none items-center rounded-sm xl:px-8 py-1.5 xl:text-6xl font-medium  leading-[2]outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 line-clamp-1   place-items-center xl:mt-14 justify-center "
              role="menuitem"
              data-orientation="vertical"
              data-radix-collection-item=""
              onClick={handleSignOut}
            >
              Sign Out of Netflix
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
