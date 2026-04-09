import React from "react";
import { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import VideoModal from "../modals/VideoModal/VideoModal";
import { motion } from "framer-motion";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Row, Container } from "react-bootstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import heroMp4 from "../../assets/sections/first_section_940.mp4";
import heroPoster from "../../assets/sections/first_section_940.webp";
import { allTemplates } from "../views/views-data-subMenu";
import { formatCountByStep } from "../../utils/formatCountByStep";

import "./Hero.css";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";

const Hero: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const [open, setOpen] = useState(false);
  const version = windowWitdth.version;
  const allTemplatesCount = formatCountByStep(allTemplates.length);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      <Container>
        <Row>
          <motion.div className="hero-container">
            <motion.div className="home-text">
              <p className="hero-badge">WORDPRESS GALLERY PLUGIN</p>
              <h1 className="section-text__title">
                Beautiful galleries.
                <br></br>
                <i>Built automatically</i> by AI
              </h1>
              <p className="section-text__body">
                Re Gallery gives you{" "}
                <b>9 responsive layouts, {allTemplatesCount} templates,</b> and
                built-in AI that writes alt text, generates captions, and
                handles image SEO - so you don't have to. Works with Elementor,
                Gutenberg, Divi, and more.
                <br />
                <i>No coding required.</i>
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
                      poster={heroPoster}
                    />
                  </LazyLoadComponent>
                </motion.div>
              )}
              <div className="buttons-container">
                <div className="primary-cta">
                  <a href="#pricing">
                    <DownloadBtn className={"download-btn"} location="hero" />
                  </a>
                  <div className="primary-btn__free-link">
                    <a
                      href="https://wordpress.org/plugins/regallery/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Try the free version
                    </a>
                  </div>
                </div>
                <div
                  onClick={handleOpen}
                  className="download-btn secondary-btn"
                >
                  <PlayCircleFilledIcon
                    style={{
                      verticalAlign: "middle",
                      width: "25px",
                      height: "19px",
                      marginBottom: "2px",
                      color: "var(--re-tertiary-color, #2540cc)",
                    }}
                  />
                  Watch intro
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
                    poster={heroPoster}
                    aria-label={`AI-powered WordPress gallery builder creating responsive photo galleries with automatic alt text and captions`}
                  />
                </LazyLoadComponent>
              </motion.div>
            )}
          </motion.div>
        </Row>
        <Row>
          <div className="hero-trust-row" aria-label="Trust highlights">
            <span className="hero-trust-item">5/5 stars on WordPress.org</span>
            <span className="hero-trust-item">
              Free version - no credit card
            </span>
            <span className="hero-trust-item">14-day money-back guarantee</span>
            <span className="hero-trust-item">Works with 6 page builders</span>
          </div>
        </Row>
      </Container>
      <VideoModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Hero;
