import "./Pricing.css";
import pricingData from "./pricing-data";
import PricingCard from "./PricingCard";
import PricingDTO from "../../types/PricingDTO";
const Pricing: React.FC = () => {
  return (
    <section id="pricing">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="section-text_cards">
          <h2 className="section-text__title-centered ">Pre-built templates</h2>

          <div className="pricing-cards">
            {pricingData.map((val: PricingDTO) => {
              return (
                <PricingCard
                  key={val.id}
                  text={val.text}
                  price={val.price}
                  advantages={val.advantages}
                  canceledprice={val?.canceledprice}
                  duration={val.duration}
                  savedmoney={val.savedmoney}
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
