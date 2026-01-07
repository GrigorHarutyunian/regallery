import React, { useState } from "react";
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
  plansComparisonAITools,
  plansComparisonBuilders,
  plansComparisonGeneralFeatures,
  plansComparisonLightbox,
} from "./plans-comparison-table-data";

import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";
import pricingData from "../pricing/pricing-data";
import CustomButton from "../../common-components/custom-button/CustomButton";
import { useProVersionActivatorContext } from "../../contexts/ProVersionActivatorModalContext";
interface PlansTableBodyProps {
  features: IPlansComparisonTableFeatureDTO[];
  leftTitle: string;
}
const sections: PlansTableBodyProps[] = [
  { leftTitle: "Core Features", features: plansComparisonCoreFeatures },
  { leftTitle: "Gallery Layouts", features: plansComparisonGalleryLayouts },
  { leftTitle: "Posts/Pages", features: plansComparisonPostsPages },
  { leftTitle: "WooCommerce", features: plansComparisonWooCommerce },
  { leftTitle: "Text & Metadata", features: plansComparisonTextMetadata },
  { leftTitle: "Templates", features: plansComparisonTemplates },
  { leftTitle: "Lightbox", features: plansComparisonLightbox },
  { leftTitle: "General Features", features: plansComparisonGeneralFeatures },
  { leftTitle: "AI Tools", features: plansComparisonAITools },
  { leftTitle: "Builders", features: plansComparisonBuilders },
];

const PlansComparisonTable: React.FC = () => {
  const [activePlanIndex, setActivePlanIndex] = useState<number>(0);
  const [loadingPlanId, setLoadingPlanId] = useState<number | null>(null);
  const { openStripeCheckout } = useProVersionActivatorContext();
  const handleCheckout = async (id: number) => {
    setLoadingPlanId(id);
    try {
      await openStripeCheckout(id);
    } catch (error) {
      console.error("Stripe checkout error:", error);
    } finally {
      setLoadingPlanId(null); // reset after checkout
    }
  };
  return (
    <section id="plans-comparison-table" className="plans-table">
      <Container>
        <Row>
          <div className="plans-table__wrapper">
            <h2 className="plans-table__title section-text__title-centered">
              What’s the difference between plans?
            </h2>
            <table className="plans-table__table">
              <tbody className="plans-table__table-body-header">
                <tr className="plans-table__header">
                  <td className="plans-table__empty-cell plans-table__empty-cell--top" />

                  {Object.values(pricingData).map(
                    ({
                      id,
                      mostPopular,
                      price,
                      title,
                      currency,
                      buttonText,
                      href,
                    }) => {
                      const [integer, fraction = "00"] = price
                        .toFixed(2)
                        .split(".");
                      return (
                        <td
                          key={id}
                          className={`plans-table__column plans-table__column--discounted ${
                            mostPopular ? "plans-table__column--best" : ""
                          }`}
                        >
                          {mostPopular && (
                            <div className="plans-table__badge">
                              Most Popular
                            </div>
                          )}
                          <div className="plans-table__plan-name">{title}</div>
                          <div className="plans-table__price">
                            <span className="plans-table__price-inner">
                              <span className="plans-table__price-currency">
                                {currency}
                              </span>
                              <span className="plans-table__price-value">
                                {integer}
                              </span>
                              <span className="plans-table__price-cents">
                                .{fraction}
                              </span>
                              <span className="plans-table__price-period">
                                {"/ year"}
                              </span>
                            </span>
                          </div>
                          {href ? (
                            <>
                              <a target={"_blank"} href={href}>
                                <div className="pricing-card__btn plans-table__button--primary">
                                  {buttonText}
                                </div>
                              </a>
                            </>
                          ) : (
                            <CustomButton
                              handleClick={() => handleCheckout(id)}
                              className="pricing-card__btn plans-table__button--primary"
                              isLoading={loadingPlanId === id ? true : false}
                            >
                              {buttonText}
                            </CustomButton>
                          )}
                        </td>
                      );
                    }
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
