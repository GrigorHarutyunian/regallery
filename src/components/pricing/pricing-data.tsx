import { ai_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import { woo_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import { info_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import PricingDTO from "../../types/PricingDTO";
import { formatCountByStep } from "../../utils/formatCountByStep";
import { allTemplates } from "../views/views-data-subMenu";
import { dataDemo } from "../demo/demo-data";

const freeTemplatesCount = formatCountByStep(
  allTemplates.filter((template) => !template.pro).length,
);
const allTemplatesCount = formatCountByStep(allTemplates.length);
const allLayoutsCount = dataDemo.length;

const pricingData: { [key: number]: PricingDTO } = {
  1: {
    id: 1,
    title: "Free",
    href: "https://wordpress.org/plugins/regallery/",
    currency: "$",
    text: "Easy Start for Beginners to Explore Galleries",
    buttonText: "Free download",
    billingOptions: {
      yearly: {
        price: 0,
        planType: "monthly",
      },
      monthly: {
        price: 0,
        planType: "monthly",
      },
    },
    advantages: [
      "Unlimited Galleries",
      "Unlimited Users",
      <>
        <strong className="bold__list">{allLayoutsCount}</strong> Gallery
        Layouts
      </>,
      "Real-Time Preview",
      "Gutenberg Block Support",
      "Elementor Widget Integration",
      "Divi Builder Compatibility",
      "WPBakery Page Builder Available",
      "Beaver Builder Module Inclusion",
      "Bricks Builder Element Access",
      <>
        <strong className="bold__list">{freeTemplatesCount}</strong>{" "}
        Pre-Designed Templates
      </>,
    ],
  },
  2: {
    id: 2,
    title: "Basic",
    currency: "$",
    text: "For Photographers & Creatives Using WordPress",
    buttonText: "Get Basic",
    billingOptions: {
      yearly: {
        checkoutPlanId: 2,
        price: 29.99,
        planType: "monthly",
      },
      monthly: {
        checkoutPlanId: 5,
        price: 3.49,
        planType: "monthly",
      },
    },
    advantages: [
      <>
        Use on <strong className="bold__list">1 Site</strong>
      </>,
      <>
        {allLayoutsCount} Gallery Layouts
        <span
          className="info-icon"
          data-tooltip="Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, Cards, Blog, and Coverflow"
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
      `${allTemplatesCount} Pre-Designed Templates`,
      "Template Library",
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
    currency: "$",
    mostPopular: true,
    text: "For Businesses & Teams Building on WordPress",
    buttonText: "Get Plus",
    billingOptions: {
      yearly: {
        checkoutPlanId: 3,
        price: 49.99,
        planType: "monthly",
      },
      monthly: {
        checkoutPlanId: 6,
        price: 5.99,
        planType: "monthly",
      },
    },
    advantages: [
      <>
        Use on <strong className="bold__list">5 Sites</strong>
      </>,
      <>
        {allLayoutsCount} Gallery Layouts
        <span
          className="info-icon"
          data-tooltip="Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, Cards, Blog, and Coverflow"
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
      `${allTemplatesCount} Pre-Designed Templates`,
      "Template Library",
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
    currency: "$",
    text: "For Agencies Managing Multiple WordPress Sites",
    buttonText: "Get Agency",
    billingOptions: {
      yearly: {
        checkoutPlanId: 4,
        price: 99.99,
        planType: "monthly",
      },
      monthly: {
        checkoutPlanId: 7,
        price: 11.99,
        planType: "monthly",
      },
    },
    advantages: [
      <>
        Use on <strong className="bold__list">25 Sites</strong>
      </>,
      <>
        {allLayoutsCount} Gallery Layouts
        <span
          className="info-icon"
          data-tooltip="Grid, Mosaic, Masonry, Justified, Slider, Cube, Carousel, Cards, Blog, and Coverflow"
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
      `${allTemplatesCount} Pre-Designed Templates`,
      "Template Library",
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
      <>
        Re Gallery Studio<span className="badge">NEW!</span>
      </>,
    ],
  },
};

export default pricingData;
