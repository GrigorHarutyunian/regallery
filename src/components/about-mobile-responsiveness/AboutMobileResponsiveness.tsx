import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import aboutMobileResponsivenessData from "./aboutMobileResponsiveness-data";

const AboutMobileResponsiveness: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const width = version === "mobile" ? 208 : version === "mid" ? 277 : 698;
  const ration = 940 / 540;
  const height = Math.round(width / ration);

  return (
    <SupportAndInfo
      title={aboutMobileResponsivenessData.title}
      text={aboutMobileResponsivenessData.text}
      id={"aboutMobileResponsiveness"}
      width={width}
      height={height}
      img={aboutMobileResponsivenessData.img}
      sizes={aboutMobileResponsivenessData.sizes}
      alt={aboutMobileResponsivenessData.alt}
    />
  );
};

export default AboutMobileResponsiveness;
