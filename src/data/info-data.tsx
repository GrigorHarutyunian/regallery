import image480 from "../assets/sections/options-480x276.webp";
import image640 from "../assets/sections/options-640x368.webp";
import image768 from "../assets/sections/options-768x441.webp";
import image1024 from "../assets/sections/options-1024x588.webp";
import image1280 from "../assets/sections/options-1280x735.webp";
import image1500 from "../assets/sections/options-1500x862.webp";
import image1880 from "../assets/sections/options-1880x1080.webp";
import { allTemplates } from "../components/views/views-data-subMenu";
import { formatCountByStep } from "../utils/formatCountByStep";

const allTemplatesCount = formatCountByStep(allTemplates.length);

const infoData = {
  id: "info",
  title: "Why Choose Re Gallery",
  text: (
    <>
      Re Gallery is built for people who want professional results without the
      complexity. With an intuitive <b>Real-Time Preview</b>, every setting
      change shows instantly - no guessing, no re-publishing, no wasted time.
      Choose from <b>9 responsive layouts</b> and{" "}
      <b>{allTemplatesCount} pre-designed templates</b>, drop your gallery into
      any page builder, and even build landing pages - all from inside a single,
      lightweight plugin that feels native to WordPress.
    </>
  ),
  img: image1880,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image1024} 1024w, ${image1280} 1280w, ${image1500} 1500w, ${image1880} 1880w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: `Re Gallery WordPress plugin interface showing real-time preview and gallery customization controls`,
  additionalButtonLink: "https://wordpress.org/plugins/regallery/?preview=1",
  additionalButtonName: "ADMIN DEMO",
};
export default infoData;
