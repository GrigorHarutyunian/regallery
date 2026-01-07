import CommonGrid from "../../common-components/common-grid/CommonGrid";
import { featuresData } from "./features-data";

const Features: React.FC = () => {
  return (
    <CommonGrid
      sectionId="features"
      title="Features"
      data={featuresData}
      gridClassname="grid grid__9  _features"
    />
  );
};

export default Features;
