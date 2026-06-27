import ItemsSection from "../common-components/common-items/ItemsSection";
import Section from "../common-components/common-section/Section";
import Demo from "../components/demo/Demo";
import Templates from "../components/demo/Templates";
import HoverEffectsSection from "../components/hover-effects-section/HoverEffectsSection";
import LightboxShowcase from "../components/demo/LightboxShowcase";
import ResponsiveTemplate from "../components/demo/ResponsiveTemplate";
import PageBuilder from "../components/page-builder/PageBuilder";
import Review from "../components/reviews/Review";
import FloatingSection from "../common-components/floating-section/FloatingSection";
import { homeFaqData } from "../data/home-faq-data";
import { featuresData } from "../data/features-data";
import { benefitsData } from "../data/benefits-data";
import { trustData } from "../data/trust-data";
import heroData from "../data/hero-data";
import aiData from "../data/ai-data";
import infoData from "../data/info-data";
import hoverData from "../data/hover-data";
import studioData from "../data/studio-data";
import builderData from "../data/builder-data";
import supportData from "../data/support-data";

const HomePage: React.FC = () => (
  <>
    <Section data={heroData} />
    <ItemsSection data={trustData} columns={4} />
    <Demo />
    <Section data={aiData} />
    <Templates />
    <ItemsSection data={featuresData} columns={3} />
    <Section data={infoData} />
    <LightboxShowcase />
    <ItemsSection data={benefitsData} columns={3} />
    <HoverEffectsSection data={hoverData} />
    <ResponsiveTemplate />
    <Section data={studioData} />
    <PageBuilder data={builderData} />
    <Review />
    <ItemsSection data={homeFaqData} columns={2} />
    <FloatingSection data={supportData} color="dark" />
  </>
);

export default HomePage;
