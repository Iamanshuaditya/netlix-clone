import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { PencilIcon, PlusCircle } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const Profile: React.FC = () => {
  const [profile, Setprofile] = useState([]);
  const UserId = localStorage.getItem("UserId");
  const [toggle, setToggle] = useState(true);
  const [isLoading, setisLoading] = useState(true);

  const navigate = useNavigate();
  function handleClick() {
    navigate("add");
  }

  interface Profile {
    id: number;
    avatar: string;
    name: string;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendBaseUrl}/getallprofiles/${UserId}`
        );
        console.log(response.data);
        Setprofile(response.data);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [UserId]);

  interface Props {
    component: React.ReactNode;
  }

  const Layout: React.FC<Props> = ({ component }) => {
    return (
      <div className="text-[#f8fafc] text-4xl font-medium flex flex-col items-center gap-8 relative top-32">
        Manage Profiles:
        <div className="flex flex-wrap items-start justify-center gap-2 pb-8 sm:gap-4 md:gap-8">
          {profile.length == 4 ? (
            <></>
          ) : (
            <>
              <button
                onClick={handleClick}
                type="button"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent group h-auto flex-col space-y-2 p-0 hover:bg-transparent focus:ring-0 focus:ring-offset-0 active:scale-[0.98] dark:hover:bg-transparent"
                aria-label="Navigate to edit profile page"
              >
                <div className="relative aspect-square h-24 w-fit overflow-hidden rounded shadow-sm group-hover:ring-2 group-hover:ring-slate-500 sm:h-28 md:h-32">
                  <div className="absolute inset-0 h-full w-full bg-neutral-800/50"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <PlusCircle />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                  <h2 className="text-sm text-slate-400 group-hover:text-slate-50 sm:text-base">
                    Add Profile
                  </h2>
                </div>
              </button>
            </>
          )}
          {profile == null ? <> </> : <> {component}</>}
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 rounded-none bg-slate-50 text-slate-900 hover:bg-red-600 hover:text-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-slate-100 px-4 py-2 "
          aria-label="Navigate to home page"
          onClick={() => navigate("/whoiswatching")}
        >
          Done
        </button>
      </div>
    );
  };
  function handleUpdateCard(card: Profile) {
    console.log(card);
    setToggle(!toggle);
    const encodedString = btoa(card.id?.toString() ?? "");
    navigate(`${encodedString}`);
  }

  function SkeletonCard() {
    return (
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-[4em] w-[4em] rounded-xl bg-[#1B1B1E]" />
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
      component={profile.map((card: Profile) => {
        return (
          <>
            <button
              onClick={() => handleUpdateCard(card)}
              type="button"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent group h-auto flex-col space-y-2 p-0 hover:bg-transparent focus:ring-0 focus:ring-offset-0 active:scale-[0.98] dark:hover:bg-transparent"
              aria-label="Navigate to edit profile page"
            >
              <div className="relative aspect-square h-24 w-fit overflow-hidden rounded shadow-sm group-hover:ring-2 group-hover:ring-slate-500 sm:h-28 md:h-32">
                <img
                  alt="Classic profile icon (blue)"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover absolute h-full w-full bg-transparent inset-1"
                  src={card.avatar}
                />
                <div className="absolute inset-0 h-full w-full bg-neutral-800/50"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <PencilIcon size={34} />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="text-sm text-slate-400 group-hover:text-slate-50 sm:text-base">
                  {card.name}
                </h2>
              </div>
            </button>
          </>
        );
      })}
    />
  );
};

export default Profile;
