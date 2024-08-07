import ReviewDTO from "../../types/ReviewDTO";
import "./Review.css";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

const ReviewCards: React.FC<ReviewDTO> = ({
  title,
  text,
  author,
  img,
  alt,
}) => {
  return (
    <motion.div className="review-card">
      <div className="review-card__icon">
        <img height={100} width={100} src={img} alt={alt} />
      </div>
      <div className="author">
        <div className="review-card__text-container">
          <h3 className="section-text__title-small review__title">{title}</h3>
          <p className="section-text__desc review__text">{text} </p>
        </div>

        <div className="review-card__author">
          <Rating
            size="medium"
            className="stars"
            name="read-only"
            value={5}
            readOnly
            style={{ color: "#FDC120" }}
          />
          <p className="review-card__author__name">Author : {author}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCards;
