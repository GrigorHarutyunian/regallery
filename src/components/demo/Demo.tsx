import { useState, useRef, useEffect } from "react";
import { useDemoContext } from "../../contexts/DemoContext";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataDemo } from "./demo-data";
import { motion } from "framer-motion";
import { arrow_icon } from "../../assets/icons/arrow-icon";

const Demo: React.FC = () => {
  const { selecteIdFromMenu } = useDemoContext();
  const [selectedIdView, setSelectedIdView] = useState<number>(420);

  const sectionRef = useRef<HTMLOptionElement | null>(null);

  const selectedViewDesrciption = dataDemo.find(
    (val) => val.idView === selectedIdView,
  )?.description;
  const selectedValueDemoPath = dataDemo.find(
    (val) => val.idView === selectedIdView,
  )?.demoPath;

  const handleButtonClick = (idView: number) => {
    if (idView === selectedIdView) return;

    setSelectedIdView(idView);
  };

  useEffect(() => {
    if (!selecteIdFromMenu) return;

    setSelectedIdView(selecteIdFromMenu);
  }, [selecteIdFromMenu]);

  return (
    <section ref={sectionRef} id="gallery_layouts" className="black-section">
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h2 className="section-text__title-centered">Gallery Layouts</h2>
            <div className="demo_buttons_rows ">
              {dataDemo.map((val, index) => {
                return (
                  <button
                    onClick={() => handleButtonClick(val.idView)}
                    className={`demo_button${
                      selectedIdView === val.idView
                        ? " demo_selectedButton"
                        : ""
                    }`}
                    key={index}
                  >
                    <svg
                      height={70}
                      width={70}
                      id="Outline"
                      viewBox="0 0 24 24"
                    >
                      {val.path}
                    </svg>
                    <span>{val.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="demo_description">
              <motion.p>
                <span>{selectedViewDesrciption}</span>
                <a
                  href={selectedValueDemoPath}
                  target="_blank"
                  title="View more"
                  aria-label="View more"
                >
                  {arrow_icon}
                </a>
              </motion.p>
            </div>
            <div className={`demo_live_container`}>
              {dataDemo.map((val) => (
                <div
                  key={val.idView} // Ensure each div has a unique key
                  id={`reacg-root${val.idView}`}
                  className={`reacg-gallery reacg-preview ${
                    selectedIdView === val.idView ? "active" : "hidden"
                  }`} // Add "active" class to the selected div
                  data-options-section="0"
                  data-plugin-version="1.10.0"
                  data-gallery-timestamp=""
                  data-options-timestamp=""
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

export default Demo;
