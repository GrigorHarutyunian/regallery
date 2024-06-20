import { Row, Container } from "react-bootstrap";
import featuresData from "./features-data.json";

import "./Features.css";
import FeaturesBox from "./FeaturesBox";

const Features: React.FC = () => {
  return (
    <section id="features">
      <Container>
        <Row>
          <div className="section-text">
            <div className="section-text__title">Features</div>
            <div className="features">
              {featuresData.map((val: any) => (
                <FeaturesBox
                  key={val.id}
                  title={val.title}
                  description={val.description}
                />
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
