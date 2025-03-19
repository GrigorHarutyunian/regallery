import "./DownloadBtn.css";
import React from "react";

interface DownloadBtnProps {
  className: string;
  version?: string;
}
const DownloadBtn: React.FC<DownloadBtnProps> = ({ className, version }) => (
  <div className={className}>
    {version === "support" ? "SUPPORT FORUM" : "GET STARTED"}
  </div>
);

export default DownloadBtn;
