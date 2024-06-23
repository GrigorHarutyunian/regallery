import "./Review.css";
import reviewData from "./review-data";
import ReviewDTO from "../../types/ReviewDTO";
import ReviewCards from "./ReviewCard";
const Services: React.FC = () => {
  return (
    <section id="review">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="section-text">
          <div className="section-text__title-centered">
            What օur clients are saying
          </div>
          <div className="review-cards">
            {reviewData.map((val: ReviewDTO) => {
              return (
                <ReviewCards
                  title={val.title}
                  text={val.text}
                  author={val.author}
                  img={val.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
