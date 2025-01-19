import imgBig from "../../assets/imgs/choose3.webp";
import imgMiddle from "../../assets/imgs/whychoose-middle.webp";
import imgSmall from "../../assets/imgs/whychoose-small.webp";
import Choose from "../../assets/lotties/Choose.json";
const infoData = {
  title: "Why Choose the ReGallery plugin?",
  text: "Play around with all the settings and see instant results with our cool LIVE DEMO feature. Enjoy a fun and interactive way to manage your galleries with ReGallery plugin.",
  img: {
    imgBig: { img: imgBig, size: 1190 },
    imgMiddle: { img: imgMiddle, size: 794 },
    imgSmall: { img: imgSmall, size: 595 },
  },
  sizes:
    "(max-width: 700px) 298px, (min-width: 701px) and (max-width: 1100px) 397px, 595px",
  alt: `Discover why ReGallery is the best WordPress photo gallery plugin. Featuring responsive design, intuitive interface, and extensive customization options.`,
  lottiesData: Choose,
};
export default infoData;
