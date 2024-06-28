import React from "react";
import { Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";

const SupportAndInfo: React.FC<SupportAndInfoDTO> = ({
  title,
  text,
  id,
  img,
}) => {
  return (
    <section id={id} className="supportandInfo">
      <Container>
        <div className="support__row info">
          <div className="section-text">
            <div className="section-text__title text-white">{title}</div>
            <div className="section-text__body text-white">{text}</div>
            <a
              href=" https://wordpress.org/plugins/regallery/"
              target="__blank"
            >
              <DownloadBtn className="download-btn" />
            </a>
          </div>
          <div className="section-image">
            <img src={img} alt="download" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SupportAndInfo;
