import(
  "https://cdn-uicons.flaticon.com/2.4.2/uicons-regular-rounded/css/uicons-regular-rounded.css"
);

interface FeaturesBoxProps {
  title: string;
  description: string;
  className: string;
}

const CommonBoxForGrid: React.FC<FeaturesBoxProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className="feature-box col-50">
      <i className={className} style={{ color: "#FCB51B", fontSize: "41px" }} />

      <div className="section-text__title-small">{title}</div>
      <div className="section-text__desc">{description}</div>
    </div>
  );
};

export default CommonBoxForGrid;
