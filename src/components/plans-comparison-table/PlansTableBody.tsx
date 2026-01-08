import React from "react";
import { info_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";
import pricingData from "../pricing/pricing-data";

interface PlansTableBodyProps {
  features: IPlansComparisonTableFeatureDTO[];
  leftTitle: string;
}

const PlansTableBody: React.FC<PlansTableBodyProps> = ({
  features,
  leftTitle,
}) => {
  return (
    <tbody>
      <tr className="plans-table__row plans-table__row--header">
        <td
          className="plans-table__cell"
          scope="row"
          colSpan={Object.values(pricingData).length + 1}
        >
          {leftTitle}
        </td>
      </tr>
      {features.map(({ id, label, tooltip, values }) => {
        return (
          <tr
            key={id}
            className={`plans-table__row plans-table__row__bottom-border`}
          >
            <td className="plans-table__cell plans-table__cell--feature">
              <span>
                {label}{" "}
                {tooltip && (
                  <span data-tooltip={tooltip} className="info-icon">
                    {info_icon}
                  </span>
                )}
              </span>
            </td>
            {values.map((value, idx) => (
              <td key={idx} className="plans-table__cell">
                {typeof value === "boolean" ? (
                  value ? (
                    <CheckIcon sx={{ color: "#52BD94" }} />
                  ) : (
                    <CloseIcon sx={{ color: "#D14343" }} />
                  )
                ) : (
                  <span>{value}</span>
                )}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default PlansTableBody;
