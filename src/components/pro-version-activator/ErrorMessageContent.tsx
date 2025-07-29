interface ErrorMessageContentProps {
  message: string;
  onTryAgain: () => void;
}
import "./proVersion.css";
const ErrorMessageContent: React.FC<ErrorMessageContentProps> = ({}) => {
  return <div className="free-trial__error animate-dash">1</div>;
};

export default ErrorMessageContent;
