import { useState } from "react";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataDemo } from "./demo-data";

const Demo: React.FC = () => {
  const [selectedIdView, setSelectedIdView] = useState<number>(420);

  console.log(1);
  return (
    <section id="demo">
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h1 className="section-text__title-centered ">Demo</h1>
            <div className="demo_buttons_rows">
              {dataDemo.map((val, index) => {
                return (
                  <button
                    onClick={() => setSelectedIdView(val.idView)}
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
              <div
                id={`reacg-root${selectedIdView}`}
                className="reacg-gallery reacg-preview"
                data-options-section="0"
                data-plugin-version="1.10.0"
                data-gallery-timestamp=""
                data-options-timestamp=""
                data-gallery-id={`${selectedIdView}`}
              ></div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Demo;
