import React from "react";
import { Container } from "react-bootstrap";
import supportData from "./support-data";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import "./Support.css";
const Support: React.FC = () => {
  let text = supportData.text.split("Support Forum.");
  return (
    <section id={"support"} className="supportandInfo">
      <Container>
        <div className="contact_us_row">
          <h2 className="section-text__title">{supportData.title}</h2>
          <p className="section-text__body contact_us">
            <>
              {text[0]}{" "}
              <a
                href="https://wordpress.org/support/plugin/regallery/"
                target="_blank"
                style={{
                  color: "rgb(255, 255, 255)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Support Forum.
              </a>
              <br />
              {text[1]}
            </>
          </p>
          <div className="buttons-container contact_us_buttons_container">
            <a href="#pricing">
              <DownloadBtn className="download-btn" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Support;
