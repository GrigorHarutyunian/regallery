import { useEffect } from "react";
import "./App.css";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Builder from "./components/builder/Builder";
import Navbar from "./components/navbar/Navbar";
import Review from "./components/reviews/Review";
import Support from "./components/support/Support";
// import Views from "./components/views/Views";
import Pricing from "./components/pricing/Pricing";
import TopBanner from "./components/TopBanner/TopBanner";
import AboutMobileResponsiveness from "./components/about-mobile-responsiveness/AboutMobileResponsiveness";
import Demo from "./components/demo/Demo";
import InteractiveAIIcon from "./components/interactive-aI-icon/InteractiveAIIcon";
import { DemoProvider } from "./contexts/DemoContext";
import { WindowWidthProvider } from "./contexts/WindowWidthContext";
import addScriptsToBody from "./common-components/addScriptsToBody";
import scrollToTarget from "./common-components/scrollToTarget";
import { ProVersionActivatorProvider } from "./contexts/ProVersionActivatorModalContext";
import ProVersionActivator from "./components/pro-version-activator/ProVersionActivator";
import Sale from "./components/sale-banner/SaleBanner";
import PlansComparisonTable from "./components/plans-comparison-table/PlansComparisonTable";
const App: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector(
      ".demo_live_container"
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

      if (container?.offsetHeight > 320) {
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
  return (
    <DemoProvider>
      <WindowWidthProvider>
        <ProVersionActivatorProvider>
          <Navbar />
          <TopBanner />
          <main
            className={
              localStorage.getItem("topBannerOpen") ? "closed-banner" : ""
            }
          >
            <Hero />
            <Demo />
            <Info />
            <Features />
            <Builder />
            <Review />
            <AboutMobileResponsiveness />
            <Pricing />
            <Faq />
            <PlansComparisonTable />
            <Support />
          </main>
          <Footer />
          <ProVersionActivator />
          <Sale />
        </ProVersionActivatorProvider>
        <InteractiveAIIcon />
      </WindowWidthProvider>
    </DemoProvider>
  );
};

export default App;
