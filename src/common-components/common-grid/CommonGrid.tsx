import { Row, Container } from "react-bootstrap";
import FeaturesAndViewsDTO from "../../types/FeaturesAndViewsDTO";
("../../src/types/FeaturesAndViewsDTO");
import CommonBoxForGrid from "./CommonBoxForGrid";
import "./CommonGrid.css";
import "../../components/reviews/Review.css";
import { motion } from "framer-motion";

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
          <div className="section-text_cards">
            <h2 className="section-text__title-centered dark">{title}</h2>
            <motion.div className={gridClassname}>
              {data.map((val: any) => (
                <CommonBoxForGrid
                  demoLink={val.demoLink}
                  key={val.id}
                  title={val.title}
                  description={val.description}
                  path={val.path}
                  globalTitle={title}
                  img={val.img}
                />
              ))}
            </motion.div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CommonGrid;
