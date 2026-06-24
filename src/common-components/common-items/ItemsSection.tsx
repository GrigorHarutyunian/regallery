import CommonGrid from "../common-grid/CommonGrid";
import type { ReactNode } from "react";

interface FeaturesProps {
  data: {
    id: string;
    title?: ReactNode;
    description?: ReactNode;
    items: any[];
    className?: string;
  };
  columns: number | 3;
}

const ItemsSection: React.FC<FeaturesProps> = ({ data, columns }) => {
  return (
    <CommonGrid
      sectionId={data.id}
      title={data.title}
      description={data.description}
      data={data.items}
      className={data.className}
      gridClassname={`grid grid__${columns}`}
    />
  );
};

export default ItemsSection;
