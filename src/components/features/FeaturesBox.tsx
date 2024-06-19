import(
  "https://cdn-uicons.flaticon.com/2.4.2/uicons-bold-rounded/css/uicons-bold-rounded.css"
);
import PermMediaIcon from "@mui/icons-material/PermMedia";
interface FeaturesBoxProps {
  title: string;
  description: string;
}

const FeaturesBox: React.FC<FeaturesBoxProps> = ({ title, description }) => {
  return (
    <div className="feature-box col-50">
      <PermMediaIcon style={{ color: "#0e4a70" }} fontSize="large" />

      <div className="section-text__title-small">{title}</div>
      <div className="section-text__desc">{description}</div>
    </div>
  );
};

export default FeaturesBox;
