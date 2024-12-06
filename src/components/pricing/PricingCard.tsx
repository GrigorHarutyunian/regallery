import PricingDTO from "../../types/PricingDTO";
const PricingCard: React.FC<PricingDTO> = ({
  price,
  text,
  advantages,
  canceledprice,
  duration,
  savedmoney,
  title,
  href,
}) => {
  return (
    <div className="pricing-card">
      <div className="pricing-card__header">
        <span className="pricing-card__subtitle">{title}</span>
        {
          <span className="canceled-price">
            {canceledprice && <div className="remov_line"></div>}
            {canceledprice}
          </span>
        }
        <div className="pricing-card__title">{price}</div>
        <div className="pricing-card__duration">{duration}</div>

        <div className="parent_saved_money">
          {savedmoney && (
            <div className="saved_money_div">
              <span className="saved_money">Save {savedmoney}</span>
            </div>
          )}
        </div>

        <p className="section-text__desc pricing__text">{text}</p>
      </div>
      <a target={price === "Free" ? "_blank" : "_self"} href={href}>
        <div className="pricing-card__btn">GET STARTED</div>
      </a>

      <ul className="pricing-card__features">
        {advantages.map((val, id) => {
          return (
            <li
              className={`pricing-card__features__list  ${
                id === 2 && `bold__list`
              } `}
              key={id}
            >
              {val}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PricingCard;
