import React from "react";
import "./CustomButton.css";
interface CustomButtonProps {
  className: string;
  children?: React.ReactNode;
  handleClick?: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  handleClick,
}) => (
  <div onClick={handleClick} className={className}>
    {children}
  </div>
);

export default CustomButton;
