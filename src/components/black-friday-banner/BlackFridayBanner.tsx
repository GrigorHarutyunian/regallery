import React, { useState, useEffect } from "react";
import { getDiscountLabel } from "../../utils/getSale";
import blackFridayEarlyAccessDesktop from "../../assets/Black Friday Early Access.webp";
import blackFridayEarlyAccessMobile from "../../assets/Black Friday Early Access Portrait.webp";
import blackFridayDesktop from "../../assets/Black Friday.webp";
import blackFridayMobile from "../../assets/Black Friday Portrait.webp";
import cyberMondayDesktop from "../../assets/Cyber Monday.webp";
import cyberMondayMobile from "../../assets/Cyber Monday Portrait.webp";
import "./BlackFridayBanner.css";

const BlackFridayBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const discountLabel = getDiscountLabel();

  const getImages = () => {
    switch (discountLabel) {
      case "Black Friday Early Access":
        return {
          desktop: blackFridayEarlyAccessDesktop,
          mobile: blackFridayEarlyAccessMobile,
          key: "blackFridayEarlyAccessBannerSeen",
        };
      case "Black Friday":
        return {
          desktop: blackFridayDesktop,
          mobile: blackFridayMobile,
          key: "blackFridayBannerSeen",
        };
      case "Cyber Monday":
        return {
          desktop: cyberMondayDesktop,
          mobile: cyberMondayMobile,
          key: "cyberMondayBannerSeen",
        };
      default:
        return null;
    }
  };

  const images = getImages();
  const bannerTime = 7; // Time in seconds before showing the banner.

  useEffect(() => {
    // Don't show banner if no active discount phase
    if (!images) return;

    // Check if banner has already been shown.
    const hasSeenBanner = false; // localStorage.getItem(images.key);
    if (!hasSeenBanner) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, bannerTime * 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (!images) return;
    setIsVisible(false);
    localStorage.setItem(images.key, "true");
  };

  if (!isVisible || !images) return null;
  // Choose the appropriate image set. (Currently Early Access; keep other phases commented for easy switch.)
  const desktopImg = images.desktop;
  const mobileImg = images.mobile;

  return (
    <div className="black-friday-overlay" onClick={handleClose}>
      <div className="black-friday-banner">
        <button
          className="black-friday-close-btn"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
        <picture>
          <source srcSet={mobileImg} media="(max-width: 560px)" />
          <img
            src={desktopImg}
            alt={discountLabel}
            className="black-friday-image"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
