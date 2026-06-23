import image480 from "../assets/sections/options-480x276.webp";
import image640 from "../assets/sections/options-640x368.webp";
import image768 from "../assets/sections/options-768x441.webp";
import image1024 from "../assets/sections/options-1024x588.webp";
import image1280 from "../assets/sections/options-1280x735.webp";
import image1500 from "../assets/sections/options-1500x862.webp";
import image1880 from "../assets/sections/options-1880x1080.webp";
import { allTemplates } from "../components/views/views-data-subMenu";
import { dataDemo } from "../components/demo/demo-data";
import { formatCountByStep } from "../utils/formatCountByStep";

const allTemplatesCount = formatCountByStep(allTemplates.length);
const allLayoutsCount = dataDemo.length;

const infoData = {
  id: "info",
  title: <>Why Choose Re&nbsp;Gallery</>,
  text: (
    <>
      Most gallery plugins stop at layout. Re&nbsp;Gallery's built-in AI writes
      the alt text, titles, and descriptions for every image you upload — work
      no other gallery plugin does natively. Every other setting updates the
      same way: change a watermark position, toggle a title, drag a spacing
      slider, and the real-time preview shows it instantly — no guessing, no
      re-publishing. Choose from <b>{allLayoutsCount} responsive layouts</b> and{" "}
      <b>{allTemplatesCount} templates</b>, drop your gallery into any page
      builder, even build full landing pages. All of it, including the AI, lives
      in one lightweight plugin — not a gallery plugin plus a separate SEO tool.
    </>
  ),
  img: image1880,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image1024} 1024w, ${image1280} 1280w, ${image1500} 1500w, ${image1880} 1880w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: `Re Gallery WordPress plugin interface showing real-time preview and gallery customization controls`,
  additionalButtonLink: "https://wordpress.org/plugins/regallery/?preview=1",
  additionalButtonName: "Admin Demo",
};
export default infoData;
