export interface FooterLink {
  label: string;
  href: string;
  target?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerLinksData: FooterColumn[] = [
  {
    title: "PRODUCT",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Template library", href: "/#template_library" },
      { label: "Layouts", href: "/#gallery_layouts" },
    ],
  },
  {
    title: "COMPARE",
    links: [
      { label: "vs other plugins", href: "/#plugin-comparison" },
      { label: "Free vs Pro", href: "/pricing/#see-all-features" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      {
        label: "Support forum",
        href: "https://wordpress.org/support/plugin/regallery/",
        target: "_blank",
      },
      {
        label: "Blog",
        href: "https://regallery.team/core/blog/",
        target: "_blank",
      },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Contact", href: "/#support" },
      {
        label: "Terms & Conditions",
        href: "https://regallery.team/core/terms-conditions/",
        target: "_blank",
      },
      {
        label: "Privacy Policy",
        href: "https://regallery.team/core/privacy-policy/",
        target: "_blank",
      },
    ],
  },
];
