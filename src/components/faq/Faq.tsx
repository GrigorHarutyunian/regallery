import React from "react";
import { Container, Row } from "react-bootstrap";

interface FaqProps {
  data: any[];
  title?: string;
}

const Faq: React.FC<FaqProps> = ({ data, title = "FAQ" }) => {
  return (
    <section id="faq">
      <Container>
        <Row>
          <div>
            <h2 className="section-text__title-centered">{title}</h2>
            <div className="grid grid__2">
              {data.map((val: any, index) => (
                <div key={index} className="grid-item">
                  <div className="grid-item__header">
                    <svg
                      height={55}
                      width={55}
                      id="Outline"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4C6.48 4 2 7.58 2 12c0 2.28 1.2 4.34 3.13 5.8L4.5 21l3.64-1.82c1.18.52 2.49.82 3.86.82 5.52 0 10-3.58 10-8s-4.48-8-10-8Zm-4 7h8v2H8v-2Z" />
                    </svg>
                    <h3 className="section-text__title-small">{val.title}</h3>
                  </div>
                  <div className="section-text__desc">{val.description}</div>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
