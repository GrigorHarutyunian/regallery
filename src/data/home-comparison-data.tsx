import type { TableSectionData } from "../common-components/table-section/TableSection";

export const homeComparisonData: TableSectionData = {
  id: "plugin-comparison",
  featureColumnTitle: "Feature",
  title: "Re Gallery vs NextGEN, Envira, FooGallery & Modula",
  description:
    "Compare modern gallery features, AI image SEO, performance, and pricing across the most popular WordPress gallery plugins.",
  columns: [
    { title: "Re Gallery", description: "from $0" },
    { title: "NextGEN Gallery", description: "Imagely" },
    { title: "Envira Gallery", description: "Awesome Motive" },
    { title: "FooGallery", description: "FooPlugins" },
    { title: "Modula", description: "WPChill" },
  ],
  rowGroups: [
    {
      title: "AI & IMAGE SEO",
      rows: [
        {
          label: "AI-generated titles, alt text & descriptions",
          values: [true, false, false, false, false],
        },
        {
          label: "Bulk AI generation for existing media",
          values: [true, false, false, false, false],
        },
        {
          label: "AI writes in your site's language",
          values: [true, false, false, false, false],
        },
        {
          label: "Built-in image SEO workflow",
          values: [true, false, false, false, false],
        },
        {
          label: "Requires additional plugin for image SEO",
          values: ["No", "Yes", "Yes", "Yes", "Yes"],
        },
      ],
    },

    {
      title: "GALLERY EXPERIENCE",
      rows: [
        {
          label: "Responsive galleries",
          values: [true, true, true, true, true],
        },
        {
          label: "Multiple gallery layouts",
          values: [true, true, true, true, true],
        },
        {
          label: "Dynamic galleries",
          values: [
            true,
            { icon: true, note: "Pro" },
            { icon: true, note: "Highest plan only" },
            { icon: true, note: "Highest plan only" },
            { icon: true, note: "Highest plan only" },
          ],
        },
        {
          label: "Video gallery support",
          values: [
            true,
            "~",
            { icon: true, note: "Highest plan only" },
            { icon: true, note: "Highest plan only" },
            { icon: true, note: "Pro" },
          ],
        },
        {
          label: "Advanced lightbox",
          values: [
            true,
            { icon: true, note: "Pro" },
            { icon: true, note: "Pro" },
            { icon: true, note: "Pro" },
            { icon: true, note: "Pro" },
          ],
        },
      ],
    },

    {
      title: "PERFORMANCE & COMPATIBILITY",
      rows: [
        {
          label: "Lazy loading",
          values: [
            true,
            { icon: true, note: "Pro" },
            { icon: true, note: "Pro" },
            true,
            true,
          ],
        },
        {
          label: "Bulk image processing",
          values: [true, true, "~", { icon: true, note: "Pro" }, "~"],
        },
        {
          label: "Elementor support",
          values: [
            true,
            { icon: true, note: "Highest plan only" },
            true,
            true,
            true,
          ],
        },
        {
          label: "Gutenberg support",
          values: [true, true, true, true, true],
        },
        {
          label: "WooCommerce integration",
          values: [
            { icon: true, note: "Pro" },
            { icon: false, note: "eCommerce in highest plan only" },
            { icon: true, note: "Highest plan only" },
            { icon: true, note: "Highest plan only" },
            "~",
          ],
        },
      ],
    },

    {
      title: "PRICING",
      rows: [
        {
          label: "Free version available",
          values: [true, true, true, true, true],
        },
        {
          label: "Starting annual price",
          values: ["$29.99", "~$69.50", "~$39.50", "~$33.99", "~$39.00"],
        },
        {
          label: "AI included",
          values: [true, false, false, false, false],
        },
      ],
    },
  ],
};
