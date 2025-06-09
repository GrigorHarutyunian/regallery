import React, { useContext } from "react";
import { useModal } from "../../contexts/ModalContext";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import CustomButton from "../../components/buttons/CustomButton/CustomButton";
import { motion } from "framer-motion";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const SupportAndInfo: React.FC<SupportAndInfoDTO> = ({
  title,
  text,
  id,
  video,
  img,
  alt,
}) => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const { handleOpenModal } = useModal();
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
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </LazyLoadComponent>
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
                <CustomButton
                  handleClick={handleOpenModal}
                  className="custom-button"
                >
                  {"GET STARTED"}
                </CustomButton>
              </a>
              {id === "info" && (
                <a
                  className="custom-button watch_video"
                  href="https://wordpress.org/plugins/regallery/?preview=1"
                  target="_blank"
                >
                  PREVIEW ADMIN
                </a>
              )}
            </div>
          </motion.div>
          {version !== "mobile" && (
            <motion.div style={{ maxWidth: "50%" }} className="section-image">
              {id !== "info" ? (
                <LazyLoadImage height="100%" width="100%" src={img} alt={alt} />
              ) : (
                <LazyLoadComponent>
                  <video
                    height="100%"
                    width="100%"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </LazyLoadComponent>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
