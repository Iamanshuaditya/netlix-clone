import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer
        className="relative bottom-0 w-full text-[#a3a3a3] grid items-start gap-4 mt-[50em] top-[50em] xl:top-[120em] xl:text-3xl xl:w-[40em] xl:gap-8
      "
      >
        <div className="grid grid-cols-8 text-white items-start w-[22em] xl:w-[27em] xl:grid-cols-4  gap-6 mb-3 maxWidth:justify-normal maxWidth:ml-[10%] xl:gap-12">
          <FiFacebook
            size={26}
            className="col-start-4 xl:w-28 xl:h-28 xl:col-start-1"
          />
          <FaInstagram size={26} className=" xl:w-28 xl:h-28" />
          <CiTwitter size={26} className=" xl:w-28 xl:h-28" />
          <PiYoutubeLogoThin size={26} className=" xl:w-28 xl:h-28" />
        </div>
        <div className="text-[#a3a3a3]  grid w-[87em] justify-evenly text-sm xl:w-full">
          <ul className="grid xl:grid-cols-2 gap-3 xl:text-5xl xl:w-[120%] 2xl:grid-cols-3 grid-cols-4 xl:leading-[2.5em] 2xl:w-[87%] w-[65em] justify-end fot">
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>

            <li>
              <a href="#">Help Center</a>
            </li>

            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>

            <li>
              <a href="#">Gift Cards</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>

            <li>
              <a href="#">Media Center</a>
            </li>

            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <p className="text-sm grid justify-end w-[20em] mt-4 mb-8 maxWidth:justify-normal maxWidth:ml-[8%] xl:text-2xl">
          {" "}
          @ 2023-2024 Netflx.
        </p>
      </footer>
    </>
  );
}

export default Footer;
