import { useEffect, useState } from "react";
import "./App.css";
import Faq from "./components/faq/Faq";
import { homeFaqData } from "./components/faq/home-faq-data";
import { pricingFaqData } from "./components/faq/pricing-faq-data";
import ItemsSection from "./common-components/common-items/ItemsSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import PageBuilder from "./components/page-builder/PageBuilder";
import Navbar from "./components/navbar/Navbar";
import Review from "./components/reviews/Review";
import Support from "./components/support/Support";
import Pricing from "./components/pricing/Pricing";
import PricingValueSection from "./components/pricing/PricingValueSection";
import TopBanner from "./components/TopBanner/TopBanner";
import Demo from "./components/demo/Demo";
import Templates from "./components/demo/Templates";
import InteractiveAIIcon from "./components/interactive-aI-icon/InteractiveAIIcon";
import { DemoProvider } from "./contexts/DemoContext";
import { WindowWidthProvider } from "./contexts/WindowWidthContext";
import addScriptsToBody from "./common-components/addScriptsToBody";
import Section from "./common-components/common-section/Section";
import scrollToTarget from "./common-components/scrollToTarget";
import HoverEffectsSection from "./components/hover-effects-section/HoverEffectsSection";
import { ProVersionActivatorProvider } from "./contexts/ProVersionActivatorModalContext";
import { TrialModalProvider } from "./contexts/TrialModalContext";
import ProVersionActivator from "./components/pro-version-activator/ProVersionActivator";
import TrialModal from "./components/modals/TrialModal/TrialModal";
import Sale from "./components/sale-banner/SaleBanner";
import PlansComparisonTable from "./components/plans-comparison-table/PlansComparisonTable";
import PricingSupport from "./components/support/PricingSupport";
import { featuresData1, featuresData2 } from "./data/features-data";
import studioData from "./data/studio-data";
import infoData from "./data/info-data";
import aiData from "./data/ai-data";
import hoverData from "./data/hover-data.tsx";
import builderData from "./data/builder-data";
import ResponsiveTemplate from "./components/demo/ResponsiveTemplate";
import LightboxShowcase from "./components/demo/LightboxShowcase";
import { BillingPeriod } from "./types/PricingDTO";

const PRICING_HASH = "#pricing";

const getCurrentPath = () => {
  if (window.location.hash === PRICING_HASH) {
    window.history.replaceState(null, "", "/pricing");

    return "/pricing";
  }

  const normalizedPath = window.location.pathname.replace(/\/+$/, "");

  return normalizedPath || "/";
};

const scrollToCurrentLocation = () => {
  if (window.location.hash) {
    scrollToTarget(window.location.hash);
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

interface PricingContentProps {
  billingPeriod: BillingPeriod;
  setBillingPeriod: (period: BillingPeriod) => void;
}

const PricingContent: React.FC<PricingContentProps> = ({
  billingPeriod,
  setBillingPeriod,
}) => (
  <>
    <Pricing
      billingPeriod={billingPeriod}
      setBillingPeriod={setBillingPeriod}
    />
    <PricingValueSection />
    <Faq data={pricingFaqData} title="Pricing Questions" />
    <PlansComparisonTable
      billingPeriod={billingPeriod}
      setBillingPeriod={setBillingPeriod}
    />
    <PricingSupport />
  </>
);

const App: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  useEffect(() => {
    const container = document.querySelector(
      ".demo_live_container",
    ) as HTMLElement;
    const eventTypes = [
      "scroll",
      "mousemove",
      "click",
      "keydown",
      "wheel",
      "touchmove",
      "touchend",
    ];
    let scriptsLoaded = false;

    const addScriptsOnce = () => {
      // Check again in case scripts got added externally
      const alreadyLoaded =
        document.getElementById("reacg_thumbnails-js") ||
        document.getElementById("reacg_thumbnails-js-extra");
      if (!scriptsLoaded && !alreadyLoaded) {
        scriptsLoaded = true;
        addScriptsToBody();
      }
    };

    const handleInitialInteraction = () => {
      eventTypes.forEach((event) => {
        window.removeEventListener(event, handleInitialInteraction);
      });
      addScriptsOnce();
    };

    // Attach user interaction events
    eventTypes.forEach((event) => {
      window.addEventListener(event, handleInitialInteraction, {
        passive: true,
      });
    });

    // Run immediately if hash is present
    if (location.hash && !scriptsLoaded) {
      addScriptsOnce();

      if (!container || container.offsetHeight > 320) {
        scrollToTarget(location.hash);
      } else {
        const intervalId = setInterval(() => {
          if (container?.offsetHeight > 320) {
            clearInterval(intervalId);
            scrollToTarget(location.hash);
          }
        }, 100);
      }
    }

    return () => {
      eventTypes.forEach((event) => {
        window.removeEventListener(event, handleInitialInteraction);
      });
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getCurrentPath());
      window.setTimeout(scrollToCurrentLocation, 0);
    };

    const handleInternalLinkClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest("a");
      const href = anchor?.getAttribute("href");

      if (
        !anchor ||
        !href ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        (anchor.target && anchor.target !== "_self")
      ) {
        return;
      }

      const targetUrl = new URL(href, window.location.href);

      if (targetUrl.origin !== window.location.origin) return;

      event.preventDefault();

      if (targetUrl.hash === PRICING_HASH) {
        window.history.pushState(null, "", "/pricing");
        handleLocationChange();

        return;
      }

      if (
        targetUrl.pathname !== window.location.pathname ||
        targetUrl.search !== window.location.search ||
        targetUrl.hash !== window.location.hash
      ) {
        window.history.pushState(
          null,
          "",
          `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`,
        );
      }

      handleLocationChange();
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    document.addEventListener("click", handleInternalLinkClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      document.removeEventListener("click", handleInternalLinkClick);
    };
  }, []);

  const isPricingPage = currentPath === "/pricing";

  return (
    <DemoProvider>
      <WindowWidthProvider>
        <ProVersionActivatorProvider>
          <TrialModalProvider>
            <Navbar />
            <TopBanner />
            <TrialModal />
            <main
              className={`${isPricingPage ? "pricing-page" : ""} ${
                localStorage.getItem("topBannerOpen") ? "closed-banner" : ""
              }`.trim()}
            >
              {isPricingPage ? (
                <PricingContent
                  billingPeriod={billingPeriod}
                  setBillingPeriod={setBillingPeriod}
                />
              ) : (
                <>
                  <Hero />
                  <Demo />
                  <Section data={aiData} />
                  <Templates />
                  <ItemsSection data={featuresData1} />
                  <Section data={infoData} />
                  <LightboxShowcase />
                  <ItemsSection data={featuresData2} />
                  <HoverEffectsSection data={hoverData} />
                  <ResponsiveTemplate />
                  <Section data={studioData} />
                  <PageBuilder data={builderData} />
                  <Review />
                  <Faq data={homeFaqData} />
                  <Support />
                </>
              )}
            </main>
            <Footer />
            <ProVersionActivator />
            <Sale />
          </TrialModalProvider>
        </ProVersionActivatorProvider>
        <InteractiveAIIcon />
      </WindowWidthProvider>
    </DemoProvider>
  );
};

export default App;
