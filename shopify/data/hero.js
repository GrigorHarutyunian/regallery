export const heroData = {
  eyebrow: "The only Shopify gallery app with built-in AI image SEO",
  headline: {
    before: "Your product photos<br />deserve to",
    grad: "be found.",
    after: "",
  },
  subtitle:
    "Re Gallery adds AI-generated alt text, titles, and image descriptions to every Shopify product photo — automatically, in your store's language — while giving you beautiful, conversion-focused gallery layouts.",
  primaryCta: {
    label: "Install for Free",
    href: "https://apps.shopify.com/re-gallery",
    external: true,
  },
  secondaryCta: {
    label: "See how it works ↓",
    href: "#features",
  },
  image: {
    src: "./assets/hero/product-photo-768.webp",
    srcset: `
                  ./assets/hero/product-photo-480.webp   480w,
                  ./assets/hero/product-photo-768.webp   768w,
                  ./assets/hero/product-photo-1024.webp 1024w
                `,
    sizes: "(max-width: 768px) 92vw, 420px",
    width: 1024,
    height: 682,
  },
  beforeCard: {
    label: "Every other gallery app",
    fields: [
      { label: "Alt text", value: null },
      { label: "Title", value: null },
      { label: "Caption", value: null },
      { label: "Description", value: null },
    ],
    emptyPlaceholder: "Empty — not set",
    footerWarning: "Invisible to Google Image Search",
    imageAlt: "Product photo example without AI SEO metadata",
  },
  afterCard: {
    badge: "With Re Gallery",
    label: "AI-powered, one click",
    imageAlt:
      "Golden temple reflecting in a serene pond, surrounded by lush greenery.",
    fields: [
      {
        label: "Alt text",
        value:
          "Golden temple reflecting in a serene pond, surrounded by lush greenery.",
        id: "typed-alt",
      },
      {
        label: "Title",
        value: "Golden Temple Reflection",
      },
      {
        label: "Caption",
        value:
          "Golden vibes and serene reflections—nature’s perfect masterpiece! 🌿✨",
      },
      {
        label: "Description",
        value:
          "Nestled among lush greenery, this stunning golden pavilion reflects beautifully in the serene waters, creating a vibe that's both tranquil and awe-inspiring. Perfect for adding a touch of elegance to your blog or website, this image captures the essence of peaceful retreats and can effortlessly elevate any design project!",
      },
    ],
    footerSuccess: "SEO-ready, generated in one click",
  },
  trustBadges: [
    {
      label: "7-day free trial",
      iconPaths: [
        "M7.5 14C11.09 14 14 11.09 14 7.5S11.09 1 7.5 1 1 3.91 1 7.5 3.91 14 7.5 14z",
        "M5 7.5l2 2 3-3",
      ],
    },
    {
      label: "Works with all Shopify themes",
      iconPaths: ["M7.5 1.5v12M1.5 7.5h12"],
    },
  ],
};
