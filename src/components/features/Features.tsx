import { Row, Container } from "react-bootstrap";
import "./Features.css";
const Features: React.FC = () => {
  return (
    <section id="features">
      <Container>
        <Row>
          <div className="section-image-features">
            <img
              src="https://uhmnb.csb.app/images/features.svg"
              width="200"
              alt="features"
            />
          </div>
          <div className="section-text">
            <div className="section-text__title">Features</div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">Easy to Filter</div>
                <div className="section-text__desc">
                  Lorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Various Varieties
                </div>
                <div className="section-text__desc">
                  Lorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Customer Support
                </div>
                <div className="section-text__desc">
                  Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Work Assured</div>
                <div className="section-text__desc">
                  Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
