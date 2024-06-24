import { Row, Container } from "react-bootstrap";
import FeaturesAndViewsDTO from "../../types/FeaturesAndViewsDTO";
("../../src/types/FeaturesAndViewsDTO");
import CommonBoxForGrid from "./CommonBoxForGrid";
import "./CommonGrid.css";
import "../../components/reviews/Review.css";
const CommonGrid: React.FC<FeaturesAndViewsDTO> = ({
  sectionId,
  data,
  title,
  gridClassname,
}) => {
  return (
    <section id={sectionId}>
      <Container>
        <Row>
          <div className="section-text">
            <div className="section-text__title-centered dark">{title}</div>
            <div className={gridClassname}>
              {data.map((val: any) => (
                <CommonBoxForGrid
                  key={val.id}
                  title={val.title}
                  description={val.description}
                  className={val.className}
                />
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CommonGrid;
