import React from "react";
import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
// import animation from "../../assets/animations/framer-motion-setings";
// import textVariants from "../../assets/animations/framer-motion-textVariants";
// import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const SupportAndInfo: React.FC<SupportAndInfoDTO> = ({
  title,
  text,
  id,
  img,
}) => {
  const { version } = useContext(WindowWidthContext);

  let width = id === "info" ? 595 : 405;
  let height = id === "info" ? 400 : 405;
  if (version === "mobile") {
    width = width / 2;
    height = height / 2;
  } else if (version === "mid") {
    width = width / 1.5;
    height = height / 1.5;
  }

  return (
    <section id={id} className="supportandInfo">
      <Container>
        <motion.div className="support__row info">
          <motion.div className="section-text">
            <div className="section-text__title">{title}</div>
            <div className="section-text__body">{text}</div>
            <a
              href=" https://wordpress.org/plugins/regallery/"
              target="__blank"
            >
              <DownloadBtn className="download-btn" />
            </a>
          </motion.div>
          <motion.div className="section-image">
            <img height={height} width={width} src={img} alt={title} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
