import React from "react";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
// import animation from "../../assets/animations/framer-motion-setings";
// import textVariants from "../../assets/animations/framer-motion-textVariants";
// import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const SupportAndInfo: React.FC<SupportAndInfoDTO> = ({
  title,
  text,
  id,

  lottiesData,
}) => {
  return (
    <section id={id} className="supportandInfo">
      <Container>
        <motion.div className="support__row info">
          <motion.div className="section-text">
            <h2 className="section-text__title">{title}</h2>
            <p className="section-text__body">{text}</p>
            <div className="buttons-container">
              <a href="#pricing">
                <DownloadBtn className="download-btn" />
              </a>
              {id === "info" && (
                <a
                  className="download-btn watch_video"
                  href="https://wordpress.org/plugins/regallery/?preview=1"
                  target="__blank"
                >
                  PREVIEW ADMIN
                </a>
              )}
            </div>
          </motion.div>
          <motion.div className="section-image">
            <Lottie animationData={lottiesData} loop={true} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
