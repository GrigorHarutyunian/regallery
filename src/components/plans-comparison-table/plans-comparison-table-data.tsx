import { IPlansComparisonTableFeatureDTO } from "../../types/PlansComparisonDTO ";
import { allTemplates } from "../views/views-data-subMenu";

export const plansComparisonCoreFeatures: IPlansComparisonTableFeatureDTO[] = [
  {
    id: "supported-sites",
    label: "Supported Sites",
    values: [<b>1 Site</b>, <b>1 Site</b>, <b>5 Sites</b>, <b>25 Sites</b>],
  },
  {
    id: "updates",
    label: "Updates",
    values: [true, true, true, true],
  },
  {
    id: "unlimited-galleries",
    label: "Unlimited Galleries",
    values: [true, true, true, true],
  },
  {
    id: "unlimited-images",
    label: "Unlimited Images",
    values: [true, true, true, true],
  },
  {
    id: "support",
    label: "Support on Public Forums",
    values: [true, true, true, true],
    href: "https://wordpress.org/support/plugin/regallery/",
  },
  {
    id: "pro-support",
    label: "24/7 PRO Support",
    values: [false, false, true, true],
  },
  {
    id: "advanced-customization",
    label: "Advanced Customization",
    values: [false, false, true, true],
  },
];

export const plansComparisonGalleryLayouts: IPlansComparisonTableFeatureDTO[] =
  [
    {
      id: "layout-grid",
      label: "Grid",
      values: [true, true, true, true],
      href: "https://regallery.team/core/grid-view/",
    },
    {
      id: "layout-mosaic",
      label: "Mosaic",
      values: [true, true, true, true],
      href: "https://regallery.team/core/mosaic-view/",
    },
    {
      id: "layout-masonry",
      label: "Masonry",
      values: [true, true, true, true],
      href: "https://regallery.team/core/masonry-view/",
    },
    {
      id: "layout-justified",
      label: "Justified",
      values: [true, true, true, true],
      href: "https://regallery.team/core/justified-view/",
    },
    {
      id: "layout-slider",
      label: "Slider",
      values: [true, true, true, true],
      href: "https://regallery.team/core/slider-view/",
    },
    {
      id: "layout-cube",
      label: "Cube",
      values: [true, true, true, true],
      href: "https://regallery.team/core/cube-view/",
    },
    {
      id: "layout-carousel",
      label: "Carousel",
      values: [true, true, true, true],
      href: "https://regallery.team/core/carousel-view/",
    },
    {
      id: "layout-cards",
      label: "Cards",
      values: [true, true, true, true],
      href: "https://regallery.team/core/cards-view/",
    },
    {
      id: "layout-blog",
      label: "Blog",
      values: [true, true, true, true],
      href: "https://regallery.team/core/blog-view/",
    },
  ];

export const plansComparisonPostsPages: IPlansComparisonTableFeatureDTO[] = [
  {
    id: "posts-manual-selection",
    label: "Manual Selection",
    values: [true, true, true, true],
  },
  {
    id: "posts-dynamic-galleries",
    label: "Dynamic Galleries",
    values: [true, true, true, true],
    href: "https://youtu.be/IQETfwbUKKg",
  },
  {
    id: "posts-filter-by-posts-pages",
    label: "Filter by Posts / Pages",
    values: [true, true, true, true],
  },
  {
    id: "posts-filter-by-taxonomy",
    label: "Filter by Taxonomy",
    values: [true, true, true, true],
  },
  {
    id: "posts-exclude-specific",
    label: "Exclude Specific Posts / Pages",
    values: [true, true, true, true],
  },
  {
    id: "posts-exclude-without-images",
    label: "Exclude Posts / Pages without Images",
    values: [true, true, true, true],
  },
];

