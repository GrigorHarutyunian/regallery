import React from "react";
import { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import VideoModal from "../modals/VideoModal/VideoModal";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Row, Container } from "react-bootstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";
// import imgBig from "../../assets/imgs/choose.webp";
// import imgMiddle from "../../assets/imgs/preview-middle.webp";
// import imgSmall from "../../assets/imgs/preview-small.webp";
import heroMp4 from "../../assets/mp4s/first_section_660.mp4";
import "./Hero.css";

const Hero: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const [open, setOpen] = useState(false);
  const version = windowWitdth.version;

  // const width = version === "mobile" ? 260 : version === "mid" ? 347 : 698;
  // const ration = 940 / 540;
  // const height = Math.round(width / ration);

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
              {version === "mobile" && (
                <motion.div className="section-image">
                  <LazyLoadComponent>
                    <video
                      height={`100%`}
                      width={`100%`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={heroMp4}
                    />
                  </LazyLoadComponent>
                </motion.div>
              )}
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
                      color: "#000000",
                    }}
                  />
                  WATCH INTRO
                </div>
              </div>
            </motion.div>

            {version !== "mobile" && (
              <motion.div style={{ maxWidth: `50%` }} className="section-image">
                <LazyLoadComponent>
                  <video
                    height={`100%`}
                    width={`100%`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={heroMp4}
                  />
                </LazyLoadComponent>
              </motion.div>
            )}
          </motion.div>
        </Row>
      </Container>
      <VideoModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Hero;
