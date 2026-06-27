import type { FloatingSectionData } from "../common-components/floating-section/FloatingSection";
import {
  IS_TRIAL_ENABLED,
  TRIAL_BUTTON_TEXT,
} from "../components/pricing/pricing-data";

const ai5Data: FloatingSectionData = {
  id: "ai-footer",
  title: "Ready to stop typing image SEO by hand?",
  text: (
    <>
      Join the WordPress site owners using Re Gallery to generate alt text,
      titles, and descriptions in one click - individually or across their whole
      media library.
    </>
  ),
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

export default ai5Data;
