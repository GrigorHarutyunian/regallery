import ReviewDTO from "../../types/ReviewDTO";
import "./Review.css";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";

const ReviewCards: React.FC<ReviewDTO> = ({
  title,
  text,
  author,
  seeMore,
  id,
}) => {
  let cutText = "Thank you for a great plugin!";
  if (id === 1) {
    cutText = "The user interface is very intuitive which is a big plus";
  } else if (id === 2) {
    cutText =
      "On top of that, the development team is very friendly and very quick to help and answer emails.";
  }
  return (
    <motion.div className="review-card">
      <div className="review-card__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
          width="41"
          height={"100%"}
        >
          <path
            fill="#0e4a70"
            d="M0,8v6H7a5.006,5.006,0,0,1-5,5v3a8.009,8.009,0,0,0,8-8V4H4A4,4,0,0,0,0,8Z"
          />
          <path
            fill="#0e4a70"
            d="M18,4a4,4,0,0,0-4,4v6h7a5.006,5.006,0,0,1-5,5v3a8.009,8.009,0,0,0,8-8V4Z"
          />
        </svg>
      </div>
      <div className={`author`}>
        <div className="review-card__text-container">
          <a href={seeMore} target="_blank">
            <h3 className="section-text__title-small review__title">{title}</h3>
          </a>
          <a href={seeMore} target="_blank">
            <p className="section-text__desc review__text">
              {text.split(cutText)[0]}
              <span className="read_more_str">Read more...</span>
            </p>
          </a>
        </div>

        <div className={`review-card__author`}>
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
