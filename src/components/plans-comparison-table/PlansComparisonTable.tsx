import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./PlansComparisonTable.css";
import "./PlansTableBodyMobile.css";
import PlansTableBody from "./PlansTableBody";
import PlansTableBodyMobile from "./PlansTableBodyMobile";
import {
  plansComparisonCoreFeatures,
  plansComparisonGalleryLayouts,
  plansComparisonPostsPages,
  plansComparisonWooCommerce,
  plansComparisonTextMetadata,
  plansComparisonTemplates,
  plansComparisonHoverEffects,
  plansComparisonAITools,
  plansComparisonBuilders,
  plansComparisonGeneralFeatures,
  plansComparisonLightbox,
} from "./plans-comparison-table-data";

import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";
import pricingData from "../pricing/pricing-data";
import CustomButton from "../../common-components/custom-button/CustomButton";
import { useProVersionActivatorContext } from "../../contexts/ProVersionActivatorModalContext";
import { BillingPeriod } from "../../types/PricingDTO";
import BillingToggle from "../pricing/BillingToggle";
import {
  getAvailableBillingPeriods,
  getPaidPricingPlans,
  getPricingDetails,
} from "../pricing/pricing-utils";
import type { CSSProperties } from "react";
interface PlansTableBodyProps {
  features: IPlansComparisonTableFeatureDTO[];
  leftTitle: string;
}
const sections: PlansTableBodyProps[] = [
  { leftTitle: "Core Features", features: plansComparisonCoreFeatures },
  { leftTitle: "Gallery Layouts", features: plansComparisonGalleryLayouts },
  { leftTitle: "General Features", features: plansComparisonGeneralFeatures },
  { leftTitle: "Template Library", features: plansComparisonTemplates },
  { leftTitle: "Hover Effects", features: plansComparisonHoverEffects },
  { leftTitle: "Builders", features: plansComparisonBuilders },
  { leftTitle: "Text & Metadata", features: plansComparisonTextMetadata },
  { leftTitle: "AI Automation Tools", features: plansComparisonAITools },
  { leftTitle: "Lightbox", features: plansComparisonLightbox },
  { leftTitle: "Posts/Pages", features: plansComparisonPostsPages },
  { leftTitle: "WooCommerce Gallery", features: plansComparisonWooCommerce },
];

interface PlansComparisonTableProps {
  billingPeriod: BillingPeriod;
  setBillingPeriod: (period: BillingPeriod) => void;
}

