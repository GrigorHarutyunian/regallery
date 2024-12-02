import PricingDTO from "../../types/PricingDTO";
const PricingCard: React.FC<PricingDTO> = ({
  price,
  text,
  advantages,
  canceledprice,
  duration,
  savedmoney,
}) => {
  return (
    <div className="pricing-card">
      <div className="pricing-card__header">
        <span className="pricing-card__subtitle">{duration}</span>
        {
          <span className="canceled-price">
            {canceledprice && <div className="remov_line"></div>}
            {canceledprice}
          </span>
        }
        <div className="pricing-card__title">{price}</div>

        <div className="parent_saved_money">
          {savedmoney && (
            <div className="saved_money_div">
              <span className="saved_money">Save {savedmoney}</span>
            </div>
          )}
        </div>

        <p className="section-text__desc pricing__text">{text}</p>
      </div>

      <div className="pricing-card__btn">GET STARTED</div>

      <ul className="pricing-card__features">
        {advantages.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  );
};
export default PricingCard;
