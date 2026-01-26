import CommonGrid from "../common-grid/CommonGrid";

interface FeaturesProps {
  data: {
    id: string;
    title: string;
    items: any[];
  };
}

const ItemsSection: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <CommonGrid
      sectionId={data.id}
      title={data.title}
      data={data.items}
      gridClassname="grid grid__9 _features"
    />
  );
};

export default ItemsSection;
