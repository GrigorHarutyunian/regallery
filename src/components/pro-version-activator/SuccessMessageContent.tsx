interface ErrorMessageContentProps {
  message: string;
  onTryAgain: () => void;
}
const SuccessMessageContent: React.FC<ErrorMessageContentProps> = ({
  onTryAgain,
}) => {
  console.log(onTryAgain);
  return <div className="free-trial__success animate-dash">1</div>;
};

export default SuccessMessageContent;
