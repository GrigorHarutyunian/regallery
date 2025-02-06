import supportImg from "../../assets/imgs/support.webp";
import supportMiddle from "../../assets/imgs/support-middle.webp";
import supportSmall from "../../assets/imgs/support-small.webp";

const supportData = {
  title: "Contact us",
  text: "In case you have any questions, suggestions, or if you've found a bug, please visit our Support Forum.We are ready to help you 24/7.",
  img: {
    imgBig: { img: supportImg, size: 832 },
    imgMiddle: { img: supportMiddle, size: 555 },
    imgSmall: { img: supportSmall, size: 416 },
  },
  sizes:
    "(max-width: 700px) 208px, (min-width: 701px) and (max-width: 1100px) 277px, 416px",
  alt: `Contact ReGallery - Reach out for support, inquiries, or collaborations with our WordPress photo gallery experts.`,
};
// const supportData = {
//   title: "Contact us",
//   text: "In case you have any questions, suggestions, or if you've found a bug, please visit our Support Forum.We are ready to help you 24/7.",
//   lottiesData:
//     "https://lottie.host/324f91ae-c219-4453-a190-1d91478bb090/zsfBp2hrAs.lottie",

// };

export default supportData;
