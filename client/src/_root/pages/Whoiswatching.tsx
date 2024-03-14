import userId from "@/store/atoms/userid";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

function Whoiswatching() {
  const navigate = useNavigate();
  const UserId = useRecoilState(userId);

  function handleClick() {
    navigate("/manageprofile");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4242/getallprofiles/${UserId}`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [UserId]);
  return (
    <div>
      <div className="container text-white flex min-h-screen w-full max-w-5xl flex-col items-center justify-center space-y-8 opacity-100 transform-none">
        <h1 className="text-center text-3xl font-medium sm:text-4xl">
          Who's watching?
        </h1>
        <div className="flex flex-wrap items-start justify-center gap-2 pb-8 sm:gap-4 md:gap-8">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent group h-auto flex-col space-y-2 p-0 hover:bg-transparent focus:ring-0 focus:ring-offset-0 active:scale-[0.98] dark:hover:bg-transparent"
            aria-label="Select profile"
          >
            <div className="relative aspect-square h-24 w-fit overflow-hidden rounded shadow-sm group-hover:ring-2 group-hover:ring-slate-50 sm:h-28 md:h-32">
              <img
                alt="Classic profile icon (yellow)"
                decoding="async"
                data-nimg="fill"
                className="object-cover absolute h-full w-full bg-transparent"
                src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057684/netflx-web/w3ct3bv3nch7xbcsffgi.webp"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <h2 className="text-sm text-slate-400 group-hover:text-slate-50 sm:text-base">
                Anshu Adituya
              </h2>
            </div>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent group h-auto flex-col space-y-2 p-0 hover:bg-transparent focus:ring-0 focus:ring-offset-0 active:scale-[0.98] dark:hover:bg-transparent"
            aria-label="Select profile"
          >
            <div className="relative aspect-square h-24 w-fit overflow-hidden rounded shadow-sm group-hover:ring-2 group-hover:ring-slate-50 sm:h-28 md:h-32">
              <img
                alt="Classic profile icon (blue)"
                decoding="async"
                data-nimg="fill"
                className="object-cover absolute h-full w-full bg-transparent"
                src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/jsnafhixioxnblla2b1n.webp"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <h2 className="text-sm text-slate-400 group-hover:text-slate-50 sm:text-base">
                raju{" "}
              </h2>
            </div>
          </button>
        </div>
        <button
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-none"
          aria-label="Navigate to manage profiles page"
          type="button"
          onClick={handleClick}
        >
          Manage Profiles
        </button>
      </div>
    </div>
  );
}

export default Whoiswatching;
