import video from "../assets/sections/hero.mp4";
import poster from "../assets/sections/hero.webp";
import { dataDemo } from "../components/demo/demo-data";
import TemplatesCount from "../components/templates-count/TemplatesCount";
import type { SecondaryButtonClickHandlers } from "../types/SectionDTO";
const allLayoutsCount = dataDemo.length;
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
const heroData = {
  id: "hero",
  className: "hero-section",
  title: (
    <>
      Your images speak
      <br></br>
      <i>In your site's language</i>
    </>
  ),
  text: (
    <>
      Upload your photos and Re&nbsp;Gallery AI generates the alt text, titles,
      captions, and SEO descriptions automatically across{" "}
      <b>
        {allLayoutsCount}&nbsp;responsive layouts, <TemplatesCount />
        &nbsp;templates.
      </b>{" "}
      Works with Elementor, Gutenberg, Divi, and more.
      <br />
      <i>No coding required.</i>
    </>
  ),
  badge: "WORDPRESS GALLERY PLUGIN",
  video: video,
  poster: poster,
  alt: `AI-powered WordPress gallery builder creating responsive photo galleries with automatic alt text and captions`,
  secondaryButton: {
    onClick: ({ openVideoModal }: SecondaryButtonClickHandlers) =>
      openVideoModal(),
    label: (
      <>
        <PlayCircleFilledIcon
          style={{
            verticalAlign: "middle",
            width: "25px",
            height: "19px",
            marginBottom: "2px",
            color: "var(--re-tertiary-color, #2540cc)",
          }}
        />
        Watch Intro
      </>
    ),
  },
};
export default heroData;
