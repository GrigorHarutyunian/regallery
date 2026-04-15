export type BillingPeriod = "yearly" | "monthly";

export interface PricingBillingOptionDTO {
  checkoutPlanId?: number;
  price: number;
  discount?: number;
  duration?: string;
  billingLabel?: string;
  planType?: BillingPeriod;
  buttonText?: string;
}

export default interface PricingDTO {
  id: number;
  text: string;
  buttonText: string;
  currency?: string;
  advantages: (string | JSX.Element)[];
  title: string;
  href?: string;
  mostPopular?: boolean;
  billingOptions?: Partial<Record<BillingPeriod, PricingBillingOptionDTO>>;
}
