import image480 from "../assets/sections/responsive-480x276.webp";
import image640 from "../assets/sections/responsive-640x368.webp";
import image768 from "../assets/sections/responsive-768x441.webp";
import image940 from "../assets/sections/responsive-940x540.webp";

const studioData = {
  id: "studio",
  title: "Re Gallery Studio",
  text: (
    <>
      Most photo gallery plugins stop at features. Re Gallery Studio goes
      further.
      <br />
      Instead of guessing which layout, template, or feature will work best, you
      get expert guidance from idea to implementation, built around your
      website, your product, and your goals.
      <br />
      <b>Re Gallery Studio</b> was created to bridge that gap - combining a
      powerful WordPress gallery plugin with expert guidance and support, so you
      can build galleries that actually serve your website goals.
    </>
  ),
  img: image940,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image940} 940w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: `Re Gallery Studio providing expert guidance for building high-converting WordPress photo galleries`,
  additionalButtonLink: "https://wordpress.org/plugins/regallery/?preview=1",
  additionalButtonName: "ADMIN DEMO",
};
export default studioData;
