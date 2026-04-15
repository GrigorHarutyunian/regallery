import React from "react";
import "./CustomButton.css";
interface CustomButtonProps {
  className: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  handleClick,
  isLoading = false,
  disabled = false,
}) => (
  <div
    onClick={isLoading || disabled ? undefined : handleClick}
    className={`${className} ${isLoading ? "loading" : ""} ${
      disabled ? "is-disabled" : ""
    }`}
    style={{
      opacity: isLoading || disabled ? 0.7 : 1,
      cursor: isLoading || disabled ? "not-allowed" : "pointer",
    }}
  >
    {isLoading ? "Loading..." : children}
  </div>
);

export default CustomButton;
