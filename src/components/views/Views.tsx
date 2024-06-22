import viewsData from "./views-data.json";
import CommonGrid from "../../common-components/common-grid/CommonGrid";
const Views: React.FC = () => {
  return (
    <CommonGrid
      sectionId="views"
      title="Available Gallery views"
      data={viewsData}
      gridClassname="grid__6 grid__4"
    />
  );
};

export default Views;
