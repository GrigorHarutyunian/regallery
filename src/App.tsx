import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Review from "./components/reviews/Review";
// import Pricing from "./components/pricing/Pricing";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";
import Views from "./components/views/Views";
import Info from "./components/info/Info";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Review />
        <Faq />
        <Info />
        <Views />
        <Support />
      </main>
      <Footer />
    </>
  );
};

export default App;