export const plansComparisonWooCommerce: IPlansComparisonTableFeatureDTO[] = [
  {
    id: "woo-manual-selection",
    label: "Manual Selection",
    values: [false, true, true, true],
  },
  {
    id: "woo-dynamic-galleries",
    label: "Dynamic Galleries",
    values: [false, true, true, true],
  },
  {
    id: "woo-filter-by-products",
    label: "Filter by Products",
    values: [false, true, true, true],
  },
  {
    id: "woo-filter-by-taxonomy",
    label: "Filter by Taxonomy",
    values: [false, true, true, true],
  },
  {
    id: "woo-exclude-specific-products",
    label: "Exclude Specific Products",
    values: [false, true, true, true],
  },
  {
    id: "woo-exclude-without-images",
    label: "Exclude Products without Images",
    values: [false, true, true, true],
  },
];

export const plansComparisonTextMetadata: IPlansComparisonTableFeatureDTO[] = [
  {
    id: "text-title",
    label: "Title",
    values: [true, true, true, true],
    href: "https://youtu.be/p2LDwCibQhs",
  },
  {
    id: "text-caption",
    label: "Caption",
    values: [false, true, true, true],
  },
  {
    id: "text-description",
    label: "Description",
    values: [false, true, true, true],
  },
  {
    id: "text-product-price",
    label: "Product Price",
    values: [false, true, true, true],
  },
  {
    id: "text-exif",
    label: "Image EXIF",
    values: [true, true, true, true],
  },
  {
    id: "text-author",
    label: "Author",
    values: [true, true, true, true],
  },
  {
    id: "text-hover-options",
    label: "Hover Options",
    values: [true, true, true, true],
  },
  {
    id: "text-blend-mode",
    label: "Blend Mode",
    values: [false, true, true, true],
  },
];

export const plansComparisonTemplates: IPlansComparisonTableFeatureDTO[] =
  allTemplates.map((subItem, index) => ({
    id: `template-${index}`,
    label: subItem.title,
    values: [!subItem.pro, true, true, true],
    href: subItem.path,
  }));

export const plansComparisonLightbox: IPlansComparisonTableFeatureDTO[] = [
  {
    id: "lightbox-fullscreen",
    label: "Full-Screen Mode",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-custom-size",
    label: "Custom-sized Lightbox",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-animations",
    label: "Animations",
    values: [false, true, true, true],
  },
  {
    id: "lightbox-loop",
    label: "Loop",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-autoplay",
    label: "Autoplay",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-counter",
    label: "Counter",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-share-images",
    label: "Share Images",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-download-images",
    label: "Download Images",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-deeplinking",
    label: "Image Deeplinking",
    values: [true, true, true, true],
  },
  {
    id: "lightbox-filmstrip",
    label: "Filmstrip",
    values: [false, true, true, true],
  },
];

