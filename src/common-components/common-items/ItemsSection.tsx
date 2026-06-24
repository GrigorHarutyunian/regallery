import CommonGrid from "../common-grid/CommonGrid";
import type { ReactNode } from "react";

interface FeaturesProps {
  data: {
    id: string;
    title: ReactNode;
    description?: ReactNode;
    items: any[];
  };
}

const ItemsSection: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <CommonGrid
      sectionId={data.id}
      title={data.title}
      description={data.description}
      data={data.items}
      gridClassname="grid grid__9 _features"
    />
  );
};

export default ItemsSection;
