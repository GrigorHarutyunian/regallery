import ReviewDTO from "../../types/ReviewDTO";
import "./Review.css";
import Rating from "@mui/material/Rating";

const ReviewCards: React.FC<ReviewDTO> = ({
  title,
  text,
  author,
  img,
  seeMore,
}) => {
  return (
    <div className="review-card">
      <div className="review-card__icon">
        <img src={img} />
      </div>
      <div className="autorr">
        <div className="review-card__text-container">
          <div className="section-text__title-small review__title">{title}</div>
          <div className="section-text__desc review__text">
            {text}{" "}
            <a style={{ color: "#0e4a70" }} href={seeMore} target="__blank">
              see more
            </a>
          </div>
        </div>

        <div className="review-card__author">
          <Rating
            size="medium"
            className="stars"
            name="read-only"
            value={5}
            readOnly
          />
          <div className="review-card__author__name">Author : {author}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
