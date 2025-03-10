import React, { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";

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
  return (
    <section id={id} className="supportandInfo">
      <Container>
        <motion.div className="support__row info">
          <motion.div className="section-text">
            <h2 className="section-text__title">{title}</h2>
            <p className="section-text__body">{text}</p>
            {version === "mobile" && id === "info" && (
              <motion.div className="section-image">
                <video
                  height={`100%`}
                  width={`100%`}
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            )}
            <div className="buttons-container">
              <a href="#pricing">
                <DownloadBtn className="download-btn" />
              </a>
              {id === "info" && (
                <a
                  className="download-btn watch_video"
                  href="https://wordpress.org/plugins/regallery/?preview=1"
                  target="__blank"
                >
                  PREVIEW ADMIN
                </a>
              )}
            </div>
          </motion.div>
          <motion.div style={{ maxWidth: "50%" }} className="section-image">
            {id !== "info" ? (
              <img height={`100%`} width={`100%`} src={img} alt={alt} />
            ) : (
              version !== "mobile" && (
                <video
                  height={`100%`}
                  width={`100%`}
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
