import React, { useState, useEffect } from "react";
import { getSale } from "../../utils/getSale";

import "./SaleBanner.css";

const SaleBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sales = getSale();

  const bannerTime = 7; // Time in seconds before showing the banner.

  useEffect(() => {
    // Don't show banner if no active discount phase
    if (!sales) return;

    // Check if banner has already been shown.
    const hasSeenBanner = false; // localStorage.getItem(sales.key);
    if (!hasSeenBanner) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, bannerTime * 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (!sales) return;
    setIsVisible(false);
    localStorage.setItem(sales.key, "true");
  };

  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);

  const handleClick = async (e: React.MouseEvent) => {
    // prevent overlay click from closing the banner
    e.stopPropagation();
    if (!sales || !sales.couponCode) {
      handleClose();
      return;
    }
    try {
      await navigator.clipboard.writeText(sales.couponCode);
      setCopiedMessage(`Coupon code "${sales.couponCode}" copied`);
      // hide message after 2.6s
      setTimeout(() => setCopiedMessage(null), 2600);
    } catch (err) {
      setCopiedMessage("Failed to copy coupon code");
      setTimeout(() => setCopiedMessage(null), 2600);
    }
  };

  if (!isVisible || !sales) return null;

  return (
    <div className="sale-overlay" onClick={handleClose}>
      <div className="sale-banner" onClick={(e) => e.stopPropagation()}>
        <button
          className="sale-close-btn"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
        {copiedMessage && (
          <div className="sale-tooltip" role="status">
            {copiedMessage}
          </div>
        )}
        <picture onClick={handleClick}>
          <source srcSet={sales.mobile} media="(max-width: 560px)" />
          <img
            src={sales.desktop}
            alt={sales.label}
            className="sale-image"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default SaleBanner;
