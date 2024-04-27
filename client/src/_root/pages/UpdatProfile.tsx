import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { z, ZodError } from "zod";

const profileSchema = z.object({
  name: z.string().max(20).min(2),
});

function UpdatProfile() {
  const { encodedString } = useParams();
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [gameHandler, setgameHandler] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingDelete, setisLoadingDelete] = useState(false);
  const [selectedImg, SetselectedImg] = useState(
    "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/jsnafhixioxnblla2b1n.webp"
  );

  const decodedNumber = encodedString ? atob(encodedString) : null;
  if (decodedNumber) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const object = JSON.parse(decodedNumber);
    console.log(object);
  }

  const Loading = () => {
    return (
      <>
        <div className="loading relative left-1">
          <div className="spinner">
            <div className="mask">
              <div className="maskedCircle"></div>
            </div>
          </div>
        </div>
      </>
    );
  };

  interface Profile {
    id: number;
    name: string;
    avatar: string;
  }
  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(
          `http://localhost:4242/getprofile/${decodedNumber}`
        );
        const data: Profile = response.data;
        setName(data.name);
        SetselectedImg(data.avatar);
      } catch (error) {
        console.log("unable to fetch profile", error);
      }
    }

    getProfile();
  }, [decodedNumber]);
  async function updateProfile() {
    const notify = () => toast("Profile Updated sucessfully ✅");
    const validatedData = profileSchema.parse({ name });
    setisLoading(true);
    try {
      const requestBody = {
        name: validatedData.name,
        avatar: selectedImg,
      };
      const response = await axios.post(
        `http://localhost:4242/updateprofile/${decodedNumber}`,
        requestBody
      );
      console.log(response.data);

      if (response.status >= 200 && response.status < 300) {
        notify();
        window.location.href = "/manageprofile";
        setisLoading(false);
      } else {
        console.error("Update profile failed.");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map((err) => err.message).join("\n");
        alert(errorMessage);
      } else {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
    } finally {
      setisLoading(false);
    }
  }

  async function deleteProfile() {
    const notify = () => toast("Profile deleted sucessfully ✅");
    setisLoadingDelete(true);
    try {
      const response = await axios.delete(
        `http://localhost:4242/deleteProfile/${decodedNumber}`
      );
      console.log(response.data);

      if (response.status >= 200 && response.status < 300) {
        notify();
        window.location.href = "/manageprofile";
        setisLoading(false);
      } else {
        console.error("Update profile failed.");
      }
    } catch (error) {
      console.log("error deleting profile", error);
    }
  }

  function handleCancel() {
    window.location.href = "/manageprofile";
  }

  return (
    <>
      {toggle ? (
        <div className="flex w-full flex-col gap-6 opacity-100 transform-none text-white">
          <div className="sticky top-0 z-40 w-full pb-5 pt-20 bg-transparent">
            <div className="container flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent h-auto rounded p-0 hover:bg-transparent dark:hover:bg-transparent"
                  aria-label="Go back"
                >
                  <ArrowLeft size={40} onClick={() => setToggle(!toggle)} />
                </button>
                <div>
                  <h1 className="text-2xl font-medium sm:text-3xl">
                    Edit Profile
                  </h1>
                  <h2 className="text-xl font-medium sm:text-2xl">
                    Choose a profile icon.
                  </h2>
                </div>
              </div>
              <div className="flex flex-col-reverse items-center gap-1 xs:flex-row xs:gap-4">
                <div className="text-xl font-medium sm:text-2xl">
                  Anshu Aditya
                </div>
                <div className="relative aspect-square h-16 w-fit overflow-hidden rounded shadow-sm group-hover:ring-4 sm:h-20">
                  <img
                    alt="Classic profile icon (violet)"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover absolute h-full w-full inset-0 bg-transparent"
                    src={selectedImg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container flex w-full max-w-screen-2xl flex-col gap-2.5">
            <div className="text-xl font-medium sm:text-2xl">The Classics</div>
            <div className="flex items-center gap-2.5 overflow-x-auto py-1.5 sm:gap-5">
              <button
                type="button"
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-auto w-32 min-w-[80px] overflow-hidden rounded p-0 hover:opacity-80 active:scale-90"
                aria-label="Choose profile icon"
              >
                <img
                  onClick={() =>
                    SetselectedImg(
                      "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/gqeggax72gql50gq3ag0.webp"
                    )
                  }
                  alt="Classic profile icon (red)"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover absolute h-full w-full inset-0 bg-transparent"
                  src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/gqeggax72gql50gq3ag0.webp"
                />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-auto w-32 min-w-[80px] overflow-hidden rounded p-0 hover:opacity-80 active:scale-90"
                aria-label="Choose profile icon"
              >
                <img
                  alt="Classic profile icon (green)"
                  onClick={() =>
                    SetselectedImg(
                      "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/r92ukp8w9fgpmbmol2me.webp"
                    )
                  }
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="  object-cover absolute h-full w-full inset-0 bg-transparent"
                  src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/r92ukp8w9fgpmbmol2me.webp"
                />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-auto w-32 min-w-[80px] overflow-hidden rounded p-0 hover:opacity-80 active:scale-90"
                aria-label="Choose profile icon"
              >
                <img
                  onClick={() =>
                    SetselectedImg(
                      "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057684/netflx-web/w3ct3bv3nch7xbcsffgi.webp"
                    )
                  }
                  alt="Classic profile icon (yellow)"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className=" object-cover absolute h-full w-full inset-0 bg-transparent "
                  src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057684/netflx-web/w3ct3bv3nch7xbcsffgi.webp"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container flex w-full max-w-3xl flex-col justify-center gap-5 pb-5 pt-16 opacity-100 text-white transform-none">
          <h1 className="text-3xl font-medium sm:text-5xl">Edit Profile</h1>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 h-[1px] w-full bg-neutral-700"
          ></div>
          <form className="mt-2 grid w-full gap-5">
            <div className="flex w-full flex-col gap-6 sm:flex-row">
              <button
                onClick={() => setToggle(!toggle)}
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-24 w-fit overflow-hidden rounded p-0 hover:opacity-80 active:scale-90 sm:h-28 md:h-32"
                aria-label="Show profile picker"
                type="button"
              >
                <img
                  alt="Classic profile icon (violet)"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover absolute h-full w-full inset-0 bg-transparent"
                  src={selectedImg}
                />
              </button>
              <div className="w-full flex-1 space-y-5">
                <fieldset className="grid w-full items-start gap-2">
                  <label className="sr-only">Name</label>
                  <input
                    className="flex h-10 w-full border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 rounded-none"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                    disabled={isLoading}
                    name="name"
                  />
                </fieldset>
                <fieldset className="grid w-full items-start gap-2">
                  <label className="text-base text-neutral-400 sm:text-lg">
                    Language:
                  </label>

                  <select
                    className="border border-slate-300  px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 rounded-none text-white bg-[#171717]"
                    aria-hidden="true"
                  >
                    <option value="ENGLISH">English</option>
                    <option value="BAHASA_INDONESIA">Bahasa Indonesia</option>
                    <option value="BAHASA_MELAYU">Bahasa Melayu</option>
                    <option value="DANSK">Dansk</option>
                    <option value="DEUTSCH">Deutsch</option>

                    <option value="ESPANOL">Espanol</option>
                    <option value="FILIPINO">Filipino</option>
                    <option value="FRANCAIS">Francais</option>
                    <option value="HRVATSKI">Hrvatski</option>
                    <option value="ITALIANO">Italiano</option>
                    <option value="HINDI">Hindi</option>
                    <option value="BANGLA">Bangla</option>
                    <option value="MAGYAR">Magyar</option>
                    <option value="NEDERLANDS">Nederlands</option>
                    <option value="NORSK_BOKMAL">Norsk Bokmal</option>
                    <option value="POLSKI">Polski</option>
                    <option value="PORTUGUES">Portugues</option>
                    <option value="ROMANA">Romana</option>
                    <option value="SUOMI">Suomi</option>
                    <option value="SVENSKA">Svenska</option>
                    <option value="TIENG_VIET">Tieng Viet</option>
                    <option value="TURKCE">Turkce</option>
                    <option value="CESTINA">Cestina</option>
                  </select>
                </fieldset>
                <fieldset className="grid w-full items-start gap-3.5">
                  <label className="flex flex-col gap-2">
                    <span className="text-base text-neutral-400 sm:text-lg">
                      Game Handle:
                    </span>
                    <span>
                      Your handle is a unique name that'll be used for playing
                      with other Netflix members across all Netflix Games. Learn
                      more
                    </span>
                  </label>
                  <input
                    className="flex h-10 w-full border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 rounded-none"
                    id="gameHandle"
                    placeholder="Create Game Handle"
                    type="text"
                    onChange={(e) => setgameHandler(e.target.value)}
                    value={gameHandler}
                    name="gameHandle"
                    disabled={isLoading}
                  />
                </fieldset>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full my-2 bg-neutral-700"
            ></div>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              {isLoading ? (
                <>
                  <button
                    type="button"
                    onClick={updateProfile}
                    className="inline-flex items-center  cursor-not-allowed justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 rounded-none bg-red-600  opacity-50  hover:bg-red-600 text-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-slate-100 px-4 py-2"
                    aria-label="Save profile"
                  >
                    Save <Loading />
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={updateProfile}
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 rounded-none bg-slate-50 text-slate-900 hover:bg-red-600 hover:text-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-slate-100 px-4 py-2"
                    aria-label="Save profile"
                  >
                    Save{" "}
                  </button>
                </>
              )}
              <button
                onClick={handleCancel}
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 h-10 px-4 py-2 rounded-none"
                aria-label="Cancel"
                type="button"
              >
                Cancel
              </button>

              {isLoadingDelete ? (
                <>
                  <button
                    onClick={deleteProfile}
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 border opacity-50 cursor-not-allowed border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 h-10 px-4 py-2 rounded-none"
                    aria-label="Delete profile"
                    type="button"
                  >
                    Delete Profile <Loading />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={deleteProfile}
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 h-10 px-4 py-2 rounded-none"
                    aria-label="Delete profile"
                    type="button"
                  >
                    Delete Profile
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default UpdatProfile;
