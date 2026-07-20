import { APP_URL, DEMO_URL } from "./shared.js";

export const menuData = {
  brand: "Re Gallery",
  brandTag: "for Shopify",
  logo: "./assets/logo.webp",
  links: [
    { label: "Features", href: "#features" },
    { label: "Layouts", href: "#layouts" },
    { label: "Demo", href: DEMO_URL, external: true },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    label: "Install for Free",
    href: APP_URL,
    external: true,
  },
};
