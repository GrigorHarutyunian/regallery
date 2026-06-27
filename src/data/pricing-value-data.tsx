import type { TableSectionData } from "../common-components/table-section/TableSection";

export const pricingValueData: TableSectionData = {
  id: "pricing-value",
  title: "What you'd pay elsewhere for the same result",
  description:
    "NextGEN, Envira, FooGallery, and Modula don't generate AI metadata at any price. To match what Re Gallery includes on every plan, you'd need a second plugin on top of theirs.",
  columns: [
    { title: "Re Gallery" },
    { title: "NextGEN" },
    { title: "Envira" },
    { title: "FooGallery" },
    { title: "Modula" },
  ],
  rows: [
    {
      label: "AI alt text, titles & descriptions",
      values: [
        "Included, every plan",
        "Not available",
        "Not available",
        "Not available",
        "Not available",
      ],
    },
    {
      label: "Plugins required for full image SEO",
      values: ["1", "2+", "2+", "2+", "2+"],
    },
    {
      label: "Entry price (annual)",
      values: ["$29.99", "~$69.50", "~$39.50", "~$39.99", "~$39.00"],
    },
  ],
};
