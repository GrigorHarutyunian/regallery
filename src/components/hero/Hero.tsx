import React from "react";
import { Row, Container } from "react-bootstrap";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="home-text">
            <div className="section-text__subtitle">Explore the whiskers</div>
            <div className="section-text__title-big">
              ReGallery - The Intuitive Photo Gallery Plugin
            </div>
            <div className="section-text__body">
              The responsive gallery plugin is your ideal solution for easily
              building stunning, mobile-friendly galleries in just minutes.
            </div>
            <a
              target="_blanc"
              href="https://wordpress.org/plugins/regallery/"
              className="download-btn"
            >
              Download
            </a>
          </div>

          <div className="section-image">
            <img
              src="https://uhmnb.csb.app/images/hero-right.png"
              alt="App Preview"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
