import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./PlansComparisonTable.css";
import "./PlansTableBodyMobile.css";
import PlansTableBody from "./PlansTableBody";
import PlansTableBodyMobile from "./PlansTableBodyMobile";
import { getSale } from "../../utils/getSale";
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
  { leftTitle: "General Features", features: plansComparisonGeneralFeatures },
  { leftTitle: "Templates Library", features: plansComparisonTemplates },
  { leftTitle: "Builders", features: plansComparisonBuilders },
  { leftTitle: "Text & Metadata", features: plansComparisonTextMetadata },
  { leftTitle: "AI Automation Tools", features: plansComparisonAITools },
  { leftTitle: "Lightbox", features: plansComparisonLightbox },
  { leftTitle: "Posts/Pages", features: plansComparisonPostsPages },
  { leftTitle: "WooCommerce Gallery", features: plansComparisonWooCommerce },
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
      setLoadingPlanId(null);
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
                      discount,
                      planType,
                      duration,
                    }) => {
                      if (typeof discount === "undefined") {
                        discount = getSale()?.couponCode
                          ? 0
                          : getSale()?.discount;
                      }
                      var discountedPrice = discount
                        ? Math.round(
                            (price - (Math.round(price) * discount) / 100) * 100
                          ) / 100
                        : 0;

                      const savedMoney =
                        "Save " +
                        (discount && discount > 50
                          ? `${currency}${Math.round(price - discountedPrice)}`
                          : `${discount}%`);

                      const originalPrice =
                        planType === "monthly"
                          ? (price / 12).toFixed(2)
                          : price.toFixed(2);
                      const finalPrice =
                        planType === "monthly"
                          ? (discountedPrice / 12).toFixed(2)
                          : discountedPrice.toFixed(2);
                      const [main, cents] = discount
                        ? finalPrice.toString().split(".")
                        : originalPrice.toString().split(".");
                      return (
                        <td
                          key={id}
                          className={`plans-table__column${
                            price === 0 ? " free-plan" : ""
                          }${mostPopular ? " pricing-card__popular" : ""}`}
                        >
                          {mostPopular ? (
                            <div className="pricing-card__popular-badge">
                              Most Popular
                            </div>
                          ) : null}
                          <div className="pricing-card__subtitle">{title}</div>
                          {price !== 0 && discount ? (
                            <span className="canceled-price">
                              <div className="remove_line" />
                              {currency}
                              {originalPrice}
                            </span>
                          ) : null}
                          <div className="pricing-card__title">
                            {currency ? (
                              <span className="currency">{currency}</span>
                            ) : null}
                            {main ? <span>{main}</span> : null}
                            {price !== 0 && cents ? (
                              <span className="cents">.{cents}</span>
                            ) : null}
                          </div>
                          {planType ? (
                            <div className="plan-type">
                              Per {planType === "monthly" ? "month" : "year"} /
                              Billed annually
                            </div>
                          ) : null}
                          {duration ? (
                            <div className="pricing-card__duration">
                              {duration}
                            </div>
                          ) : null}
                          {discount ? (
                            <div className="parent_saved_money">
                              <div className="saved_money_div">
                                <span className="saved_money">
                                  {savedMoney}
                                </span>
                              </div>
                            </div>
                          ) : null}
                          {href ? (
                            <>
                              <a target={"_blank"} href={href}>
                                <div className="pricing-card__btn">
                                  {buttonText}
                                </div>
                              </a>
                            </>
                          ) : (
                            <CustomButton
                              handleClick={() => handleCheckout(id)}
                              className="pricing-card__btn"
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
