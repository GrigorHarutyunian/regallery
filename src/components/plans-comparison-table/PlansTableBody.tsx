import React from "react";
import { plansComparisonTableData } from "./plans-comparison-table-data";
import { info_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";

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
      {/* Header row */}
      <tr className="plans-table__row plans-table__row--header">
        <td className="plans-table__cell" scope="row">
          {leftTitle}
        </td>
        {plansComparisonTableData.map(({ name }) => (
          <td key={name} className="plans-table__cell">
            {name}
          </td>
        ))}
      </tr>

      {/* Feature rows */}
      {features.map(({ id, label, tooltip, values }, index) => {
        const isLastRow = index === features.length - 1;
        return (
          <tr
            key={id}
            className={`plans-table__row ${
              isLastRow ? "plans-table__row__bottom-border" : ""
            }`}
          >
            <td className="plans-table__cell plans-table__cell--feature">
              <span {...(tooltip ? { "data-tooltip": tooltip } : {})}>
                {label}{" "}
                {tooltip && (
                  <span className="plans-table__cell-info-icon">
                    {info_icon}
                  </span>
                )}
              </span>
            </td>
            {values.map((value, idx) => (
              <td key={idx} className="plans-table__cell">
                {typeof value === "boolean" ? (
                  value ? (
                    <CheckIcon sx={{ color: "#52BD94" }} /> // blue check
                  ) : (
                    <CloseIcon sx={{ color: "#D14343" }} /> // gray cross
                  )
                ) : (
                  <span>{value}</span> // string value
                )}
              </td>
            ))}
          </tr>
        );
      })}
      <tr className="plans-table__spacer">
        <td colSpan={plansComparisonTableData.length + 1}>&nbsp;</td>
      </tr>
    </tbody>
  );
};

export default PlansTableBody;
