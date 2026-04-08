import { useRef } from "react";
import "./Demo.css";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { dataLightboxShowcase } from "./lightboxShowcase-data";

const LightboxShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLOptionElement | null>(null);

  return (
    <section ref={sectionRef} id="lightbox_showcase" className="black-section">
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h2 className="section-text__title-centered">Lightbox</h2>
            <div className="demo_description lightbox_description">
              <motion.p>
                <span>
                  A lightbox that actually works the way you'd expect.
                  Full-screen, fast, mobile-ready - with AI captions and video
                  support included. Zero configuration needed.
                </span>
              </motion.p>
            </div>
            <div className="demo_live_container">
              {dataLightboxShowcase.map((val) => (
                <div
                  key={`${val.id}-${val.idView}`}
                  id={`reacg-root${val.idView}`}
                  className={`reacg-gallery reacg-preview`}
                  data-options-section="0"
                  data-gallery-id={`${val.idView}`}
                ></div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default LightboxShowcase;
