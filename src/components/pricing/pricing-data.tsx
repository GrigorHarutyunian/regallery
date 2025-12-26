import { ai_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import { woo_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import { info_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import PricingDTO from "../../types/PricingDTO";

const pricingData: { [key: number]: PricingDTO } = {
  // 1: {
  //   id: 1,
  //   title: "Starter",
  //   href: "https://wordpress.org/plugins/regallery/",
  //   price: 0,
  //   text: "Easy Start for Beginners to Explore Galleries",
  //   buttonText: "DOWNLOAD NOW",
  //   advantages: [
  //     "Unlimited Galleries",
  //     "Unlimited Users",
  //     <>
  //       <strong className="bold__list">9</strong> Gallery Views
  //     </>,
  //     "Real-Time Preview",
  //     "Gutenberg Block Support",
  //     "Elementor Widget Integration",
  //     "Divi Builder Compatibility",
  //     "WPBakery Page Builder Available",
  //     "Beaver Builder Module Inclusion",
  //     "Bricks Builder Element Access",
  //     <>
  //       <strong className="bold__list">10+</strong> Pre-built Templates
  //     </>,
  //   ],
  // },
  2: {
    id: 2,
    title: "Basic",
    price: 29.99,
    currency: "$",
    planType: "monthly",
    // duration: "1 Year",
    text: "For Photographers & Creatives Using WordPress",
    buttonText: "BUY NOW",
    advantages: [
      <>
        Use on <strong className="bold__list">1 Site</strong>
      </>,
      <>
        9 Gallery Layouts
        <span
          className="info-icon"
          data-tooltip="Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, Cards, and Blog"
        >
          {info_icon}
        </span>
      </>,
      <>
        Compatibility with 6 Builders
        <span
          className="info-icon"
          data-tooltip="Gutenberg, Elementor, Divi Builder, WPBakery Page Builder, Beaver Builder, and Bricks Builder"
        >
          {info_icon}
        </span>
      </>,
      "40+ Pre-Designed Templates",
      "Templates Library",
      <>
        AI Automation Tools
        <span
          className="info-icon"
          data-tooltip="Generated Image Title, Description, Caption, and Alt Text"
        >
          {ai_icon}
        </span>
      </>,
      <>WooCommerce Gallery{woo_icon}</>,
      "Watermarking",
      "White Labeling",
      "24/7 PRO Support",
    ],
  },

  3: {
    id: 3,
    title: "Plus",
    price: 49.99,
    currency: "$",
    planType: "monthly",
    mostPopular: true,
    // duration: "1 Year",
    text: "For Businesses & Teams Building on WordPress",
    buttonText: "BUY NOW",
    advantages: [
      <>
        Use on <strong className="bold__list">5 Sites</strong>
      </>,
      <>
        9 Gallery Layouts
        <span
          className="info-icon"
          data-tooltip="Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, Cards, and Blog"
        >
          {info_icon}
        </span>
      </>,
      <>
        Compatibility with 6 Builders
        <span
          className="info-icon"
          data-tooltip="Gutenberg, Elementor, Divi Builder, WPBakery Page Builder, Beaver Builder, and Bricks Builder"
        >
          {info_icon}
        </span>
      </>,
      "40+ Pre-Designed Templates",
      "Templates Library",
      <>
        AI Automation Tools
        <span
          className="info-icon"
          data-tooltip="Generated Image Title, Description, Caption, and Alt Text"
        >
          {ai_icon}
        </span>
      </>,
      <>WooCommerce Gallery{woo_icon}</>,
      "Watermarking",
      "White Labeling",
      "24/7 PRO Support",
      "Advanced Customization",
    ],
  },
  4: {
    id: 4,
    title: "Agency",
    price: 99.99,
    currency: "$",
    planType: "monthly",
    // duration: "1 Year",
    text: "For WordPress Agencies & Enterprise Users",
    buttonText: "BUY NOW",
    advantages: [
      <>
        Use on <strong className="bold__list">25 Sites</strong>
      </>,
      <>
        9 Gallery Layouts
        <span
          className="info-icon"
          data-tooltip="Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, Cards, and Blog"
        >
          {info_icon}
        </span>
      </>,
      <>
        Compatibility with 6 Builders
        <span
          className="info-icon"
          data-tooltip="Gutenberg, Elementor, Divi Builder, WPBakery Page Builder, Beaver Builder, and Bricks Builder"
        >
          {info_icon}
        </span>
      </>,
      "40+ Pre-Designed Templates",
      "Templates Library",
      <>
        AI Automation Tools
        <span
          className="info-icon"
          data-tooltip="Generated Image Title, Description, Caption, and Alt Text"
        >
          {ai_icon}
        </span>
      </>,
      <>WooCommerce Gallery{woo_icon}</>,
      "Watermarking",
      "White Labeling",
      "24/7 PRO Support",
      "Advanced Customization",
    ],
  },
};

export default pricingData;
