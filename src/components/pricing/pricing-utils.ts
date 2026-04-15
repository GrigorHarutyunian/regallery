import PricingDTO, {
  BillingPeriod,
  PricingBillingOptionDTO,
} from "../../types/PricingDTO";
import { getSale } from "../../utils/getSale";

export const billingPeriods: BillingPeriod[] = ["yearly", "monthly"];

export const getPaidPricingPlans = (pricingData: Record<number, PricingDTO>) =>
  Object.values(pricingData).filter((plan) =>
    Boolean(plan.billingOptions?.yearly?.price),
  );

export const getAvailableBillingPeriods = (plans: PricingDTO[]) =>
  billingPeriods.filter((period) =>
    plans.some((plan) => Boolean(plan.billingOptions?.[period])),
  );

export const getResolvedBillingOption = (
  plan: PricingDTO,
  billingPeriod: BillingPeriod,
): PricingBillingOptionDTO | undefined =>
  plan.billingOptions?.[billingPeriod] ?? plan.billingOptions?.yearly;

export const getPricingDetails = (
  plan: PricingDTO,
  billingPeriod: BillingPeriod,
) => {
  const option = getResolvedBillingOption(plan, billingPeriod);

  if (!option) {
    return null;
  }

  const effectiveDiscount =
    typeof option.discount === "undefined"
      ? getSale()?.couponCode
        ? 0
        : getSale()?.discount || 0
      : option.discount;

  const displayPlanType = option.planType ?? billingPeriod;

  const getDisplayPrice = (price: number) => {
    if (billingPeriod === "yearly" && displayPlanType === "monthly") {
      return price / 12;
    }

    if (billingPeriod === "monthly" && displayPlanType === "yearly") {
      return price * 12;
    }

    return price;
  };

  const discountedPrice = effectiveDiscount
    ? Math.round(
        (option.price - (Math.round(option.price) * effectiveDiscount) / 100) *
          100,
      ) / 100
    : option.price;

  const originalPrice = getDisplayPrice(option.price).toFixed(2);
  const finalPrice = getDisplayPrice(discountedPrice).toFixed(2);
  const [main, cents] = (effectiveDiscount ? finalPrice : originalPrice).split(
    ".",
  );
  const savedMoney = effectiveDiscount
    ? effectiveDiscount > 50
      ? `Save ${plan.currency}${Math.round(option.price - discountedPrice)}`
      : `Save ${effectiveDiscount}%`
    : null;

  const billingLabel =
    option.billingLabel ??
    `Per ${displayPlanType === "monthly" ? "month" : "year"} / billed ${billingPeriod === "yearly" ? "annually" : "monthly"}`;

  return {
    option,
    billingLabel,
    effectiveDiscount,
    originalPrice,
    finalPrice,
    main,
    cents: main !== "0" ? cents : null,
    savedMoney,
    checkoutPlanId: option.checkoutPlanId,
    hasCheckout: typeof option.checkoutPlanId === "number",
    buttonText: option.buttonText ?? plan.buttonText,
  };
};
