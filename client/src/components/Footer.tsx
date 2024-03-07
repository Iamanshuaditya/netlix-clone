import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer
        className="relative bottom-0 w-full text-[#a3a3a3] grid   gap-4  justify-center xl:mt- top-[50em] xl:top-[50em]   xl:gap-8 items-center
      "
      >
        <div className="grid grid-cols-8 text-white items-start w-[14em]     xl:gap-0 gap-6 mb-3 maxWidth:justify-normal  ">
          <FiFacebook size={26} className="col-start-1 xl:col-start-1" />
          <FaInstagram size={26} className="" />
          <CiTwitter size={26} className="" />
          <PiYoutubeLogoThin size={26} className="" />
        </div>
        <div className="text-[#a3a3a3]  grid w-[87em] justify-evenly text-sm   bigScreen:w-[18em] xl:w-[70em]">
          <ul className="grid xl:grid-cols-2 gap-3  xl:w-[100%] 2xl:grid-cols-3 grid-cols-4 xl:leading-[2.5em] 2xl:w-[87%] w-[65em]  fot">
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
        <p className="text-sm grid justify-end w-[16em] mt-4 mb-8 maxWidth:justify-center   xl:text-sm">
          {" "}
          @ 2023-2024 Netflx.
        </p>

        <p className="flex items-center justify-center xl:text-base">
          Developed by <br />
          <a href="#" className="hover:text-white ml-2 font-semibold">
            Anshu Aditya
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
