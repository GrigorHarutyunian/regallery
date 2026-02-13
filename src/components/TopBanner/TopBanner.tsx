import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { getSale } from "../../utils/getSale";

import "./TopBanner.css";

const TopBanner: React.FC = () => {
  const sale = getSale();
  const inverse = sale?.discount !== undefined;
  const topBannerText = sale?.message ? (
    <>{sale.message}</>
  ) : (
    <>
      Unlimited access to the <b>Pre-Designed Templates</b>, <b>AI tools</b>.{" "}
      <a href="#pricing">Less than $2.5/month</a>
    </>
  );
  const [topBannerOpen, setTopBannerOpen] = useState<boolean>(
    localStorage.getItem("topBannerOpen") !== "false",
  );

  const closeTopBanner = () => {
    setTopBannerOpen(false);
    localStorage.setItem("topBannerOpen", "false");
    const main = document.querySelector("main");
    const nav = document.querySelector(".nav");
    const plansTable = document.querySelector(".plans-table");
    main?.classList.add("closed-banner");
    nav?.classList.add("closed-banner");
    plansTable?.classList.add("closed-banner");
  };
  return (
    <div
      className={clsx(
        "nav-banner",
        sale?.className,
        { closed: !topBannerOpen },
        { inverse: inverse },
      )}
    >
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
              <path d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path>
            </svg>
          </div>
          <p>{topBannerText}</p>
        </motion.div>
        <div id="banner" onClick={closeTopBanner} className="close-banner">
          ×
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
