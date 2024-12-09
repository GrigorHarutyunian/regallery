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
        <div className="pricing-card__btn">Get Started</div>
      </a>

      <ul className="pricing-card__features">
        {advantages.map((val, id) => {
          const boldText = val.includes("1 Site")
            ? "1 Site"
            : val.includes("3 Sites")
            ? "3 Sites"
            : null;
          return (
            <li className={"pricing-card__features__list"} key={id}>
              {boldText ? (
                <>
                  {val.split(boldText)[0]}{" "}
                  <span className="bold__list">{boldText}</span>
                  {val.split(boldText)[1]}{" "}
                </>
              ) : (
                val
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PricingCard;
