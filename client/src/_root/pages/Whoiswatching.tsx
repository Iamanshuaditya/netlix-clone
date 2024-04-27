import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

function Whoiswatching() {
  const UserId = localStorage.getItem("UserId");
  const [isLoading, setisLoading] = useState(true);
  const navigate = useNavigate();
  const [profiles, Setprofile] = useState([]);

  interface Props {
    component: React.ReactNode;
  }

  const Layout: React.FC<Props> = ({ component }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/manageprofile");
    };

    return (
      <>
        <div className="container text-white flex min-h-screen w-full max-w-5xl flex-col items-center justify-center space-y-8 opacity-100 transform-none">
          <h1 className="text-center text-3xl font-medium sm:text-4xl">
            Who's watching?
          </h1>
          <div className="flex flex-wrap items-start justify-center pb-8 sm:gap-4 md:gap-8">
            {component}
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
      </>
    );
  };
  interface Profile {
    avatar: string;
    name: string;
    id: number;
  }

  function handleSelectProfile(profile: Profile) {
    console.log(profile.id);
    localStorage.setItem("profileId", profile.id.toString());
    if (
      localStorage.getItem("profileId") !== null &&
      localStorage.getItem("profileId") !== ""
    ) {
      navigate("/");
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendBaseUrl}/getallprofiles/${UserId}`
        );

        Setprofile(response.data);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [UserId]);

  function SkeletonCard() {
    return (
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-[8.5em] w-[8.5em] rounded-xl bg-[#1B1B1E]" />
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
        <Layout
          component={
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          }
        />
      </>
    );
  }

  return (
    <Layout
      component={
        <>
          {" "}
          {profiles == null ? (
            <></>
          ) : (
            profiles.map((profile: Profile) => {
              return (
                <>
                  <button
                    onClick={() => handleSelectProfile(profile)}
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
                        src={profile.avatar}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                      <h2 className="text-sm text-slate-400 group-hover:text-slate-50 sm:text-base">
                        {profile.name}
                      </h2>
                    </div>
                  </button>
                </>
              );
            })
          )}
        </>
      }
    />
  );
}

export default Whoiswatching;
