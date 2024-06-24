import viewsData from "./views-data.json";
import CommonGrid from "../../common-components/common-grid/CommonGrid";
const Views: React.FC<any> = () => {
  return (
    <CommonGrid
      sectionId="views"
      title="Gallery views"
      data={viewsData}
      gridClassname="grid__6"
    />
  );
};

export default Views;
