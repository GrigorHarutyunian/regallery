import React from "react";
import { Row, Container } from "react-bootstrap";
import "./Hero.css";
import img from "../../assets/imgs/choose-DRuc9VZK.webp";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
// import animation from "../../assets/animations/framer-motion-setings";
// import textVariants from "../../assets/animations/framer-motion-textVariants";
// import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const Hero: React.FC = () => {
  return (
    <section>
      <Container>
        <Row>
          <motion.div className="hero-conteiner">
            <motion.div className="home-text">
              <div className="section-text__title ">
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
            </motion.div>

            <motion.div className="section-image">
              <img src={img} alt="App Preview" />
            </motion.div>
          </motion.div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
