import React from "react";
import { Container } from "react-bootstrap";
import CustomButton from "../../common-components/custom-button/CustomButton";
import { IS_TRIAL_ENABLED, TRIAL_BUTTON_TEXT } from "../pricing/pricing-data";
import { useTrialModalContext } from "../../contexts/TrialModalContext";
import pricingSupportData from "./pricing-support-data";
import "./Support.css";

const PricingSupport: React.FC = () => {
  const { openTrialModal } = useTrialModalContext();
  const hasTrialCta = IS_TRIAL_ENABLED && pricingSupportData.showTrialCta;

  const trackPricingSupportTrial = () => {
    if (typeof window === "undefined") return;

    const trackingWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event: "pricing_support_trial_click",
      location: "pricing_support",
    });
  };

  return (
    <section id="pricing-support" className="supportandInfo">
      <Container>
        <div className="contact_us_row colored-section">
          <h2 className="section-text__title-centered">
            {pricingSupportData.title}
          </h2>
          <div className="section-text__description-centered">
            <p>{pricingSupportData.text}</p>
          </div>
          <div className="primary-cta">
            <a
              href={pricingSupportData.href}
              data-track="pricing_support_cta"
              data-location="pricing_support"
            >
              <CustomButton className="download-btn secondary-btn">
                {pricingSupportData.buttonText}
              </CustomButton>
            </a>
            {hasTrialCta ? (
              <button
                type="button"
                className="trial-link pricing-support__trial-link"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  trackPricingSupportTrial();
                  openTrialModal(pricingSupportData.trialPlanId);
                }}
                data-track="start_free_trial"
                data-location="pricing_support"
              >
                Or {TRIAL_BUTTON_TEXT}
              </button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingSupport;
