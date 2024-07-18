import React from "react";
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
  sizes,
  alt,
}) => {
  const { imgBig, imgMiddle, imgSmall } = img;

  return (
    <section id={id} className="supportandInfo">
      <Container>
        <motion.div className="support__row info">
          <motion.div className="section-text">
            <h2 className="section-text__title">{title}</h2>
            <p className="section-text__body">{text}</p>
            <a
              href=" https://wordpress.org/plugins/regallery/"
              target="__blank"
            >
              <DownloadBtn className="download-btn" />
            </a>
          </motion.div>
          <motion.div className="section-image">
            <img
              srcSet={`${imgSmall.img} ${imgSmall.size}w, ${imgMiddle.img} ${imgMiddle.size}w, ${imgBig.img} ${imgBig.size}w`}
              sizes={sizes}
              alt={alt}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
