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
      elevation={0}
      expanded={expandedPanel === panelId}
      onChange={() => handleChange(panelId)}
      sx={{
        "&.Mui-expanded::before": {
          opacity: 1,
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id={summeryID}>
        <h3 className="accordion__title">{title}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p className="accordion__description">{description}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
