import React, { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import VideoSlider from "../../components/video-slider/VideoSlider";
import "react-lazy-load-image-component/src/effects/blur.css";
interface ExtendedSupportAndInfoDTO extends SupportAndInfoDTO {
  video?: string | string[];
  additionalButtonLink?: string;
  additionalButtonLinks?: string[];
}

const SupportAndInfo: React.FC<ExtendedSupportAndInfoDTO> = ({
  title,
  text,
  id,
  video,
  img,
  alt,
  additionalButtonLink,
  additionalButtonLinks,
  additionalButtonName,
}) => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const [currentButtonLink, setCurrentButtonLink] = React.useState(
    additionalButtonLinks?.[0] || additionalButtonLink
  );
  return (
    <section id={id} className="supportandInfo">
      <Container>
        <motion.div className="support__row info">
          <motion.div className="section-text">
            <h2 className="section-text__title">{title}</h2>
            <p className="section-text__body">{text}</p>
            {version === "mobile" && (
              <motion.div
                className="section-image"
                style={
                  id === "aboutMobileResponsiveness"
                    ? { maxWidth: "unset" }
                    : undefined
                }
              >
                {id === "info" ? (
                  <LazyLoadComponent>
                    <video
                      height="100%"
                      width="100%"
                      src={video as string}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </LazyLoadComponent>
                ) : id === "builder" ? (
                  <VideoSlider
                    videos={video as string[]}
                    height="100%"
                    width="100%"
                    onSlideChange={(index) => {
                      if (additionalButtonLinks) {
                        setCurrentButtonLink(additionalButtonLinks[index]);
                      }
                    }}
                  />
                ) : (
                  id === "aboutMobileResponsiveness" && (
                    <LazyLoadImage
                      height="100%"
                      width="100%"
                      src={img}
                      alt={alt}
                    />
                  )
                )}
              </motion.div>
            )}

            <div className="buttons-container">
              <a href="#pricing">
                <DownloadBtn className="download-btn" />
              </a>
              {(additionalButtonLink || additionalButtonLinks) && (
                <a
                  className="download-btn watch_video"
                  href={currentButtonLink}
                  target="_blank"
                >
                  {additionalButtonName}
                </a>
              )}
            </div>
          </motion.div>
          {version !== "mobile" && (
            <motion.div style={{ maxWidth: "50%" }} className="section-image">
              {id === "builder" ? (
                <VideoSlider
                  videos={video as string[]}
                  height="100%"
                  width="100%"
                  onSlideChange={(index) => {
                    if (additionalButtonLinks) {
                      setCurrentButtonLink(additionalButtonLinks[index]);
                    }
                  }}
                />
              ) : id === "info" ? (
                <LazyLoadComponent>
                  <video
                    height="100%"
                    width="100%"
                    src={video as string}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </LazyLoadComponent>
              ) : (
                <LazyLoadImage height="100%" width="100%" src={img} alt={alt} />
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
