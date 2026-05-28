import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PricingDTO, { BillingPeriod } from "../../types/PricingDTO";
import { useProVersionActivatorContext } from "../../contexts/ProVersionActivatorModalContext";
import { useTrialModalContext } from "../../contexts/TrialModalContext";
import CustomButton from "../../common-components/custom-button/CustomButton";
import { getPricingDetails } from "./pricing-utils";
import {
  IS_TRIAL_ENABLED,
  TRIAL_BUTTON_TEXT,
  TRIAL_DAYS,
} from "./pricing-data";

interface PricingCardProps {
  plan: PricingDTO;
  billingPeriod: BillingPeriod;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, billingPeriod }) => {
  const { currency, text, advantages, title, href, mostPopular } = plan;
  const hasTrialCta = !href && IS_TRIAL_ENABLED;
  const [isLoading, setIsLoading] = useState(false);
  const { openStripeCheckout } = useProVersionActivatorContext();
  const { openTrialModal } = useTrialModalContext();
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
          <a
            target={"_blank"}
            href={href}
            onClick={trackPricingConversion}
            data-track="download_free_version"
            data-location="pricing"
          >
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
            className={`pricing-card__btn${hasTrialCta ? " pricing-card__btn--outlined" : ""}`}
            isLoading={isLoading}
            disabled={!pricingDetails?.hasCheckout}
            data-track="pricing_checkout"
            data-location="pricing"
          >
            {pricingDetails?.buttonText ?? plan.buttonText}
          </CustomButton>
          {hasTrialCta ? (
            <CustomButton
              handleClick={() => {
                trackPricingConversion();
                openTrialModal(plan.id);
              }}
              className="pricing-card__btn pricing-card__btn--trial"
              isLoading={false}
              disabled={!pricingDetails?.hasCheckout}
              data-track="start_free_trial"
              data-location="pricing"
            >
              {TRIAL_BUTTON_TEXT}
            </CustomButton>
          ) : null}
          {hasTrialCta ? (
            <div className="pricing-card__trial-note">
              <CheckCircleIcon className="pricing-card__trial-check" />
              {TRIAL_DAYS}-day free trial
              <span className="pricing-card__trial-separator">•</span>
              No credit card required
            </div>
          ) : null}
        </>
      )}
      <div className="pricing-card__divider" />
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
