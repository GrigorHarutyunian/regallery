import React from "react";
import { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import VideoModal from "../modals/VideoModal/VideoModal";
import { motion } from "framer-motion";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { Row, Container } from "react-bootstrap";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import heroMp4 from "../../assets/sections/hero.mp4";
import heroPoster from "../../assets/sections/hero.webp";
import { allTemplates } from "../views/views-data-subMenu";
import { dataDemo } from "../demo/demo-data";
import { formatCountByStep } from "../../utils/formatCountByStep";

import "./Hero.css";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";

const trustHighlights = [
  {
    icon: <StarBorderIcon />,
    iconClassName: "hero-trust-card__icon--stars",
    title: "5/5 stars",
    description: "On WordPress.org",
  },
  {
    icon: <VerifiedUserOutlinedIcon />,
    iconClassName: "hero-trust-card__icon--guarantee",
    title: "14-day guarantee",
    description: "Full refund, no questions",
  },
  {
    icon: <FileDownloadOutlinedIcon />,
    iconClassName: "hero-trust-card__icon--free",
    title: "Free to start",
    description: "No credit card needed",
  },
  {
    icon: <ExtensionOutlinedIcon />,
    iconClassName: "hero-trust-card__icon--builders",
    title: "Works everywhere",
    description: "Elementor, Gutenberg, Divi & more",
  },
];

const Hero: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const [open, setOpen] = useState(false);
  const version = windowWitdth.version;
  const allTemplatesCount = formatCountByStep(allTemplates.length);
  const allLayoutsCount = dataDemo.length;

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
                <i>Built automatically</i> by&nbsp;AI
              </h1>
              <p className="section-text__body">
                Re Gallery gives you{" "}
                <b>
                  {allLayoutsCount} responsive layouts, {allTemplatesCount}{" "}
                  templates,
                </b>{" "}
                and built-in AI that writes alt text, generates captions, and
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
                  <a
                    href="/pricing"
                    data-track="start_free_trial"
                    data-location="hero"
                  >
                    <DownloadBtn className={"download-btn"} location="hero" />
                  </a>
                  <div className="primary-btn__free-link">
                    <a
                      href="https://wordpress.org/plugins/regallery/"
                      target="_blank"
                      rel="noreferrer noopener"
                      data-track="download_free_version"
                      data-location="hero"
                    >
                      Download Free Version
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
                  Watch Intro
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
          <div
            className="hero-trust-row grid grid__4"
            aria-label="Trust highlights"
          >
            {trustHighlights.map((highlight) => (
              <div className="grid-item hero-trust-card" key={highlight.title}>
                <span
                  className={`hero-trust-card__icon ${highlight.iconClassName}`}
                  aria-hidden="true"
                >
                  {highlight.icon}
                </span>
                <span className="hero-trust-card__title">
                  {highlight.title}
                </span>
                <span className="hero-trust-card__description">
                  {highlight.description}
                </span>
              </div>
            ))}
          </div>
        </Row>
      </Container>
      <VideoModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Hero;
