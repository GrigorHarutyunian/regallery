import React from "react";
import CustomButton from "../../buttons/CustomButton/CustomButton";
import freeTrialData from "./pro-version-activator-data";
interface SuccessMessageProps {
  onTryAgain: () => void;
}
const SuccessMessageContent: React.FC<SuccessMessageProps> = ({
  onTryAgain,
}) => {
  const {
    successData: {
      icon,
      message,
      descriptionTop,
      descriptionBottom,
      buttonTitle,
    },
  } = freeTrialData;
  return (
    <div className="free-trial__success animate-dash">
      {icon}
      <h2 className="free-trial__success_message">{message}</h2>
      <p className="free-trial__success-description_top">{descriptionTop}</p>

      <CustomButton
        handleClick={onTryAgain}
        className="custom-button free-trial__button_success"
      >
        {buttonTitle}
      </CustomButton>
      <p className="free-trial__success-description_bottom">
        {descriptionBottom}
      </p>
    </div>
  );
};

export default SuccessMessageContent;
