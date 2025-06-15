import CustomButton from "../../buttons/CustomButton/CustomButton";
import freeTrialData from "./pro-version-activator-data";
interface ErrorMessageContentProps {
  message: string;
  onTryAgain: () => void;
}
const ErrorMessageContent: React.FC<ErrorMessageContentProps> = ({
  message,
  onTryAgain,
}) => {
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

export default ErrorMessageContent;