const PlansComparisonTable: React.FC<PlansComparisonTableProps> = ({
  billingPeriod,
  setBillingPeriod,
}) => {
  const [activePlanIndex, setActivePlanIndex] = useState<number>(0);
  const [loadingPlanId, setLoadingPlanId] = useState<number | null>(null);
  const { openStripeCheckout } = useProVersionActivatorContext();
  const paidPlans = getPaidPricingPlans(pricingData);
  const availableBillingPeriods = getAvailableBillingPeriods(paidPlans);
  const tablePlans = Object.values(pricingData);
  const tableColumnStyles = {
    "--plans-table-feature-column-width": "280px",
  } as CSSProperties;

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

  // Show the table if it's the current hash target on mount
  useEffect(() => {
    if (location.hash === "#see-all-features") {
      const section = document.getElementById(
        "see-all-features",
      ) as HTMLElement;
      if (section) {
        section.style.display = "block";
      }
    }
  }, []);

  const handleCheckout = async (checkoutPlanId: number) => {
    setLoadingPlanId(checkoutPlanId);
    try {
      await openStripeCheckout(checkoutPlanId);
    } catch (error) {
      console.error("Stripe checkout error:", error);
    } finally {
      setLoadingPlanId(null);
    }
  };
  return (
    <section id="see-all-features" className="plans-table">
      <Container>
        <Row>
          <div className="plans-table__wrapper">
            <h2 className="plans-table__title section-text__title-centered">
              What’s the difference between plans?
            </h2>
            <div className="plans-table__billing-toggle">
              <BillingToggle
                billingPeriod={billingPeriod}
                availablePeriods={availableBillingPeriods}
                onChange={setBillingPeriod}
              />
            </div>
            <table className="plans-table__table" style={tableColumnStyles}>
              <colgroup>
                <col className="plans-table__feature-column" />
                {tablePlans.map(({ id }) => (
                  <col key={id} className="plans-table__plan-column" />
                ))}
              </colgroup>
              <tbody className="plans-table__table-body-header">
                <tr className="plans-table__header">
                  <td className="plans-table__empty-cell plans-table__empty-cell--top" />

                  {tablePlans.map(
                    ({
                      id,
                      mostPopular,
                      title,
                      currency,
                      buttonText,
                      href,
                      billingOptions,
                    }) => {
                      const plan = pricingData[id];
                      const pricingDetails = getPricingDetails(
                        plan,
                        billingPeriod,
                      );

                      return (
                        <td
                          key={id}
                          className={`plans-table__column${
                            billingOptions?.yearly?.price === 0
                              ? " free-plan"
                              : ""
                          }${mostPopular ? " pricing-card__popular" : ""}`}
                        >
                          {mostPopular ? (
                            <div className="pricing-card__popular-badge">
                              Most Popular
                            </div>
                          ) : null}
                          <div className="pricing-card__subtitle">{title}</div>
                          {pricingDetails?.effectiveDiscount ? (
                            <span className="canceled-price">
                              <div className="remove_line" />
                              {currency}
                              {pricingDetails.originalPrice}
                            </span>
                          ) : null}
                          <div className="pricing-card__title">
                            {currency ? (
                              <span className="currency">{currency}</span>
                            ) : null}
                            {pricingDetails?.main ? (
                              <span>{pricingDetails.main}</span>
                            ) : null}
                            {pricingDetails?.cents ? (
                              <span className="cents">
                                .{pricingDetails.cents}
                              </span>
                            ) : null}
                          </div>
                          {pricingDetails?.billingLabel ? (
                            <div className="plan-type">
                              {pricingDetails.billingLabel}
                            </div>
                          ) : null}
                          {pricingDetails?.option.duration ? (
                            <div className="pricing-card__duration">
                              {pricingDetails.option.duration}
                            </div>
                          ) : null}
                          {pricingDetails?.savedMoney ? (
                            <div className="parent_saved_money">
                              <div className="saved_money_div">
                                <span className="saved_money">
                                  {pricingDetails.savedMoney}
                                </span>
                              </div>
                            </div>
                          ) : null}
                          {href ? (
                            <>
                              <a
                                target={"_blank"}
                                href={href}
                                onClick={trackPricingConversion}
                              >
                                <div className="pricing-card__btn">
                                  {buttonText}
                                </div>
                              </a>
                            </>
                          ) : (
                            <CustomButton
                              handleClick={() => {
                                trackPricingConversion();
                                if (pricingDetails?.checkoutPlanId) {
                                  handleCheckout(pricingDetails.checkoutPlanId);
                                }
                              }}
                              className="pricing-card__btn"
                              isLoading={
                                pricingDetails?.checkoutPlanId
                                  ? loadingPlanId ===
                                    pricingDetails.checkoutPlanId
                                  : false
                              }
                              disabled={!pricingDetails?.hasCheckout}
                            >
                              {pricingDetails?.buttonText ?? buttonText}
                            </CustomButton>
                          )}
                        </td>
                      );
                    },
                  )}
                </tr>
              </tbody>
              {sections.map(({ leftTitle, features }) => {
                return (
                  <PlansTableBody
                    key={leftTitle}
                    features={features}
                    leftTitle={leftTitle}
                  />
                );
              })}
            </table>
            <table className="plans-table__table-mobile">
              <tbody>
                <tr className="plans-table__mobile-row plans-table__mobile-row--header">
                  {Object.values(pricingData).map(({ id, title }, index) => (
                    <td
                      key={id}
                      className={`plans-table__mobile-cell plans-table__mobile-cell--header ${
                        activePlanIndex === index ? "is-active" : ""
                      }`}
                      onClick={() => setActivePlanIndex(index)}
                    >
                      {title}
                    </td>
                  ))}
                </tr>
              </tbody>
              {sections.map(({ leftTitle, features }) => {
                return (
                  <PlansTableBodyMobile
                    key={leftTitle}
                    features={features}
                    leftTitle={leftTitle}
                    setActivePlanIndex={setActivePlanIndex}
                    activePlanIndex={activePlanIndex}
                  />
                );
              })}
            </table>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PlansComparisonTable;
