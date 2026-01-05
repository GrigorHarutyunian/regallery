import React from "react";
import { Container, Row } from "react-bootstrap";
import "./PlansComparisonTable.css";
import "./PlansTableBodyMobile.css";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
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
  plansComparisonTableData,
} from "./plans-comparison-table-data";

import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";
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

                  {plansComparisonTableData.map(
                    ({
                      id,
                      isBest,
                      badge,
                      name,
                      price: { dollars, cents, period },
                    }) => (
                      <td
                        key={id}
                        className={`plans-table__column plans-table__column--discounted ${
                          isBest ? "plans-table__column--best" : ""
                        }`}
                      >
                        {badge && (
                          <div className="plans-table__badge">{badge}</div>
                        )}
                        <div className="plans-table__plan-name">{name}</div>
                        <div className="plans-table__price">
                          <span className="plans-table__price-inner">
                            <span className="plans-table__price-currency">
                              $
                            </span>
                            <span className="plans-table__price-value">
                              {dollars}
                            </span>
                            <span className="plans-table__price-cents">
                              {cents}
                            </span>
                            <span className="plans-table__price-period">
                              {period}
                            </span>
                          </span>
                        </div>

                        <DownloadBtn
                          className={
                            "download-btn plans-table__button plans-table__button--primary"
                          }
                        />
                      </td>
                    )
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
