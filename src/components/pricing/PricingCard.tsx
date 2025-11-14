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
  const saveBadgeType = discount && discount >= 30 ? "amount" : "percent";
  const discountPrice =
    typeof price === "number" && discount
      ? Math.round((price - (Math.round(price) * discount) / 100) * 100) / 100
      : undefined;
  const [main, cents] = discountPrice
    ? discountPrice.toString().split(".")
    : price.toString().split(".");
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
        {discountPrice ? (
          <span className="canceled-price">
            <div className="remove_line" />
            {currency}
            {price}
          </span>
        ) : null}
        <div className="pricing-card__title">
          {currency ? <span className="currency">{currency}</span> : null}
          {main ? <span>{main}</span> : null}
          {cents ? <span className="cents"> .{cents}</span> : null}
        </div>
        <div className="pricing-card__duration">{duration}</div>

        {discountPrice && typeof price === "number" ? (
          <div className="parent_saved_money">
            <div className="saved_money_div">
              <span className="saved_money">
                Save{" "}
                {saveBadgeType === "amount"
                  ? `${currency}${Math.round(price - discountPrice)}`
                  : `${discount}%`}
              </span>
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
