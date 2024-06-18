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
              Get your companion with Felisity
            </div>
            <div className="section-text__body">
              Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
              eiusm tempor incididunt ulabore et dolore magna aliqua.
            </div>
            <a href="#download" className="download-btn">
              Download App
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
