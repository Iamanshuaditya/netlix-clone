import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("add");
  }
  return (
    <div className="text-[#f8fafc] text-4xl font-medium flex flex-col items-center gap-8 relative top-32">
      Manage Profiles:
      <div className="flex ">
        <div onClick={handleClick} className="a hover:opacity-100">
          <div className="h-32 w-32 hover:border-[1px] flex justify-center items-center bg-[#262626] rounded hover:border-[#64748B] ">
            <PlusCircle strokeWidth={0.8} size={50} />
          </div>
          <p className="text-base font-medium flex mt-2 opacity-50 justify-center mb-16">
            Add Profile
          </p>
        </div>
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

export default Profile;
