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
  color?: "light" | "dark" | "colorful" | "light-colorful";
}

const ItemsSection: React.FC<FeaturesProps> = ({
  data,
  columns,
  color = "light",
}) => {
  return (
    <CommonGrid
      sectionId={data.id}
      title={data.title}
      description={data.description}
      data={data.items}
      color={color}
      className={data.className}
      gridClassname={`grid grid__${columns}`}
    />
  );
};

export default ItemsSection;
