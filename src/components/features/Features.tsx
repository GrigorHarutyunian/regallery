import CommonGrid from "../../common-components/common-grid/CommonGrid";
import featuresData from "./features-data.json";

const Features: React.FC = () => {
  return (
    <CommonGrid
      sectionId="features"
      title="Features"
      data={featuresData}
      gridClassname="grid__6"
    />
  );
};

export default Features;
