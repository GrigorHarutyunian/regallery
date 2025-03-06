import React from "react";
import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import infoData from "./info-data";

const Info: React.FC = () => {
  let text = infoData.text.split("LIVE DEMO");
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const width = version === "mobile" ? 260 : version === "mid" ? 347 : 698;
  // const ration = 595 / 402;
  const ration = 940 / 540;
  const height = Math.trunc(width / ration);
  width / ration;
  return (
    <SupportAndInfo
      title={infoData.title}
      text={
        <>
          {text[0]} <span style={{ color: "rgb(0 0 0)" }}>LIVE DEMO</span>{" "}
          {text[1]}
        </>
      }
      id={"info"}
      width={width}
      height={height}
      video={infoData.video}
      sizes={infoData.sizes}
      alt={infoData.alt}
    />
  );
};

export default Info;
