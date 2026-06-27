import ItemsSection from "../common-components/common-items/ItemsSection";
import Section from "../common-components/common-section/Section";
import FloatingSection from "../common-components/floating-section/FloatingSection";
import ai1Data from "../data/ai1-data";
import ai2Data from "../data/ai2-data";
import ai3Data from "../data/ai3-data";
import ai4Data from "../data/ai4-data";
import ai5Data from "../data/ai5-data";

const AiPage: React.FC = () => (
  <>
    <Section data={ai1Data} />
    <Section data={ai2Data} direction="left" color="dark" />
    <Section data={ai3Data} />
    <ItemsSection data={ai4Data} columns={2} color="light-colorful" />
    <FloatingSection data={ai5Data} color="colorful" />
  </>
);

export default AiPage;
