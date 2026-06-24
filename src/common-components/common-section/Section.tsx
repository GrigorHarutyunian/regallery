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

const Section: React.FC<SectionDTO> = ({ data }) => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const responsiveSizes = data.imgSrcSet
    ? (data.imgSizes ?? "(max-width: 768px) 100vw, 50vw")
    : undefined;
  return (
    <section id={data.id} className={`section ${data.className}`}>
      <Container>
        <motion.div className="section__row">
          <motion.div className="section-text">
            {data.badge && <p className="section-text__badge">{data.badge}</p>}
            {data.id === "hero" && (
              <h1 className="section-text__title">{data.title}</h1>
            )}
            {data.id !== "hero" && (
              <h2 className="section-text__title">{data.title}</h2>
            )}
            <p className="section-text__body">{data.text}</p>
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
              <div className="primary-cta">
                <a
                  href="/pricing"
                  data-track="start_free_trial"
                  data-location={data.id}
                >
                  <DownloadBtn className={"download-btn"} location={data.id} />
                </a>
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
              </div>
              {data.id === "hero" && (
                <div
                  onClick={handleOpen}
                  className="download-btn secondary-btn"
                >
                  {data.additionalButtonName}
                </div>
              )}
              {data.additionalButtonLink && (
                <a
                  className="download-btn secondary-btn"
                  href={data.additionalButtonLink}
                  target="_blank"
                  data-track="secondary_action"
                  data-location={data.id}
                >
                  {data.additionalButtonName}
                </a>
              )}
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
