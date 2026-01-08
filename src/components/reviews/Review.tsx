import "./Review.css";
import reviewData from "./review-data";
import ReviewDTO from "../../types/ReviewDTO";
import ReviewCards from "./ReviewCard";
import { motion } from "framer-motion";
import { Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const Services: React.FC = () => {
  const itemsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoSlideInterval = 10000;

  const totalPages = Math.ceil(reviewData.length / itemsPerPage);
  const currentReviews = reviewData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= reviewData.length ? 0 : prev + itemsPerPage
    );
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (isHovering) return; // Don't auto-slide when hovering

    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isHovering]);
  const showControls = reviewData.length > itemsPerPage;

  return (
    <section id="review">
      <Container>
        <Row>
          <div className="section-text_cards">
            <h2 className="section-text__title-centered">
              What our clients are saying
            </h2>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <motion.div className="grid grid__3">
                {currentReviews.map((val: ReviewDTO) => {
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
              {/* dot pagination replaces arrow controls */}
            </div>
            {showControls && (
              <div className="review-dots-container">
                <div className="dots">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === currentPage ? "active" : ""}`}
                      onClick={() => setCurrentIndex(i * itemsPerPage)}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
