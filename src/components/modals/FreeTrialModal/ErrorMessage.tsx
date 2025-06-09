import CustomButton from "../../buttons/CustomButton/CustomButton";
import freeTrialData from "./free-trial-data";
interface ErrorMessageProps {
  message: string;
  onTryAgain: () => void;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onTryAgain }) => {
  const {
    errorData: { icon, description, buttonTitle },
  } = freeTrialData;
  return (
    <div className="free-trial__error animate-dash">
      {icon}
      <h2 className="free-trial__error_message">{message}</h2>
      <p>{description}</p>
      <CustomButton
        handleClick={onTryAgain}
        className="custom-button free-trial__button_error"
      >
        {buttonTitle}
      </CustomButton>
    </div>
  );
};

export default ErrorMessage;
