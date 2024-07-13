import React from "react";
import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import { Row, Container } from "react-bootstrap";
import "./Hero.css";
import img from "../../assets/imgs/choose.webp";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import { motion } from "framer-motion";
// import animation from "../../assets/animations/framer-motion-setings";
// import textVariants from "../../assets/animations/framer-motion-textVariants";
// import imageVariants from "../../assets/animations/framer-motion-imageVariants";

const Hero: React.FC = () => {
  const { version } = useContext(WindowWidthContext);
  let width = 520;
  let height = 400;
  if (version === "mobile") {
    width = width / 2;
    height = height / 2;
  } else if (version === "mid") {
    width = width / 1.5;
    height = height / 1.5;
  }

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
              <img
                height={height}
                width={width}
                src={img}
                alt="Photo Gallery Plugin"
              />
            </motion.div>
          </motion.div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
