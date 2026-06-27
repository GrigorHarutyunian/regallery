import FloatingSection from "../common-components/floating-section/FloatingSection";
import ItemsSection from "../common-components/common-items/ItemsSection";
import PlansComparisonTable from "../components/plans-comparison-table/PlansComparisonTable";
import Pricing from "../components/pricing/Pricing";
import PricingValueSection from "../components/pricing/PricingValueSection";
import pricingSupportData from "../data/pricing-support-data";
import { pricingFaqData } from "../data/pricing-faq-data";
import { BillingPeriod } from "../types/PricingDTO";

interface PricingPageProps {
  billingPeriod: BillingPeriod;
  setBillingPeriod: (period: BillingPeriod) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({
  billingPeriod,
  setBillingPeriod,
}) => (
  <>
    <Pricing
      billingPeriod={billingPeriod}
      setBillingPeriod={setBillingPeriod}
    />
    <PricingValueSection />
    <ItemsSection data={pricingFaqData} columns={2} />
    <PlansComparisonTable
      billingPeriod={billingPeriod}
      setBillingPeriod={setBillingPeriod}
    />
    <FloatingSection data={pricingSupportData} color="colorful" />
  </>
);

export default PricingPage;
