import "./Review.css";
import reviewData from "./review-data";
import ReviewDTO from "../../types/ReviewDTO";
import ReviewCards from "./ReviewCard";
import { motion } from "framer-motion";
// import animation from "../../assets/animations/framer-motion-setings";
const Services: React.FC = () => {
  return (
    <section id="review">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="section-text">
          <h2 className="section-text__title-centered">
            What our clients are saying
          </h2>
          <motion.div className="review-cards">
            {reviewData.map((val: ReviewDTO) => {
              return (
                <ReviewCards
                  key={val.id}
                  title={val.title}
                  text={val.text}
                  author={val.author}
                  img={val.img}
                  seeMore={val.seeMore}
                  id={val.id}
                  alt={val.alt}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
