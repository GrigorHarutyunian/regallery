import React from "react";

interface DownloadBtnProps {
  className: string;
  version?: string;
  location?: string;
}

const DownloadBtn: React.FC<DownloadBtnProps> = ({
  className,
  version,
  location = "unknown",
}) => {
  const handleClick = () => {
    if (typeof window === "undefined") return;

    const variant = window.localStorage.getItem("abTest_v1");
    const trackingWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event: "cta_click",
      experiment: "button_color_test",
      variant,
      location,
    });
  };

  return (
    <div className={className} onClick={handleClick}>
      {version === "support" ? "Support forum" : "Get started"}
    </div>
  );
};

export default DownloadBtn;
