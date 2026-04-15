import { useState } from "react";
import PricingDTO, { BillingPeriod } from "../../types/PricingDTO";
import { useProVersionActivatorContext } from "../../contexts/ProVersionActivatorModalContext";
import CustomButton from "../../common-components/custom-button/CustomButton";
import { getPricingDetails } from "./pricing-utils";

interface PricingCardProps {
  plan: PricingDTO;
  billingPeriod: BillingPeriod;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, billingPeriod }) => {
  const { currency, text, advantages, title, href, mostPopular } = plan;
  const [isLoading, setIsLoading] = useState(false);
  const { openStripeCheckout } = useProVersionActivatorContext();
  const pricingDetails = getPricingDetails(plan, billingPeriod);

  const trackPricingConversion = () => {
    if (typeof window === "undefined") return;

    const trackingWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event: "conversion",
      experiment: "button_color_test",
      variant: window.localStorage.getItem("abTest_v1"),
    });
  };

  const handleCheckout = async () => {
    if (!pricingDetails?.checkoutPlanId) {
      return;
    }

    setIsLoading(true);
    try {
      await openStripeCheckout(pricingDetails.checkoutPlanId);
    } catch (error) {
      console.error("Stripe checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`grid-item pricing-card ${
        mostPopular ? "pricing-card__popular" : ""
      }`}
    >
      {mostPopular ? (
        <div className="pricing-card__popular-badge">Most Popular</div>
      ) : null}
      <div className="pricing-card__header text-start">
        <div className="pricing-card__subtitle">{title}</div>
        <p className="section-text__desc pricing__text">{text}</p>
        {!pricingDetails ? (
          <span className="pricing-card__title">Free</span>
        ) : (
          <>
            {pricingDetails.effectiveDiscount ? (
              <span className="canceled-price">
                <div className="remove_line" />
                {currency}
                {pricingDetails.originalPrice}
              </span>
            ) : null}
            <div className="pricing-card__title">
              {currency ? <span className="currency">{currency}</span> : null}
              {pricingDetails.main ? <span>{pricingDetails.main}</span> : null}
              {pricingDetails.cents ? (
                <span className="cents">.{pricingDetails.cents}</span>
              ) : null}
            </div>
            {pricingDetails.billingLabel ? (
              <div className="plan-type">{pricingDetails.billingLabel}</div>
            ) : null}
            {pricingDetails.option.duration ? (
              <div className="pricing-card__duration">
                {pricingDetails.option.duration}
              </div>
            ) : null}
            {pricingDetails.savedMoney ? (
              <div className="parent_saved_money">
                <div className="saved_money_div">
                  <span className="saved_money">
                    {pricingDetails.savedMoney}
                  </span>
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>

      {href ? (
        <>
          <a target={"_blank"} href={href} onClick={trackPricingConversion}>
            <div className="pricing-card__btn">{plan.buttonText}</div>
          </a>
        </>
      ) : (
        <>
          <CustomButton
            handleClick={() => {
              trackPricingConversion();
              handleCheckout();
            }}
            className="pricing-card__btn"
            isLoading={isLoading}
            disabled={!pricingDetails?.hasCheckout}
          >
            {pricingDetails?.buttonText ?? plan.buttonText}
          </CustomButton>
          <div className="primary-btn__free-link">
            <a
              href="https://wordpress.org/plugins/regallery/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Or try the free version
            </a>
          </div>
        </>
      )}
      <div className="pricing-card__features-wrapper">
        <ul className="pricing-card__features">
          {advantages.map((val, id) => {
            return (
              <li className="pricing-card__features__list" key={id}>
                {val}
              </li>
            );
          })}
        </ul>
        <a
          className="pricing-card__features-link--see-all"
          href="#see-all-features"
        >
          See all features
        </a>
      </div>
    </div>
  );
};
export default PricingCard;
