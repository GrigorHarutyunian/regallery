import image480 from "../assets/sections/ai1-480x276.webp";
import image640 from "../assets/sections/ai1-640x368.webp";
import image768 from "../assets/sections/ai1-768x441.webp";
import image1024 from "../assets/sections/ai1-1024x588.webp";
import image1280 from "../assets/sections/ai1-1280x735.webp";
import image1500 from "../assets/sections/ai1-1500x862.webp";
import image1880 from "../assets/sections/ai1-1880x1080.webp";

const ai1Data = {
  id: "ai-page",
  className: "ai-section",
  title: "98% Faster SEO Completion",
  text: (
    <>
      Tap the Al button and Re Gallery writes the alt text, title, and
      description for you — one image at a time, or in bulk across your whole
      library. No more typing metadata by hand, image by image.
    </>
  ),
  badge: "AI POWERHOUSE",
  img: image1880,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image1024} 1024w, ${image1280} 1280w, ${image1500} 1500w, ${image1880} 1880w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: "AI generating image alt text, titles and descriptions automatically in Re Gallery WordPress plugin",
  secondaryButton: {
    link: "https://wordpress.org/plugins/regallery/?preview=1",
    label: "Admin Demo",
  },
};

export default ai1Data;
