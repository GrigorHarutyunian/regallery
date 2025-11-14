import "./Pricing.css";
import pricingData from "./pricing-data";
import PricingCard from "./PricingCard";
import PricingDTO from "../../types/PricingDTO";
const Pricing: React.FC = () => {
  return (
    <section id="pricing">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="section-text_cards">
          <h2 className="section-text__title-centered">Unlock more features</h2>
          <div className="pricing-cards">
            {Object.values(pricingData).map((val: PricingDTO) => {
              return (
                <PricingCard
                  key={val.id}
                  id={val.id}
                  text={val.text}
                  buttonText={val.buttonText}
                  price={val.price}
                  discount={val?.discount}
                  currency={val.currency}
                  advantages={val.advantages}
                  duration={val.duration}
                  title={val.title}
                  href={val.href}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
