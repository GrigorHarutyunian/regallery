import PricingDTO from "../../types/PricingDTO";
import { useProVersionActivatorModal } from "../../contexts/ProVersionActivatorModalContext";

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
  const { handleOpenModal } = useProVersionActivatorModal();
  const { currency, main, cents } = price;

  return (
    <div className="pricing-card">
      <div className="pricing-card__header">
        <span className="pricing-card__subtitle">{title}</span>
        {canceledprice ? (
          <span className="canceled-price">
            {canceledprice ? <div className="remov_line" /> : null}
            {canceledprice}
          </span>
        ) : null}
        <div className="pricing-card__title">
          {currency ? <span className="currency">{currency}</span> : null}
          {main ? <span>{main}</span> : null}
          {cents ? <span className="cents"> .{cents}</span> : null}
        </div>
        <div className="pricing-card__duration">{duration}</div>

        {savedmoney ? (
          <div className="parent_saved_money">
            <div className="saved_money_div">
              <span className="saved_money">Save {savedmoney}</span>
            </div>
          </div>
        ) : null}

        <p className="section-text__desc pricing__text">{text}</p>
      </div>

      {title === "Starter" ? (
        <>
          <a target={"_blank"} href={href}>
            <div className="pricing-card__btn pricing-card__btn_starter">
              DOWNLOAD NOW
            </div>
          </a>
          <div className="pricing-card__btn_copy"></div>
        </>
      ) : (
        <>
          <div
            onClick={() => handleOpenModal("freeTrial")}
            className="pricing-card__btn"
          >
            START FREE TRIAL FOR 7 DAYS
          </div>
          <div className="pricing-card__btn_copy">
            <span>No credit card required. </span>
          </div>
        </>
      )}

      <ul className="pricing-card__features">
        {advantages.map((val, id) => {
          const boldText =
            typeof val === "string" && val.includes("1 Site")
              ? "1 Site"
              : typeof val === "string" && val.includes("5 Sites")
              ? "5 Sites"
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
