import { BillingPeriod } from "../../types/PricingDTO";

interface BillingToggleProps {
  billingPeriod: BillingPeriod;
  availablePeriods: BillingPeriod[];
  onChange: (period: BillingPeriod) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
  billingPeriod,
  availablePeriods,
  onChange,
}) => {
  if (availablePeriods.length < 2) {
    return null;
  }

  const orderedPeriods = [...availablePeriods].sort((left, right) => {
    if (left === right) {
      return 0;
    }

    return left === "monthly" ? -1 : 1;
  });

  return (
    <div className="pricing__billing-toggle-row">
      <div className="pricing__billing-toggle" aria-label="Billing period">
        {orderedPeriods.map((period) => (
          <button
            key={period}
            type="button"
            className={`pricing__billing-toggle-btn ${
              billingPeriod === period ? "is-active" : ""
            }`}
            onClick={() => onChange(period)}
          >
            {period === "yearly" ? "Yearly" : "Monthly"}
          </button>
        ))}
      </div>
      <span
        className={`pricing__billing-toggle-note ${
          billingPeriod === "monthly" ? "is-disabled" : ""
        }`}
      >
        <span className="pricing__billing-toggle-note-accent">(save 35%)</span>
      </span>
    </div>
  );
};

export default BillingToggle;
