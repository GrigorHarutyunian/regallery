import React from "react";
import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import infoData from "./info-data";

const Info: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const width = version === "mobile" ? 260 : version === "mid" ? 347 : 698;
  const ration = 940 / 540;
  const height = Math.trunc(width / ration);
  width / ration;
  return (
    <SupportAndInfo
      title={infoData.title}
      text={infoData.text}
      id={"info"}
      width={width}
      height={height}
      video={infoData.video}
      sizes={infoData.sizes}
      alt={infoData.alt}
      additionalButtonLink={infoData.additionalButtonLink}
      additionalButtonName={infoData.additionalButtonName}
    />
  );
};

export default Info;
