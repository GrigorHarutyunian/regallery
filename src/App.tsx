import { useEffect } from "react";
import "./App.css";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Review from "./components/reviews/Review";
import Support from "./components/support/Support";
// import Views from "./components/views/Views";
import Pricing from "./components/pricing/Pricing";
import Banner from "./components/banner/Banner";
import AboutMobileResponsiveness from "./components/about-mobile-responsiveness/AboutMobileResponsiveness";
import Demo from "./components/demo/Demo";
import { DemoProvider } from "./contexts/DemoContext";
import { WindowWidthProvider } from "./contexts/WindowWidthContext";
import addScriptsToBody from "./common-components/addScriptsToBody";

const App: React.FC = () => {
  const scrollToTarget = () => {
    const hash = location.hash;
    if (!hash) return;
    const targetElement = document.querySelector(`${location.hash}`);
    const offset = -70; // Negative to leave 70px space from top

    const top =
      targetElement!.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = document.querySelector(
      ".demo_live_conteiner"
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

      if (container?.offsetHeight > 0) {
        scrollToTarget();
      } else {
        const intervalId = setInterval(() => {
          if (container?.offsetHeight > 0) {
            scrollToTarget();
            clearInterval(intervalId);
          }
        }, 1000);
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
        <Navbar />
        <Banner />
        <main
          className={localStorage.getItem("bannerOpen") ? "closed-banner" : ""}
        >
          <Hero />
          <Demo />
          <Info />
          <Features />
          <AboutMobileResponsiveness />

          <Review />
          <Faq />
          <Pricing />

          <Support />
        </main>
        <Footer />
      </WindowWidthProvider>
    </DemoProvider>
  );
};

export default App;
