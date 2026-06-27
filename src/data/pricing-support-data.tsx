import type { FloatingSectionData } from "../common-components/floating-section/FloatingSection";
import {
  IS_TRIAL_ENABLED,
  TRIAL_BUTTON_TEXT,
} from "../components/pricing/pricing-data";

const pricingSupportData: FloatingSectionData = {
  id: "pricing-support",
  title: "Simple pricing. Powerful galleries",
  text: "Choose the plan that fits your needs. Upgrade or downgrade anytime. Cancel anytime.",
  titleClassName: "section-text__title-centered",
  textClassName: "section-text__description-centered",
  primaryButton: {
    type: "custom",
    href: "/pricing",
    label: "View Pricing Plans",
    track: "pricing_support_cta",
    location: "pricing_support",
    className: "download-btn secondary-btn",
  },
  trialCta: {
    enabled: IS_TRIAL_ENABLED,
    label: <>Or {TRIAL_BUTTON_TEXT}</>,
    planId: 2,
    track: "start_free_trial",
    location: "pricing_support",
    event: "pricing_support_trial_click",
  },
};

export default pricingSupportData;
