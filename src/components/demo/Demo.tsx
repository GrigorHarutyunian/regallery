// import { useState } from "react";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataDemo } from "./demo-data";

const Demo: React.FC = () => {
  // const [selectedButton, setSelectedButton] = useState<number>(0);

  // const handleClick = (index: number) => {
  //   if (index !== selectedButton) {
  //     setSelectedButton(index);
  //   }
  // };
  // console.log(1);
  return (
    <section id="demo">
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h1 className="section-text__title-centered ">Demo</h1>
            <div className="demo_buttons_rows">
              {dataDemo.map((val, index) => {
                return (
                  <div className="demo_button" key={index}>
                    <svg
                      style={{ marginBottom: "5px" }}
                      height={41}
                      width={41}
                      id="Outline"
                      viewBox="0 0 24 24"
                    >
                      {val.path}
                    </svg>
                  </div>
                );
              })}
            </div>
            <div className="demo_live_conteiner ">
              <div
                id="reacg-root420"
                className="reacg-gallery reacg-preview"
                data-options-section="0"
                data-plugin-version="1.10.0"
                data-gallery-timestamp=""
                data-options-timestamp=""
                data-gallery-id="420"
              ></div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Demo;
