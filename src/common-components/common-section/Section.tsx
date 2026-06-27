import React, { useContext, useState } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import { Container } from "react-bootstrap";
import SectionDTO from "../../types/SectionDTO";
import "./Section.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import VideoSlider from "../../components/video-slider/VideoSlider";
import "react-lazy-load-image-component/src/effects/blur.css";
import VideoModal from "../../components/modals/VideoModal/VideoModal";

const sectionColorClassNames = {
  light: "",
  dark: "black-section",
  colorful: "colorful-section",
  "light-colorful": "light-colorful-section",
};

const Section: React.FC<SectionDTO> = ({
  data,
  direction = "right",
  color = "light",
}) => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const responsiveSizes = data.imgSrcSet
    ? (data.imgSizes ?? "(max-width: 768px) 100vw, 50vw")
    : undefined;
  const rowClassName = `section__row${
    direction === "left" ? " section__row--image-left" : ""
  }`;
  const sectionClassName = [
    "section",
    data.className,
    sectionColorClassNames[color],
  ]
    .filter(Boolean)
    .join(" ");
  const primaryButton = data.primaryButton;
  const shouldShowPrimaryButton = primaryButton !== false;
  const customPrimaryButton =
    primaryButton && typeof primaryButton === "object" ? primaryButton : null;
  const primaryButtonLink =
    customPrimaryButton?.primaryButtonLink ?? "/pricing";
  const secondaryButton = data.secondaryButton;
  const secondaryButtonClickHandlers = {
    openVideoModal: handleOpen,
  };
  const handleSecondaryButtonClick = () => {
    secondaryButton?.onClick?.(secondaryButtonClickHandlers);
  };

  return (
    <section id={data.id} className={sectionClassName}>
      <Container>
        <motion.div className={rowClassName}>
          <motion.div className="section-text">
            {data.badge && <p className="section-text__badge">{data.badge}</p>}
            {data.id === "hero" && (
              <h1 className="section-text__title">{data.title}</h1>
            )}
            {data.id !== "hero" && (
              <h2 className="section-text__title">{data.title}</h2>
            )}
            <div className="section-text__body">{data.text}</div>
            {version === "mobile" && (
              <motion.div
                className="section-image"
                style={data.img ? { maxWidth: "unset" } : undefined}
              >
                {data.video ? (
                  <LazyLoadComponent>
                    <video
                      height="100%"
                      width="100%"
                      src={data.video as string}
                      poster={data.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={data.alt}
                    />
                  </LazyLoadComponent>
                ) : data.slides ? (
                  <VideoSlider
                    videos={data.slides as string[]}
                    height="100%"
                    width="100%"
                    viewMoreLinks={data.viewMoreLinks}
                  />
                ) : (
                  data.img && (
                    <img
                      src={data.img}
                      srcSet={data.imgSrcSet}
                      sizes={responsiveSizes}
                      alt={data.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )
                )}
              </motion.div>
            )}
            <div className="buttons-container">
              {shouldShowPrimaryButton && (
                <div className="primary-cta">
                  <a
                    className={
                      customPrimaryButton?.primaryButtonName
                        ? "download-btn"
                        : undefined
                    }
                    href={primaryButtonLink}
                    data-track="start_free_trial"
                    data-location={data.id}
                  >
                    {customPrimaryButton?.primaryButtonName ?? (
                      <DownloadBtn
                        className={"download-btn"}
                        location={data.id}
                      />
                    )}
                  </a>
                  {!customPrimaryButton && (
                    <div className="primary-btn__free-link">
                      <a
                        href="https://wordpress.org/plugins/regallery/"
                        target="_blank"
                        rel="noreferrer noopener"
                        data-track="download_free_version"
                        data-location={data.id}
                      >
                        Download Free Version
                      </a>
                    </div>
                  )}
                </div>
              )}
              {secondaryButton?.link ? (
                <a
                  className="download-btn secondary-btn"
                  href={secondaryButton.link}
                  target={secondaryButton.target ?? "_blank"}
                  data-track="secondary_action"
                  data-location={data.id}
                >
                  {secondaryButton.label}
                </a>
              ) : secondaryButton?.onClick ? (
                <div
                  onClick={handleSecondaryButtonClick}
                  className="download-btn secondary-btn"
                >
                  {secondaryButton.label}
                </div>
              ) : null}
            </div>
          </motion.div>
          {version !== "mobile" && (
            <motion.div style={{ maxWidth: "50%" }} className="section-image">
              {data.slides ? (
                <VideoSlider
                  videos={data.slides as string[]}
                  height="100%"
                  width="100%"
                  viewMoreLinks={data.viewMoreLinks}
                />
              ) : data.video ? (
                <LazyLoadComponent>
                  <video
                    height="100%"
                    width="100%"
                    src={data.video as string}
                    poster={data.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={data.alt}
                  />
                </LazyLoadComponent>
              ) : (
                data.img && (
                  <img
                    src={data.img}
                    srcSet={data.imgSrcSet}
                    sizes={responsiveSizes}
                    alt={data.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%" }}
                  />
                )
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
      {data.id === "hero" && (
        <VideoModal open={open} handleClose={handleClose} />
      )}
    </section>
  );
};

export default Section;
