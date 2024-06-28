import React from "react";
import { Row, Container } from "react-bootstrap";
import "./Hero.css";
import img from "../../assets/imgs/choose.png";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";

const Hero: React.FC = () => {
  return (
    <section>
      <Container>
        <Row>
          <div className="hero-conteiner">
            <div className="home-text">
              <div className="section-text__title text-white">
                The Intuitive <br></br> Photo Gallery Plugin
              </div>
              <div className="section-text__body">
                The responsive gallery plugin is your ideal solution for easily
                building stunning, mobile-friendly galleries in just minutes.
              </div>
              <a
                href=" https://wordpress.org/plugins/regallery/"
                target="__blank"
              >
                <DownloadBtn className={"download-btn"} />
              </a>
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
