import { WindowWidthProvider } from "./contexts/WindowWidthContext";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Review from "./components/reviews/Review";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";
import Views from "./components/views/Views";
import Info from "./components/info/Info";
import Demo from "./components/demo/Demo";
const App: React.FC = () => {
  return (
    <WindowWidthProvider>
      <Navbar />
      <main>
        <Hero />
        <Views />
        <Demo />
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
