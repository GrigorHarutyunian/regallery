import "./Review.css";
import reviewData from "./review-data";
import ReviewDTO from "../../types/ReviewDTO";
import ReviewCards from "./ReviewCard";
import { motion } from "framer-motion";
import { Row, Container } from "react-bootstrap";

const Services: React.FC = () => {
  return (
    <section id="review">
      <Container>
        <Row>
          <div className="section-text">
            <h2 className="section-text__title-centered">
              What our clients are saying
            </h2>
            <motion.div className="grid__3">
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
        </Row>
      </Container>
    </section>
  );
};

export default Services;