export const plansComparisonGeneralFeatures: IPlansComparisonTableFeatureDTO[] =
  [
    {
      id: "general-drag-drop-uploader",
      label: "Drag & Drop Uploader",
      values: [true, true, true, true],
    },
    {
      id: "general-image-click-actions",
      label: "Image Click Actions",
      values: [true, true, true, true],
      href: "https://youtu.be/u_AAWKQuaTA",
    },
    {
      id: "general-hover-effects",
      label: "Hover Effects",
      values: [true, true, true, true],
    },
    {
      id: "general-customizable-options",
      label: "Customizable Options",
      values: ["150+", "220+", "300+", "300+"],
    },
    {
      id: "general-sorting",
      label: "Sorting",
      values: [true, true, true, true],
    },
    {
      id: "general-filtering",
      label: "Filtering",
      values: [false, true, true, true],
    },
    {
      id: "general-paged-pagination",
      label: "Paged Pagination",
      values: [true, true, true, true],
      href: "https://youtu.be/SQawgaxwm1c",
    },
    {
      id: "general-load-more-button",
      label: "Load More Button",
      values: [true, true, true, true],
    },
    {
      id: "general-infinite-scroll",
      label: "Infinite Scroll",
      values: [true, true, true, true],
    },
    {
      id: "general-lazy-loading",
      label: "Lazy Loading",
      values: [true, true, true, true],
    },
    {
      id: "general-watermarking",
      label: "Watermarking",
      values: [false, true, true, true],
    },
    {
      id: "general-white-labeling",
      label: "White Labeling",
      values: [false, true, true, true],
    },
    {
      id: "general-responsive-galleries",
      label: "Responsive Galleries",
      values: [true, true, true, true],
    },
    {
      id: "general-drag-drop-sorting",
      label: "Drag & Drop Sorting",
      values: [true, true, true, true],
      href: "https://youtu.be/X7cvfWWo-UU",
    },
    {
      id: "general-retina-4k-support",
      label: "Retina and 4K Support",
      values: [true, true, true, true],
    },
    {
      id: "general-mobile-responsiveness",
      label: "Mobile Responsiveness",
      values: [true, true, true, true],
    },
    {
      id: "general-translation-localization",
      label: "Translation and Localization Support",
      values: [true, true, true, true],
    },
    {
      id: "general-video-galleries",
      label: "Video Galleries",
      values: [true, true, true, true],
    },
    {
      id: "general-mixed-galleries",
      label: "Mixed Galleries",
      values: [false, true, true, true],
    },
    {
      id: "general-seo-optimization",
      label: "SEO Optimization",
      values: [true, true, true, true],
    },
    {
      id: "general-real-time-preview",
      label: "Real Time Preview",
      values: [true, true, true, true],
    },
    {
      id: "general-templates-library",
      label: "Templates Library",
      values: ["5+", "40+", "40+", "40+"],
      href: "https://youtu.be/FVJbXOmu2TA",
    },
  ];

export const plansComparisonAITools: IPlansComparisonTableFeatureDTO[] = [
  {
    id: "ai-generations",
    label: "AI Generations",
    values: [false, "Up to 1000", "Up to 1500", "Unlimited"],
  },
  {
    id: "ai-generative-title",
    label: "Generative Title",
    values: [false, true, true, true],
    href: "https://youtu.be/z0bK6SP8jbg",
  },
  {
    id: "ai-generative-alt-text",
    label: "Generative Alt Text",
    values: [false, true, true, true],
    href: "https://youtu.be/z0bK6SP8jbg",
  },
  {
    id: "ai-generative-caption",
    label: "Generative Caption",
    values: [false, true, true, true],
    href: "https://youtu.be/z0bK6SP8jbg",
  },
  {
    id: "ai-generative-description",
    label: "Generative Description",
    values: [false, true, true, true],
    href: "https://youtu.be/z0bK6SP8jbg",
  },
];

export const plansComparisonBuilders: IPlansComparisonTableFeatureDTO[] = [
  {
    id: "builder-gutenberg",
    label: "Gutenberg Block",
    values: [true, true, true, true],
    href: "https://youtu.be/6AVPJ2fjaYs",
  },
  {
    id: "builder-elementor",
    label: "Elementor Widget",
    values: [true, true, true, true],
    href: "https://youtu.be/GedxyRxQ02A",
  },
  {
    id: "builder-buiver",
    label: "Buiver Builder Widget",
    values: [true, true, true, true],
    href: "https://youtu.be/A5U2ghLKYNg",
  },
  {
    id: "builder-divi",
    label: "Divi Module",
    values: [true, true, true, true],
    href: "https://youtu.be/Z69eZOoWJi0",
  },
  {
    id: "builder-bricks",
    label: "Bricks Widget",
    values: [true, true, true, true],
    href: "https://youtu.be/aiYdYAn1D_8",
  },
  {
    id: "builder-wpbakery",
    label: "WPBakery Page Builder Widget",
    values: [true, true, true, true],
    href: "https://youtu.be/FClpKpREzPQ",
  },
  {
    id: "builder-shortcode",
    label: "Shortcode for Gallery",
    values: [true, true, true, true],
  },
];
