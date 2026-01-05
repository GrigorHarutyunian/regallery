export interface PlansComparisonTableDTO {
  id: string;
  name: string;
  price: {
    dollars: string;
    cents: string;
    period: string;
  };
  url: string;
  isBest?: boolean;
  badge?: string;
}

export interface IPlansComparisonTableFeatureDTO {
  id: string;
  label: string;
  tooltip?: string;
  values: (boolean | string)[]; // one value per plan (same order as plansComparisonTableData)
}
