import React from "react";
import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import builderData from "./builder-data";

const Info: React.FC = () => {
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const width = version === "mobile" ? 260 : version === "mid" ? 347 : 698;
  const ration = 940 / 540;
  const height = Math.trunc(width / ration);
  width / ration;
  return (
    <SupportAndInfo
      title={builderData.title}
      text={builderData.text}
      additionalButtonLink={builderData.additionalButtonLink}
      id={"builder"}
      width={width}
      height={height}
      video={builderData.video}
      sizes={builderData.sizes}
      alt={builderData.alt}
      additionalButtonName={builderData.additionalButtonName}
    />
  );
};

export default Info;
