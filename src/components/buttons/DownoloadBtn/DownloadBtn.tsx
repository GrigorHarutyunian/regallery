import "./DownloadBtn.css";
import React from "react";

interface DownloadBtnProps {
  className: string;
}
const DownloadBtn: React.FC<DownloadBtnProps> = ({ className }) => (
  <div className={className}>Get Started</div>
);

export default DownloadBtn;
