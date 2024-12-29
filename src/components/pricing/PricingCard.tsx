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
  const handleCopyClick = () => {
    const email = "regalleryteam@gmail.com";
    navigator.clipboard.writeText(email);
  };
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

      {title === "Starter" ? (
        <>
          <a target={"_blank"} href={href}>
            <div className="pricing-card__btn">GET STARTED</div>
          </a>
          <div className="pricing-card__btn_copy"></div>
        </>
      ) : (
        <>
          <a
            style={{ position: "relative" }}
            href={`mailto: regalleryteam@gmail.com?subject=I’m%20interested%20in%20upgrading%20to%20the%20${title}%20plan&body=I’m%20interested%20in%20upgrading%20my%20plan.%20Please%20reach%20out%20to%20me%20with%20the%20next%20steps.%20Thank%20you.`}
            target="_top"
          >
            <div className="pricing-card__btn">EMAIL US TO GET STARTED</div>
          </a>
          <div className="pricing-card__btn_copy">
            <span>
              Or contact us at regalleryteam@gmail.com{" "}
              <svg
                onClick={handleCopyClick}
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="12"
                height="12"
              >
                <path
                  fill={"#39465c"}
                  d="m19,0h-6c-2.757,0-5,2.243-5,5v6c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm3,11c0,1.654-1.346,3-3,3h-6c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v6Zm-6,8c0,2.757-2.243,5-5,5h-6c-2.757,0-5-2.243-5-5v-6c0-2.757,2.243-5,5-5,.553,0,1,.448,1,1s-.447,1-1,1c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3,0-.552.447-1,1-1s1,.448,1,1Z"
                />
              </svg>
            </span>
          </div>
        </>
      )}

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
