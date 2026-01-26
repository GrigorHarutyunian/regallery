import React, { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import { Container } from "react-bootstrap";
import SectionDTO from "../../types/SectionDTO";
import "./Section.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import VideoSlider from "../../components/video-slider/VideoSlider";
import "react-lazy-load-image-component/src/effects/blur.css";

const Section: React.FC<SectionDTO> = ({ data }) => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  return (
    <section id={data.id} className="supportandInfo">
      <Container>
        <motion.div className="support__row info">
          <motion.div className="section-text">
            <h2 className="section-text__title">{data.title}</h2>
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
                      autoPlay
                      loop
                      muted
                      playsInline
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
                    <LazyLoadImage
                      height="100%"
                      width="100%"
                      src={data.img}
                      alt={data.alt}
                    />
                  )
                )}
              </motion.div>
            )}

            <div className="buttons-container">
              <a href="#pricing">
                <DownloadBtn className="download-btn" />
              </a>
              {data.additionalButtonLink && (
                <a
                  className="download-btn watch_video"
                  href={data.additionalButtonLink}
                  target="_blank"
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
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </LazyLoadComponent>
              ) : (
                <LazyLoadImage
                  height="100%"
                  width="100%"
                  src={data.img}
                  alt={data.alt}
                />
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default Section;
