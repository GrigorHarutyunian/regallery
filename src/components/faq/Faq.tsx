import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MyAccordion from "./MyAccordion";
import { faqData } from "./faq-data";
import AccordionDTO from "../../types/AccordionDTO";

const Faq: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpandedPanel((prevPanel) => (prevPanel === panel ? false : panel));
  };

  return (
    <section id="faq">
      <Container>
        <div className="faq__container">
          <h2 className="faq__title">FAQ</h2>
          <div className="accordions">
            {faqData.map((val: AccordionDTO) => (
              <MyAccordion
                key={val.panelId}
                title={val.title}
                description={val.description}
                panelId={val.panelId}
                summeryID={val.summeryID}
                expandedPanel={expandedPanel}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
