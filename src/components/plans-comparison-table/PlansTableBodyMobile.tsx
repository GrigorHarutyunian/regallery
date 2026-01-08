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
}) => {
  return (
    <tbody>
      <tr className="plans-table__mobile-row plans-table__mobile-row--label">
        <td className="plans-table__mobile-cell" colSpan={4}>
          {leftTitle}
        </td>
      </tr>
      {features.map((feature) => {
        const value = feature.values[activePlanIndex];
        return (
          <tr
            key={feature.id}
            className={`plans-table__mobile-row plans-table__row__bottom-border`}
          >
            <td
              className="plans-table__mobile-cell plans-table__mobile-cell--feature"
              colSpan={3}
            >
              <span>
                {feature.label}{" "}
                {feature.tooltip && (
                  <span data-tooltip={feature.tooltip} className="info-icon">
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
    </tbody>
  );
};
export default PlansTableBodyMobile;
