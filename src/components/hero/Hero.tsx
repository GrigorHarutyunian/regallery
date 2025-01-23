import React from "react";
import { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import VideoModal from "../modals/VideoModal/VideoModal";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Row, Container } from "react-bootstrap";

import "./Hero.css";

// import animation from "../../assets/animations/framer-motion-setings";
// import textVariants from "../../assets/animations/framer-motion-textVariants";
// import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const Hero: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const [open, setOpen] = useState(false);

  const version = windowWitdth.version;
  const width = version === "mobile" ? 500 : version === "mid" ? 378 : 500;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

            <motion.div style={{ maxWidth: width }} className="section-image">
              <dotlottie-player
                src="https://lottie.host/11b2df1a-995e-468f-bf73-9e4e00393cc6/Nik5jU6tps.lottie"
                background="transparent"
                speed="1"
                style={{ maxWidth: "500px", maxHeight: "500px" }}
                loop
                autoplay
              ></dotlottie-player>
            </motion.div>
          </motion.div>
        </Row>
      </Container>
      <VideoModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Hero;
