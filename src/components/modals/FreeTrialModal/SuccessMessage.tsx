import React from "react";
import CustomButton from "../../buttons/CustomButton/CustomButton";
import freeTrialData from "./free-trial-data";
interface SuccessMessageProps {
  onTryAgain: () => void;
}
const SuccessMessage: React.FC<SuccessMessageProps> = ({ onTryAgain }) => {
  const {
    successData: { icon, message, description, buttonTitle },
  } = freeTrialData;
  return (
    <div className="free-trial__success animate-dash">
      {icon}
      <h2 className="free-trial__sucsses_message">{message}</h2>
      <p>{description}</p>
      <CustomButton
        handleClick={onTryAgain}
        className="custom-button free-trial__button_sucsses"
      >
        {buttonTitle}
      </CustomButton>
    </div>
  );
};

export default SuccessMessage;
