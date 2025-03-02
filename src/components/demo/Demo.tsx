import { useState } from "react";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataDemo } from "./demo-data";

const Demo: React.FC = () => {
  const [selectedIdView, setSelectedIdView] = useState<number>(420);
  const [isHeightReduced, setIsHeightReduced] = useState(false);

  const handleButtonClick = (idView: number) => {
    setIsHeightReduced(true);

    setTimeout(() => {
      console.log("bbb");
      setIsHeightReduced(false);
      setSelectedIdView(idView);
    }, 2000);
  };

  return (
    <section
      id="demo"
      className={isHeightReduced ? "reduced-height" : "not-reduced-height"}
    >
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h1 className="section-text__title-centered ">Demo</h1>
            <div className="demo_buttons_rows">
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
            <div className="demo_live_conteiner ">
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
