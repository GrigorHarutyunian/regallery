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
import Views from "./components/views/Views";
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
      <main>
        <Hero />
        <Views />
        <Info />
        <Features />
        <Review />
       
        <Faq />
        <Support />
      </main>
      <Footer />
    </WindowWidthProvider>
  );
};

export default App;
