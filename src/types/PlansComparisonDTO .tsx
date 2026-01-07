export interface IPlansComparisonTableFeatureDTO {
  id: string;
  label: string;
  tooltip?: string;
  values: (boolean | string)[]; // one value per plan (same order as plansComparisonTableData)
}
