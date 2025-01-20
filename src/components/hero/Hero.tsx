import React from "react";
import { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import VideoModal from "../modals/VideoModal/VideoModal";

// import imgBig from "../../assets/imgs/choose.webp";
// import imgMiddle from "../../assets/imgs/preview-middle.webp";
// import imgSmall from "../../assets/imgs/preview-small.webp";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Row, Container } from "react-bootstrap";
import "./Hero.css";
import HeroLottie from "../../assets/lotties/HeroLottie.json";
// import animation from "../../assets/animations/framer-motion-setings";
// import textVariants from "../../assets/animations/framer-motion-textVariants";
// import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const Hero: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Load animation once when visible
    threshold: 0.1, // Trigger when 10% of the element is visible
  });
  const version = windowWitdth.version;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const width = version === "mobile" ? 500 : version === "mid" ? 380 : 500;
  // const ration = 595 / 402;
  // const height = Math.trunc(width / ration);
  // width / ration;

  return (
    <section>
      <Container>
        <Row>
          <motion.div className="hero-conteiner">
            <motion.div className="home-text">
              <h1 className="section-text__title ">
                The Intuitive <br></br> Photo Gallery Plugin
              </h1>
              <p className="section-text__body">
                The WordPress photo gallery plugin is your ideal solution for
                easily building stunning, mobile-friendly galleries in just
                minutes.
              </p>

              <div className="buttons-container">
                <a href="#pricing">
                  <DownloadBtn className={"download-btn"} />
                </a>
                <div onClick={handleOpen} className="download-btn watch_video">
                  <PlayCircleFilledIcon
                    style={{
                      verticalAlign: "middle",
                      width: "25px",
                      height: "19px",
                      marginBottom: "2px",
                    }}
                  />
                  WATCH INTRO
                </div>
              </div>
            </motion.div>

            <div
              ref={ref}
              style={{ maxWidth: width }}
              className="section-image"
            >
              {/* <img
                loading="lazy"
                height={height}
                width={width}
                src={imgBig}
                srcSet={`${imgSmall} 520w, ${imgMiddle} 693w, ${imgBig} 1040w`}
                sizes="(max-width: 700px) 260px, (min-width: 701px) and (max-width: 1100px) 346px, (min-width: 1101px) 520px"
                alt="Regallery - the intuitive WordPress photo gallery plugin with easy drag-and-drop interface and customizable gallery options."
              /> */}
              {inView && (
                <Lottie
                  animationData={HeroLottie}
                  loop={false}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
            </div>
          </motion.div>
        </Row>
      </Container>
      <VideoModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Hero;
