import React from "react";
import { Row, Container } from "react-bootstrap";
import "./Hero.css";
import img from "../../assets/imgs/main1.png";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";

const Hero: React.FC = () => {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="hero-conteiner">
            <div className="home-text">
              <div className="section-text__title text-white">
                <span className="section-text__title-big">Regallery</span> - The
                Intuitive Photo Gallery Plugin
              </div>
              <div className="section-text__body">
                The responsive gallery plugin is your ideal solution for easily
                building stunning, mobile-friendly galleries in just minutes.
              </div>
              <DownloadBtn className={"download-btn"} />
            </div>

            <div className="section-image">
              <img src={img} alt="App Preview" />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
