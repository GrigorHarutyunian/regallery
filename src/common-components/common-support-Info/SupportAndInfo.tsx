import React from "react";
import { Row, Container } from "react-bootstrap";
import SupportAndInfoDTO from "../../types/SupportAndInfoDTO";
import "./SupportAndInfo.css";

const SupportAndInfo: React.FC<SupportAndInfoDTO> = ({ title, text, id }) => {
  return (
    <section id={id} className="supportandInfo">
      <Container>
        <Row>
          <div className="section-text">
            <div className="section-text__title text-white">{title}</div>
            <div className="section-text__body text-white">{text}</div>
            {/* <a href="#download" className="download-btn__img">
              <img
                src="https://uhmnb.csb.app/images/app_btn1.webp"
                alt="app store"
              />
            </a>
            <a href="#download" className="download-btn__img">
              <img
                src="https://uhmnb.csb.app/images/app_btn2.webp"
                alt="google play store"
              />
            </a> */}
          </div>
          <div className="section-image">
            <img
              src="https://uhmnb.csb.app/images/download.svg"
              alt="download"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default SupportAndInfo;