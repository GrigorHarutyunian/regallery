import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MyAccordion from "./MyAccordion";
import faqData from "./faq-data.json";
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
          <div className="faq__title">FAQ</div>
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
