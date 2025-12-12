import React from "react";
import { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import VideoModal from "../modals/VideoModal/VideoModal";
import { motion } from "framer-motion";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Row, Container } from "react-bootstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import heroMp4 from "../../assets/sections/first_section_940.mp4";
import "./Hero.css";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";

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
          <motion.div className="hero-container">
            <motion.div className="home-text">
              <h1 className="section-text__title ">
                Easily Create
                <br></br> AI Photo Gallery that Wow Your Visitors
              </h1>
              <p className="section-text__body">
                Re Gallery helps you build responsive photo galleries in
                minutes, with{" "}
                <b>Pre-Designed Templates, AI Automation Tools,</b> and{" "}
                <b>full WordPress integration</b>: No coding required!
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
