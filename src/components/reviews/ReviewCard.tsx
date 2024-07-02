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
  seeMore,
}) => {
  return (
    <motion.div className="review-card">
      <div className="review-card__icon">
        <a
          style={{ color: "#0e4a70", textDecoration: "none" }}
          href={seeMore}
          target="__blank"
        >
          <img src={img} />
        </a>
      </div>
      <div className="autorr">
        <div className="review-card__text-container">
          <div className="section-text__title-small review__title">
            <a
              style={{ color: "#0e4a70", textDecoration: "none" }}
              href={seeMore}
              target="__blank"
            >
              {title}
            </a>
          </div>
          <div className="section-text__desc review__text">{text} </div>
        </div>

        <a
          style={{ color: "#0e4a70", textDecoration: "none" }}
          href={seeMore}
          target="__blank"
        >
          <div className="review-card__author">
            <Rating
              size="medium"
              className="stars"
              name="read-only"
              value={5}
              readOnly
              style={{ color: "#FDC120" }}
            />
            <div className="review-card__author__name">Author : {author}</div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ReviewCards;
