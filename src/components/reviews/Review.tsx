import "./Review.css";
import reviewData from "./review-data";
import ReviewDTO from "../../types/ReviewDTO";
import ReviewCards from "./ReviewCard";
import { motion } from "framer-motion";
import { Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 1025;
const MAX_VISIBLE_DOTS = 5;

const Services: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(() =>
    window.innerWidth < MOBILE_BREAKPOINT ? 1 : 3,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoSlideInterval = 10000;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < MOBILE_BREAKPOINT ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.floor(prev / itemsPerPage) * itemsPerPage);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(reviewData.length / itemsPerPage);
  const currentReviews = reviewData.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= reviewData.length ? 0 : prev + itemsPerPage,
    );
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const visibleDotCount = Math.min(totalPages, MAX_VISIBLE_DOTS);
  const visibleDotStart =
    totalPages > MAX_VISIBLE_DOTS
      ? Math.min(
          Math.floor(currentPage / MAX_VISIBLE_DOTS) * MAX_VISIBLE_DOTS,
          totalPages - MAX_VISIBLE_DOTS,
        )
      : 0;
  const visiblePages = Array.from({ length: visibleDotCount }, (_, index) => {
    return visibleDotStart + index;
  });

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (isHovering) return; // Don't auto-slide when hovering

    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isHovering, itemsPerPage]);
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
                  {visiblePages.map((pageIndex) => (
                    <button
                      key={pageIndex}
                      className={`dot ${pageIndex === currentPage ? "active" : ""}`}
                      onClick={() => setCurrentIndex(pageIndex * itemsPerPage)}
                      aria-label={`Go to page ${pageIndex + 1}`}
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
