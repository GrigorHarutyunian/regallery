import "./Pricing.css";
import pricingData from "./pricing-data";
import PricingCard from "./PricingCard";
import PricingDTO from "../../types/PricingDTO";
import { pricing__guarantee_icon } from "../../assets/icons/pricinngs-icons/pricing-iconst";
const Pricing: React.FC = () => {
  return (
    <section id="pricing">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="section-text_cards">
          <h2 className="section-text__title-centered">Unlock more features</h2>
          <div className="pricing__cards">
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
                  planType={val.planType}
                  advantages={val.advantages}
                  duration={val.duration}
                  title={val.title}
                  href={val.href}
                  mostPopular={val.mostPopular}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="pricing__guarantee">
        <div className="pricing__guarantee-badge">
          {pricing__guarantee_icon}
        </div>
        <div className="pricing__guarantee-text">
          <h3 className="pricing__guarantee-title">
            100% No-Risk Money Back Guarantee!
          </h3>

          <p className="pricing__guarantee-description">
            You are fully protected by our 100% No-Risk-Double-Guarantee. If you
            don’t like the products over the next 14 days, then we will happily
            refund 100% of your money. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
