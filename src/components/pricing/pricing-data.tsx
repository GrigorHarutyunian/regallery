import { ai_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import { woo_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
import PricingDTO from "../../types/PricingDTO";

const pricingData: { [key: number]: PricingDTO } = {
  // 1: {
  //   id: 1,
  //   title: "Starter",
  //   href: "https://wordpress.org/plugins/regallery/",
  //   price: "Free",
  //   text: "Easy Start for Beginners to Explore Galleries",
  //   buttonText: "DOWNLOAD NOW",
  //   advantages: [
  //     "Unlimited Galleries",
  //     "Unlimited Users",
  //     <>
  //       <strong className="bold__list">9</strong> Gallery Views
  //     </>,
  //     "Live Demo",
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
    duration: "1 year",
    text: "For Photographers & Creatives Using WordPress",
    buttonText: "BUY NOW",
    advantages: [
      "Unlimited Galleries",
      "Unlimited Users",
      <>
        Use on <strong className="bold__list">1 Site</strong>
      </>,
      <>
        <strong className="bold__list">9</strong> Gallery Views
      </>,
      "Live Demo",
      "Gutenberg Block Support",
      "Elementor Widget Integration",
      "Divi Builder Compatibility",
      "WPBakery Page Builder Available",
      "Beaver Builder Module Inclusion",
      "Bricks Builder Element Access",
      <>
        <strong className="bold__list">30+</strong> Pre-built Templates
      </>,
      "Pro Templates",
      "Style Editor",
      "Watermark",
      <>Generated Image Title{ai_icon}</>,
      <>Generated Image Description{ai_icon}</>,
      <>Generated Image Caption{ai_icon}</>,
      <>Generated Image Alt Text{ai_icon}</>,
      <>WooCommerce Products{woo_icon}</>,
      "1 Year Pro Support",
    ],
  },

  3: {
    id: 3,
    title: "Plus",
    price: 49.99,
    currency: "$",
    duration: "1 Year",
    text: "For Businesses & Teams Building on WordPress",
    buttonText: "BUY NOW",
    advantages: [
      "Unlimited Galleries",
      "Unlimited Users",
      <>
        Use on <strong className="bold__list">5 Sites</strong>
      </>,
      <>
        <strong className="bold__list">9</strong> Gallery Views
      </>,
      "Live Demo",
      "Gutenberg Block Support",
      "Elementor Widget Integration",
      "Divi Builder Compatibility",
      "WPBakery Page Builder Available",
      "Beaver Builder Module Inclusion",
      "Bricks Builder Element Access",
      <>
        <strong className="bold__list">30+</strong> Pre-built Templates
      </>,
      "Pro Templates",
      "Style Editor",
      "Watermark",
      <>Generated Image Title{ai_icon}</>,
      <>Generated Image Caption{ai_icon}</>,
      <>Generated Image Description{ai_icon}</>,
      <>Generated Image Alt Text{ai_icon}</>,
      <>WooCommerce Products{woo_icon}</>,
      "1 Year Pro Support",
      "1 Year Customizations",
    ],
  },
  4: {
    id: 4,
    title: "Agency",
    price: 99.99,
    currency: "$",
    duration: "1 Year",
    text: "For WordPress Agencies & Enterprise Users",
    buttonText: "BUY NOW",
    advantages: [
      "Unlimited Galleries",
      "Unlimited Users",
      <>
        Use on <strong className="bold__list">25 Sites</strong>
      </>,
      <>
        <strong className="bold__list">9</strong> Gallery Views
      </>,
      "Live Demo",
      "Gutenberg Block Support",
      "Elementor Widget Integration",
      "Divi Builder Compatibility",
      "WPBakery Page Builder Available",
      "Beaver Builder Module Inclusion",
      "Bricks Builder Element Access",
      <>
        <strong className="bold__list">30+</strong> Pre-built Templates
      </>,
      "Pro Templates",
      "Style Editor",
      "Watermark",
      <>Generated Image Title{ai_icon}</>,
      <>Generated Image Caption{ai_icon}</>,
      <>Generated Image Description{ai_icon}</>,
      <>Generated Image Alt Text{ai_icon}</>,
      <>WooCommerce Products{woo_icon}</>,
      "1 Year Pro Support",
      "1 Year Customizations",
    ],
  },
};

export default pricingData;
