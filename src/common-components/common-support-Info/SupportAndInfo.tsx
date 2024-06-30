import React from "react";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import animation from "../../assets/animations/framer-motion-setings";
import textVariants from "../../assets/animations/framer-motion-textVariants";
import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const SupportAndInfo: React.FC<SupportAndInfoDTO> = ({
  title,
  text,
  id,
  img,
}) => {
  return (
    <section id={id} className="supportandInfo">
      <Container>
        <motion.div {...animation} className="support__row info">
          <motion.div variants={textVariants} className="section-text">
            <div className="section-text__title text-white">{title}</div>
            <div className="section-text__body text-white">{text}</div>
            <a
              href=" https://wordpress.org/plugins/regallery/"
              target="__blank"
            >
              <DownloadBtn className="download-btn" />
            </a>
          </motion.div>
          <motion.div variants={imageVariants} className="section-image">
            <img src={img} alt="download" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
