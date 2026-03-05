import { useState, useRef, useEffect } from "react";
import { useDemoContext } from "../../contexts/DemoContext";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { dataTemplates } from "./templates-data";
import { arrow_icon } from "../../assets/icons/arrow-icon";

const Templates: React.FC = () => {
  const { selecteIdFromMenu } = useDemoContext();
  const [selectedIdView, setSelectedIdView] = useState<number>(1942);

  const sectionRef = useRef<HTMLOptionElement | null>(null);

  const handleButtonClick = (idView: number) => {
    if (idView === selectedIdView) return;

    setSelectedIdView(idView);
  };

  useEffect(() => {
    if (!selecteIdFromMenu) return;

    setSelectedIdView(selecteIdFromMenu);
  }, [selecteIdFromMenu]);

  return (
    <section ref={sectionRef} id="template_library" className="black-section">
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h2 className="section-text__title-centered">Template Library</h2>
            <div className="demo_description templates_description">
              <motion.p>
                <span>
                  Explore ready-made WordPress gallery layouts built with Re
                  Gallery’s 45+ pre-built templates.
                </span>
                <a
                  href={"https://regallery.team/core/demo/"}
                  target="_blank"
                  title="View more"
                  aria-label="View more"
                >
                  {arrow_icon}
                </a>
              </motion.p>
            </div>
            <div className="templates_buttons_rows ">
              {dataTemplates.map((val) => {
                return (
                  <button
                    onClick={() => handleButtonClick(val.idView)}
                    aria-label="Select template"
                    className={`templates_button${
                      selectedIdView === val.idView
                        ? " demo_selectedButton"
                        : ""
                    }`}
                    key={val.idView}
                  >
                    <span className="templates_button_dot" />
                  </button>
                );
              })}
            </div>
            <div className={`demo_live_container`}>
              {dataTemplates.map((val) => (
                <div
                  key={val.idView} // Ensure each div has a unique key
                  id={`reacg-root${val.idView}`}
                  className={`reacg-gallery reacg-preview ${
                    selectedIdView === val.idView ? "active" : "hidden"
                  }`} // Add "active" class to the selected div
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

export default Templates;
