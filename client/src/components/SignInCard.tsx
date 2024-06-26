import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRecoilState } from "recoil";
import { auth } from "../firebase/FirebaseConfig";
import { userEmailState } from "@/store/atoms/email";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignInCard() {
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);
  const navigate = useNavigate();
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      console.log("Google Sign-In Successful", email);
      setUserEmail(email);
      console.log(userEmail);

      navigate("/login/plans");
      location.reload();
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };
  return (
    <div>
      <div className="w-[28em] xl:w-[18em] rounded-md bg-zinc-800/25 p-14 backdrop-blur-lg m-2   xl:grid   justify-center">
        <h1 className="mb-4 text-center text-3xl font-bold text-[#f8fafc]   ">
          Sign in
        </h1>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-700 h-10 px-4 py-2 xl:w-[10em] w-full  "
          aria-label="Login with Google "
          onClick={handleGoogle}
        >
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
}

export default SignInCard;
