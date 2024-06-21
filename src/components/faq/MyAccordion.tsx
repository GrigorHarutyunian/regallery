import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDTO from "../../types/AccordionDTO";
import "./Faq.css";
const MyAccordion: React.FC<
  AccordionDTO & {
    expandedPanel: string | false;
    handleChange: (panel: string) => void;
  }
> = ({
  title,
  description,
  panelId,
  summeryID,
  expandedPanel,
  handleChange,
}) => {
  return (
    <Accordion
      expanded={expandedPanel === panelId}
      onChange={() => handleChange(panelId)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={summeryID}>
        <div className="accordion__title">{title}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="accordion__description">{description}</div>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
