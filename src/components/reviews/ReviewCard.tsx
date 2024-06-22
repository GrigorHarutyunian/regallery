import ReviewDTO from "../../types/ReviewDTO";
import "./Review.css";
const ReviewCards: React.FC<ReviewDTO> = ({ title, text, author }) => {
  return (
    <div className="review-card">
      <div className="review-card__icon"></div>
      <div className="review-card__text-container">
        <div className="section-text__title-small review__title">{title}</div>
        <div className="section-text__desc review__text">{text}</div>
      </div>
      <div className="review-card__author">Author : {author}</div>
    </div>
  );
};

export default ReviewCards;
