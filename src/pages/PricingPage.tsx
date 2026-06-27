import FloatingSection from "../common-components/floating-section/FloatingSection";
import ItemsSection from "../common-components/common-items/ItemsSection";
import PlansComparisonTable from "../components/plans-comparison-table/PlansComparisonTable";
import Pricing from "../components/pricing/Pricing";
import TableSection from "../common-components/table-section/TableSection";
import pricingSupportData from "../data/pricing-support-data";
import { pricingValueData } from "../data/pricing-value-data";
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
    <TableSection data={pricingValueData} />
    <ItemsSection data={pricingFaqData} columns={2} color="light-colorful" />
    <PlansComparisonTable
      billingPeriod={billingPeriod}
      setBillingPeriod={setBillingPeriod}
    />
    <FloatingSection data={pricingSupportData} color="colorful" />
  </>
);

export default PricingPage;
