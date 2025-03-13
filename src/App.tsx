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
import { WindowWidthProvider } from "./contexts/WindowWidthContext";

const App: React.FC = () => {
  useEffect(() => {
    if (location.hash) {
      window.location.replace(location.hash);
    }
  }, []);

  return (
    <WindowWidthProvider>
      <Navbar />
      <Banner />
      <main
        className={localStorage.getItem("bannerOpen") ? "closed-banner" : ""}
      >
        <Hero />
        <Demo />
        {/* <Views /> */}
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
  );
};

export default App;
