import type { FloatingSectionData } from "../common-components/floating-section/FloatingSection";

const supportData: FloatingSectionData = {
  id: "support",
  title: "Contact us",
  text: (
    <>
      We are ready to help you 24/7.
      <br />
      In case you have any questions, suggestions, or if you've found a bug,
      please visit our
    </>
  ),
  primaryButton: {
    type: "download",
    href: "https://wordpress.org/support/plugin/regallery/",
    target: "_blank",
    rel: "noreferrer noopener",
    track: "visit_support_forum",
    location: "support",
    downloadVersion: "support",
  },
};

export default supportData;
