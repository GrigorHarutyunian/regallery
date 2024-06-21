import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Services from "./components/services/Services";
// import Pricing from "./components/pricing/Pricing";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Faq />
        {/* <Pricing /> */} <Download />
      </main>
      <Footer />
    </>
  );
};

export default App;
