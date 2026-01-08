import { ReactNode } from "react";

export interface IPlansComparisonTableFeatureDTO {
  id: string;
  label: string;
  tooltip?: string;
  values: (boolean | string | ReactNode)[];
}
