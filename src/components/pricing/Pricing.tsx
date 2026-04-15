import "./Pricing.css";
import pricingData from "./pricing-data";
import PricingCard from "./PricingCard";
import { BillingPeriod } from "../../types/PricingDTO";
import money_back_guarantee from "../../assets/imgs/Money back guarantee.webp";
import BillingToggle from "./BillingToggle";
import {
  getAvailableBillingPeriods,
  getPaidPricingPlans,
} from "./pricing-utils";

interface PricingProps {
  billingPeriod: BillingPeriod;
  setBillingPeriod: (period: BillingPeriod) => void;
}

const Pricing: React.FC<PricingProps> = ({
  billingPeriod,
  setBillingPeriod,
}) => {
  const paidPlans = getPaidPricingPlans(pricingData);
  const availableBillingPeriods = getAvailableBillingPeriods(paidPlans);

  return (
    <section id="pricing">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="section-text_cards">
          <h2 className="section-text__title-centered">Pricing</h2>
          <BillingToggle
            billingPeriod={billingPeriod}
            availablePeriods={availableBillingPeriods}
            onChange={setBillingPeriod}
          />
          <div className="grid grid__3 pricing__cards">
            {paidPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingPeriod={billingPeriod}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pricing__guarantee">
        <div className="pricing__guarantee-badge">
          <img
            width={150}
            height={150}
            src={money_back_guarantee}
            alt="Money back guarantee"
            className="pricing__guarantee_icon"
          />
        </div>
        <div className="pricing__guarantee-text">
          <h3 className="pricing__guarantee-title">
            100% No-Risk Money Back Guarantee!
          </h3>

          <p className="pricing__guarantee-description">
            You are fully protected by our 100% No-Risk-Double-Guarantee. If you
            don’t like the products over the next 14 days, then we will happily
            refund 100% of your money. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
