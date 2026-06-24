export type BillingPeriod = "yearly" | "monthly";
import type { ReactNode } from "react";

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
  advantages: (string | ReactNode)[];
  title: string;
  href?: string;
  mostPopular?: boolean;
  billingOptions?: Partial<Record<BillingPeriod, PricingBillingOptionDTO>>;
}
