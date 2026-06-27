import image480 from "../assets/sections/ai3-480x276.webp";
import image640 from "../assets/sections/ai3-640x368.webp";
import image768 from "../assets/sections/ai3-768x441.webp";
import image1024 from "../assets/sections/ai3-1024x588.webp";
import image1280 from "../assets/sections/ai3-1280x735.webp";
import image1500 from "../assets/sections/ai3-1500x862.webp";
import image1880 from "../assets/sections/ai3-1880x1080.webp";
import LanguageIcon from "@mui/icons-material/Language";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const ai3Data = {
  id: "ai-page-multilingual",
  className: "ai-section",
  title: "Multilingual SEO for WordPress galleries",
  text: (
    <>
      Running WML or Polylang? Re Gallery detects your WordPress site's locale
      and generates titles, alt text, and descriptions natively in that language
      — not machine-translated from English — so your image SEO holds up in
      German, Japanese, or 50+ other languages.
      <div className="section-text__stat-cards">
        <div className="section-text__stat-card">
          <LanguageIcon className="section-text__stat-icon" />
          <strong>50+ Languages</strong>
          <span>Fully Supported</span>
        </div>
        <div className="section-text__stat-card">
          <GpsFixedIcon className="section-text__stat-icon" />
          <strong>Auto-Detect</strong>
          <span>Site Locale Aware</span>
        </div>
      </div>
    </>
  ),
  badge: "GLOBAL REACH",
  img: image1880,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image1024} 1024w, ${image1280} 1280w, ${image1500} 1500w, ${image1880} 1880w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: "AI generating image alt text, titles and descriptions automatically in Re Gallery WordPress plugin",
  primaryButton: false as const,
};

export default ai3Data;
