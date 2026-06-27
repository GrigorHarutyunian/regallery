import image480 from "../assets/sections/ai2-480x276.webp";
import image640 from "../assets/sections/ai2-640x368.webp";
import image768 from "../assets/sections/ai2-768x441.webp";
import image1024 from "../assets/sections/ai2-1024x588.webp";
import image1280 from "../assets/sections/ai2-1280x735.webp";
import image1500 from "../assets/sections/ai2-1500x862.webp";
import image1880 from "../assets/sections/ai2-1880x1080.webp";
import CheckIcon from "@mui/icons-material/Check";

const ai2Data = {
  id: "ai-page",
  className: "ai-section",
  title: "One-Click Automation",
  text: (
    <>
      Select your media library and generate every title, description, caption,
      and alt text in one pass. What would take hours of manual typing becomes a
      single click.
      <div className="grid-item__list">
        <div className="grid-item__list-item">
          <span className="grid-item__check" aria-hidden="true">
            <CheckIcon />
          </span>
          Bulk metadata generation
        </div>
        <div className="grid-item__list-item">
          <span className="grid-item__check" aria-hidden="true">
            <CheckIcon />
          </span>
          Fast SEO optimization
        </div>
        <div className="grid-item__list-item">
          <span className="grid-item__check" aria-hidden="true">
            <CheckIcon />
          </span>
          Image alt text, generated for you
        </div>
      </div>
    </>
  ),
  badge: "EFFICIENCY",
  img: image1880,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image1024} 1024w, ${image1280} 1280w, ${image1500} 1500w, ${image1880} 1880w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: "AI generating image alt text, titles and descriptions automatically in Re Gallery WordPress plugin",
  primaryButton: false as const,
};

export default ai2Data;
