import React from "react";
import { Container } from "react-bootstrap";
import supportData from "./support-data";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import "./Support.css";
const Support: React.FC = () => {
  return (
    <section id={"support"} className="supportandInfo">
      <Container>
        <div className="contact_us_row">
          <h2 className="section-text__title">{supportData.title}</h2>
          <p className="section-text__body contact_us">{supportData.text}</p>
          <div className="buttons-container contact_us_buttons_container">
            <a href="#pricing">
              <DownloadBtn className="download-btn" />
            </a>

            <a
              className="download-btn watch_video"
              href="https://wordpress.org/plugins/regallery/?preview=1"
              target="__blank"
            >
              PREVIEW ADMIN
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Support;
