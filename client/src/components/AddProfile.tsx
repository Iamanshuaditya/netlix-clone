import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProfile() {
  const [profilePage, setProfilePage] = useState(true);
  const [name, setName] = useState("");

  const [selectedImage, setSelectedImage] = useState(
    "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/jsnafhixioxnblla2b1n.webp"
  );
  function ToggleProfile() {
    setProfilePage((prevProfilePage) => !prevProfilePage);
  }

  function handleBack() {
    setProfilePage(true);
  }
  const navigate = useNavigate();
  function handleCancel() {
    navigate("/manageprofile");
  }

  const userId = localStorage.getItem("userID");

  async function handleContinue() {
    try {
      const res = await axios.post("http://localhost:4242/addprofile", {
        avatar: selectedImage,
        userId: userId ? parseInt(userId) : null,
        name: name,
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      {profilePage ? (
        <div className="container flex min-h-screen w-full max-w-2xl flex-col justify-center gap-3 opacity-100 transform-none">
          <div className="space-y-3">
            <h1 className="text-3xl font-medium sm:text-5xl text-[#f8fafc]">
              Add Profile
            </h1>
            <p className="text-sm text-neutral-500 sm:text-base">
              Add a profile for another person watching Netflix.
            </p>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 h-[1px] w-full bg-neutral-700"
          ></div>
          <form className="mt-2 grid w-full gap-5">
            <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-24 w-fit overflow-hidden rounded p-0 hover:opacity-80 active:scale-90 sm:h-28 md:h-32"
                aria-label="Show profile picker"
                type="button"
                onClick={ToggleProfile}
              >
                <img
                  alt="Classic profile icon (blue)"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover absolute h-full w-full inset-0 bg-transparent"
                  src={selectedImage}
                />
              </button>
              <fieldset className="grid w-full flex-1 items-start gap-2">
                <label className="sr-only">Name</label>
                <input
                  className="flex h-10 w-full border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 rounded-none text-white"
                  id="name"
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </fieldset>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full my-1 bg-neutral-700"
            ></div>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleContinue}
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 rounded-none bg-slate-50 text-slate-900 hover:bg-red-600 hover:text-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-slate-100 px-4 py-2"
                aria-label="Add profile"
              >
                Continue
              </button>
              <button
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 h-10 px-4 py-2 rounded-none"
                aria-label="Cancel"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex w-full flex-col gap-6 opacity-100 transform-none text-white">
            <div className="sticky top-0 z-40 w-full pb-5 pt-20 bg-transparent">
              <div className="container flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent text-slate-100 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent h-auto rounded p-0 hover:bg-transparent dark:hover:bg-transparent"
                    aria-label="Go back"
                  >
                    <ArrowLeft size={40} onClick={handleBack} />
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
                <div className="flex flex-col-reverse items-center gap-1 xs:flex-row xs:gap-4"></div>
              </div>
            </div>
            <div className="container flex w-full maxName-w-screen-2xl flex-col gap-2.5">
              <div className="text-xl font-medium sm:text-2xl">
                The Classics
              </div>
              <div className="flex items-center gap-2.5 overflow-x-auto py-1.5 sm:gap-5">
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-auto w-32 min-w-[80px] overflow-hidden rounded p-0 hover:opacity-80 active:scale-90"
                  aria-label="Choose profile icon"
                  onClick={ToggleProfile}
                >
                  <img
                    alt="Classic profile icon (blue)"
                    onClick={() =>
                      setSelectedImage(
                        "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/jsnafhixioxnblla2b1n.webp"
                      )
                    }
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover absolute h-full w-full bg-transparent"
                    src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/jsnafhixioxnblla2b1n.webp"
                  />
                </button>
                <button
                  onClick={ToggleProfile}
                  type="button"
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-auto w-32 min-w-[80px] overflow-hidden rounded p-0 hover:opacity-80 active:scale-90"
                  aria-label="Choose profile icon"
                >
                  <img
                    alt="Classic profile icon (violet)"
                    onClick={() =>
                      setSelectedImage(
                        "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/rurejglihshkvaqphnyj.webp"
                      )
                    }
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover absolute h-full w-full bg-transparent"
                    src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/rurejglihshkvaqphnyj.webp"
                  />
                </button>
                <button
                  onClick={ToggleProfile}
                  type="button"
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-auto w-32 min-w-[80px] overflow-hidden rounded p-0 hover:opacity-80 active:scale-90"
                  aria-label="Choose profile icon"
                >
                  <img
                    alt="Classic profile icon (red)"
                    onClick={() =>
                      setSelectedImage(
                        "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/gqeggax72gql50gq3ag0.webp"
                      )
                    }
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover absolute h-full w-full bg-transparent"
                    src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/gqeggax72gql50gq3ag0.webp"
                  />
                </button>
                <button
                  onClick={ToggleProfile}
                  type="button"
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900 relative aspect-square h-auto w-32 min-w-[80px] overflow-hidden rounded p-0 hover:opacity-80 active:scale-90"
                  aria-label="Choose profile icon"
                >
                  <img
                    alt="Classic profile icon (green)"
                    onClick={() =>
                      setSelectedImage(
                        "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/r92ukp8w9fgpmbmol2me.webp"
                      )
                    }
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover absolute h-full w-full bg-transparent"
                    src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/r92ukp8w9fgpmbmol2me.webp"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProfile;
