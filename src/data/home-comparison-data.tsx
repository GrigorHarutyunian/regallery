import type { TableSectionData } from "../common-components/table-section/TableSection";

export const homeComparisonData: TableSectionData = {
  id: "plugin-comparison",
  featureColumnTitle: "Feature",
  title: "Re Gallery vs NextGEN, Envira, FooGallery, Modula",
  description:
    "Scoped to the features buyers actually evaluate — not a padded checklist. Pricing reflects each vendor's single-site annual plan where the relevant feature is unlocked.",
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
          label: "AI-generated alt text",
          values: [true, false, false, false, false],
        },
        {
          label: "AI-generated titles",
          values: [true, false, false, false, false],
        },
        {
          label: "AI-generated descriptions",
          values: [true, false, false, false, false],
        },
        {
          label: "Bulk AI processing of existing libraries",
          values: [true, false, false, false, false],
        },
        {
          label: "Multilingual AI output",
          values: [true, false, false, false, false],
        },
        {
          label: "Requires a separate plugin for image SEO",
          values: [
            "No",
            "Yes, third-party",
            "Yes, third-party",
            "Yes, third-party",
            "Yes, third-party",
          ],
        },
      ],
    },
    {
      title: "GALLERY BUILDING",
      rows: [
        {
          label: "Responsive galleries",
          values: [true, true, true, true, true],
        },
        {
          label: "Modern layout templates",
          values: [true, "~ Dated UI", true, true, true],
        },
        {
          label: "Dynamic galleries",
          values: [true, true, { icon: true, note: "Pro only" }, "~", false],
        },
        {
          label: "Lightbox included",
          values: [true, true, true, true, true],
        },
        {
          label: "Video gallery support",
          values: [
            true,
            { icon: true, note: "Pro only" },
            { icon: true, note: "Pro only" },
            { icon: true, note: "Pro only" },
            true,
          ],
        },
      ],
    },
    {
      title: "PERFORMANCE & TECHNICAL",
      rows: [
        {
          label: "Lightweight / minimal bloat",
          values: [
            true,
            { icon: false, note: "Heavier core" },
            "~",
            true,
            true,
          ],
        },
        {
          label: "Lazy loading built in",
          values: [
            true,
            { icon: false, note: "Needs add-on" },
            "~",
            true,
            true,
          ],
        },
        {
          label: "Page builder support (Elementor, Beaver, Divi, blocks)",
          values: [true, "~", true, true, true],
        },
        {
          label: "WordPress-native",
          values: [true, true, true, true, true],
        },
      ],
    },
    {
      title: "COMMERCE & SCALE",
      rows: [
        {
          label: "WooCommerce integration",
          values: [
            true,
            { icon: true, note: "Built-in commerce" },
            { icon: true, note: "Requires WooCommerce" },
            { icon: true, note: "Commerce tier" },
            "~",
          ],
        },
        {
          label: "Bulk image processing",
          values: [true, true, "~", "~", "~"],
        },
      ],
    },
    {
      title: "PRICING & ACCESS",
      rows: [
        {
          label: "Free version on WordPress.org",
          values: [true, true, true, true, true],
        },
        {
          label: "Transparent public pricing",
          values: [true, true, true, true, true],
        },
      ],
    },
  ],
};
