import React from "react";
import { motion } from "framer-motion";
const text =
  "Get unlimited access to the pre-built templates for less than$2/month.";
import "./Banner.css";

const Banner: React.FC = () => {
  // const [bannerOpen, setBannerOpen] = useState<boolean>(
  //   localStorage.getItem("bannerOpen") !== "false"
  // );

  // const closeBanner = () => {
  //   setBannerOpen(false);
  //   localStorage.setItem("bannerOpen", "false");
  //   const main = document.querySelector("main");
  //   main?.classList.add("closed-banner");
  // };
  return (
    <div className={`nav-banner ${true ? "" : "closed"}`}>
      <div className="nav-banner-content">
        <motion.div className="nav-banner-content-left">
          <div className="banner-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 64 64"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              className="hp fi"
            >
              <path
                fill="#a7c957"
                d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
              ></path>
            </svg>
          </div>
          <p>
            {text}

            <a href="#pricing">Become a member</a>
          </p>
        </motion.div>
        {/* <div id="banner" onClick={closeBanner} className="close-banner">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CloseIcon"
            width="18"
            height="18"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
