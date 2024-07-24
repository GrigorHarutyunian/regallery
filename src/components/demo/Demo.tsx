import { useState } from "react";
import "./Demo.css";
import { Container } from "react-bootstrap";

const demoData = ["Mosaic", "Thumbnails", "Cube"];

const Demo: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleClick = (index: number) => {
    if (index !== selectedButton) {
      setSelectedButton(index);
    }
  };
  console.log(1);
  return (
    <section id="demo">
      <Container>
        <div className="demo_columns_content">
          <h1 className="section-text__title-centered ">Demo</h1>
          <div className="demo_live_conteiner "></div>

          <div className="demo_buttons_rows">
            {demoData.map((val, index) => {
              return (
                <div
                  key={index}
                  className={`download-btn ${
                    selectedButton === index ? "" : "btn_demo"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Demo;
