import { useState } from "react";
import { getCurrentDiscount } from "../../utils/getCurrentDiscount";
import PricingDTO from "../../types/PricingDTO";
import { useProVersionActivatorContext } from "../../contexts/ProVersionActivatorModalContext";
import CustomButton from "../../common-components/custom-button/CustomButton";

const PricingCard: React.FC<PricingDTO> = ({
  id,
  price,
  discount,
  currency,
  planType,
  text,
  buttonText,
  advantages,
  duration,
  title,
  href,
}) => {
  if (typeof discount === "undefined") {
    discount = getCurrentDiscount();
  }
  var discountedPrice = discount
    ? Math.round((price - (Math.round(price) * discount) / 100) * 100) / 100
    : 0;

  const savedMoney =
    "Save " +
    (discount && discount > 50
      ? `${currency}${Math.round(price - discountedPrice)}`
      : `${discount}%`);

  const originalPrice =
    planType === "monthly" ? (price / 12).toFixed(2) : price.toFixed(2);
  const finalPrice =
    planType === "monthly"
      ? (discountedPrice / 12).toFixed(2)
      : discountedPrice.toFixed(2);
  const [main, cents] = discount
    ? finalPrice.toString().split(".")
    : originalPrice.toString().split(".");
  const [isLoading, setIsLoading] = useState(false);
  const { openStripeCheckout } = useProVersionActivatorContext();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      await openStripeCheckout(id);
    } catch (error) {
      console.error("Stripe checkout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="pricing-card">
      <div className="pricing-card__header">
        <span className="pricing-card__subtitle">{title}</span>
        {price === 0 ? (
          <span className="pricing-card__title">Free</span>
        ) : (
          <>
            {discount ? (
              <span className="canceled-price">
                <div className="remove_line" />
                {currency}
                {originalPrice}
              </span>
            ) : null}
            <div className="pricing-card__title">
              {currency ? <span className="currency">{currency}</span> : null}
              {main ? <span>{main}</span> : null}
              {cents ? <span className="cents"> .{cents}</span> : null}
            </div>
            {planType ? <div className="plan-type">/{planType}</div> : null}
            {duration ? (
              <div className="pricing-card__duration">{duration}</div>
            ) : null}
            {discount ? (
              <div className="parent_saved_money">
                <div className="saved_money_div">
                  <span className="saved_money">{savedMoney}</span>
                </div>
              </div>
            ) : null}
          </>
        )}
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
        <>
          <CustomButton
            handleClick={handleCheckout}
            className="pricing-card__btn"
            isLoading={isLoading}
          >
            {buttonText}
          </CustomButton>
          <div className="pricing-card__free-link">
            <a
              href="https://wordpress.org/plugins/regallery/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Or try the free version
            </a>
          </div>
        </>
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
