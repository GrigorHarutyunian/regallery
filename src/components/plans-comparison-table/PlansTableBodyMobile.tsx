import { info_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import pricingData from "../pricing/pricing-data";
interface MobileSectionProps {
  leftTitle: string;
  features: IPlansComparisonTableFeatureDTO[];
  setActivePlanIndex: any;
  activePlanIndex: any;
}

const PlansTableBodyMobile: React.FC<MobileSectionProps> = ({
  leftTitle,
  features,
  activePlanIndex,
  setActivePlanIndex,
}) => {
  return (
    <tbody>
      {/* Sticky section header */}
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

            <td
              className={`plans-table__mobile-cell plans-table__mobile-cell--value ${
                activePlanIndex === activePlanIndex ? "is-active" : ""
              }`}
            >
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
        <td colSpan={Object.values(pricingData).length}>&nbsp;</td>
      </tr>
    </tbody>
  );
};
export default PlansTableBodyMobile;
