import React from "react";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
// import animation from "../../assets/animations/framer-motion-setings";
// import textVariants from "../../assets/animations/framer-motion-textVariants";
// import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const SupportAndInfo: React.FC<SupportAndInfoDTO> = ({
  title,
  text,
  id,

  width,
  height,
  lottiesData,
}) => {
  // const { imgBig, imgMiddle, imgSmall } = img;
  const { ref, inView } = useInView({
    triggerOnce: true, // Load animation once when visible
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
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
          <motion.div ref={ref} className="section-image">
            {/* <img
              width={width}s
              height={height}
              srcSet={`${imgSmall.img} ${imgSmall.size}w, ${imgMiddle.img} ${imgMiddle.size}w, ${imgBig.img} ${imgBig.size}w`}
              sizes={sizes}
              alt={alt}
            /> */}
            {inView && (
              <Lottie
                width={width}
                height={height}
                animationData={lottiesData}
                loop={true}
              />
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
