import { plansComparisonTableData } from "./plans-comparison-table-data";
import { info_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
interface MobileSectionProps {
  leftTitle: string;
  features: IPlansComparisonTableFeatureDTO[];
}

const PlansTableBodyMobile: React.FC<MobileSectionProps> = ({
  leftTitle,
  features,
}) => {
  const [activePlanIndex, setActivePlanIndex] = useState<number>(0);
  return (
    <tbody>
      {/* Sticky section header */}
      <tr className="plans-table__mobile-row plans-table__mobile-row--header">
        {plansComparisonTableData.map(({ name }, index) => (
          <td
            key={name}
            className={`plans-table__mobile-cell plans-table__mobile-cell--header ${
              activePlanIndex === index ? "is-active" : ""
            }`}
            onClick={() => setActivePlanIndex(index)}
          >
            {name}
          </td>
        ))}
      </tr>
      <tr className="plans-table__mobile-row plans-table__mobile-row--label">
        <td className="plans-table__mobile-cell" colSpan={4}>
          {leftTitle}
        </td>
      </tr>
      {features.map((feature, index) => {
        const value = feature.values[activePlanIndex];
        const isLastRow = index === features.length - 1;
        return (
          <tr
            key={feature.id}
            className={`plans-table__mobile-row ${
              isLastRow ? "plans-table__row__bottom-border" : ""
            }`}
          >
            <td
              className="plans-table__mobile-cell plans-table__mobile-cell--feature"
              colSpan={3}
            >
              <span
                {...(feature.tooltip
                  ? { "data-tooltip": feature.tooltip }
                  : {})}
              >
                {feature.label}{" "}
                {feature.tooltip && (
                  <span className="plans-table__cell-info-icon">
                    {info_icon}
                  </span>
                )}
              </span>
            </td>

            <td className="plans-table__mobile-cell">
              {typeof value === "boolean" ? (
                value ? (
                  <CheckIcon sx={{ color: "#52BD94" }} />
                ) : (
                  <CloseIcon sx={{ color: "#D14343" }} />
                )
              ) : (
                value
              )}
            </td>
          </tr>
        );
      })}
      <tr className="plans-table__mobile-spacer">
        <td colSpan={plansComparisonTableData.length}>&nbsp;</td>
      </tr>
    </tbody>
  );
};
export default PlansTableBodyMobile;
