import React from "react";
import "./CustomButton.css";
interface CustomButtonProps {
  className: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  isLoading?: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  handleClick,
  isLoading = false,
}) => (
  <div
    onClick={isLoading ? undefined : handleClick}
    className={`${className} ${isLoading ? "loading" : ""}`}
    style={{
      opacity: isLoading ? 0.7 : 1,
      cursor: isLoading ? "not-allowed" : "pointer",
    }}
  >
    {isLoading ? "Loading..." : children}
  </div>
);

export default CustomButton;
