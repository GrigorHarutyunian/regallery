import React from "react";
import { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import VideoModal from "../modals/VideoModal/VideoModal";

import imgBig from "../../assets/imgs/choose.webp";
import imgMiddle from "../../assets/imgs/preview-middle.webp";
import imgSmall from "../../assets/imgs/preview-small.webp";
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
  const width = version === "mobile" ? 260 : version === "mid" ? 346 : 520;
  const ration = 13 / 10;
  const height = width / ration;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(open);
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
                <a
                  href=" https://wordpress.org/plugins/regallery/"
                  target="__blank"
                >
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
                  Watch Video
                </div>
              </div>
            </motion.div>

            <motion.div className="section-image">
              <img
                loading="lazy"
                height={height}
                width={width}
                src={imgBig}
                srcSet={`${imgSmall} 520w, ${imgMiddle} 693w, ${imgBig} 1040w`}
                sizes="(max-width: 700px) 260px, (min-width: 701px) and (max-width: 1000px) 346.667px, (min-width: 1001px) 520px"
                alt="Regallery - the intuitive WordPress photo gallery plugin with easy drag-and-drop interface and customizable gallery options."
              />
            </motion.div>
          </motion.div>
        </Row>
      </Container>
      <VideoModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Hero;
