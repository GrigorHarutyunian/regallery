import image480 from "../assets/sections/responsive-480x276.webp";
import image640 from "../assets/sections/responsive-640x368.webp";
import image768 from "../assets/sections/responsive-768x441.webp";
import image1024 from "../assets/sections/responsive-1024x588.webp";
import image1280 from "../assets/sections/responsive-1280x735.webp";
import image1500 from "../assets/sections/responsive-1500x862.webp";
import image1880 from "../assets/sections/responsive-1880x1080.webp";
import CheckIcon from "@mui/icons-material/Check";

const studioData = {
  id: "studio",
  title: "Your product gallery should be working harder than this",
  text: (
    <>
      Turn any WooCommerce product into a gallery item - with prices,
      Al-generated descriptions, and layouts that make shoppers stay longer and
      buy more.
      <div className="grid-item__list">
        <div className="grid-item__list-item">
          <span className="grid-item__check" aria-hidden="true">
            <CheckIcon />
          </span>
          Pull products directly from WooCommerce
        </div>
        <div className="grid-item__list-item">
          <span className="grid-item__check" aria-hidden="true">
            <CheckIcon />
          </span>
          Al alt text for every product image
        </div>
        <div className="grid-item__list-item">
          <span className="grid-item__check" aria-hidden="true">
            <CheckIcon />
          </span>
          11 layouts, including mosaic & carousel
        </div>
        <div className="grid-item__list-item">
          <span className="grid-item__check" aria-hidden="true">
            <CheckIcon />
          </span>
          Direct checkout links on every item
        </div>
      </div>
    </>
  ),
  img: image1880,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image1024} 1024w, ${image1280} 1280w, ${image1500} 1500w, ${image1880} 1880w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: `Re Gallery Studio providing expert guidance for building high-converting WordPress photo galleries`,
  additionalButtonLink: "https://wordpress.org/plugins/regallery/?preview=1",
  additionalButtonName: "Admin Demo",
};
export default studioData;
