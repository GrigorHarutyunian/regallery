import PricingDTO from "../../types/PricingDTO";
import { useProVersionActivatorContext } from "../../contexts/ProVersionActivatorModalContext";
import CustomButton from "../../common-components/custom-button/CustomButton";

const PricingCard: React.FC<PricingDTO> = ({
  id,
  price,
  currency,
  text,
  buttonText,
  advantages,
  canceledPrice,
  duration,
  savedMoney,
  title,
  href,
}) => {
  const [main, cents] = price.toString().split('.');
  const { openPaymentModal } = useProVersionActivatorContext();

  return (
    <div className="pricing-card">
      <div className="pricing-card__header">
        <span className="pricing-card__subtitle">{title}</span>
        {canceledPrice ? (
          <span className="canceled-price">
            <div className="remove_line" />
            {canceledPrice}
          </span>
        ) : null}
        <div className="pricing-card__title">
          {currency ? <span className="currency">{currency}</span> : null}
          {main ? <span>{main}</span> : null}
          {cents ? <span className="cents"> .{cents}</span> : null}
        </div>
        <div className="pricing-card__duration">{duration}</div>

        {savedMoney ? (
          <div className="parent_saved_money">
            <div className="saved_money_div">
              <span className="saved_money">Save {savedMoney}</span>
            </div>
          </div>
        ) : null}

        <p className="section-text__desc pricing__text">{text}</p>
      </div>

      {href ? (
          <>
            <a target={"_blank"} href={href}>
              <div className="pricing-card__btn pricing-card__btn_starter">
                {buttonText}
              </div>
            </a>
          </>
      ) : (
          <CustomButton
              handleClick={() => openPaymentModal(id)}
              className="pricing-card__btn"
          >
            {buttonText}
          </CustomButton>
      )}
      <ul className="pricing-card__features">
        {advantages.map((val, id) => {
          return (
              <li className="pricing-card__features__list" key={id}>
                {val}
              </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PricingCard;
