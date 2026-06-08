import image480 from "../assets/sections/responsive-480x276.webp";
import image640 from "../assets/sections/responsive-640x368.webp";
import image768 from "../assets/sections/responsive-768x441.webp";
import image940 from "../assets/sections/responsive-940x540.webp";

const studioData = {
  id: "studio",
  title: "Fully Responsive WordPress Galleries",
  text: (
    <>
      Your visitors aren't all using the same device. Your galleries shouldn't
      look like they are.
      <br />
      Re Gallery ensures every gallery is fully responsive, automatically
      adapting layouts, spacing, and image presentation for any screen size.
      From large desktop monitors to mobile phones, your galleries remain fast,
      engaging, and visually stunning - helping you deliver a better user
      experience and keep visitors focused on your content.
    </>
  ),
  img: image940,
  imgSrcSet: `${image480} 480w, ${image640} 640w, ${image768} 768w, ${image940} 940w`,
  imgSizes: "(max-width: 768px) 100vw, 50vw",
  alt: `Re Gallery Studio providing expert guidance for building high-converting WordPress photo galleries`,
  additionalButtonLink: "https://wordpress.org/plugins/regallery/?preview=1",
  additionalButtonName: "Admin Demo",
};
export default studioData;
