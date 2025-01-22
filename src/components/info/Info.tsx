import React from "react";
import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import infoData from "./info-data";

const Info: React.FC = () => {
  let text = infoData.text.split("LIVE DEMO");
  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const width = version === "mobile" ? 298 : version === "mid" ? 397 : 595;
  const ration = 595 / 402;
  const height = Math.trunc(width / ration);
  width / ration;
  return (
    <SupportAndInfo
      title={infoData.title}
      text={
        <>
          {text[0]} <span style={{ color: "#0D4A70" }}>LIVE DEMO</span>{" "}
          {text[1]}
        </>
      }
      id={"info"}
      width={width}
      height={height}
      lottiesData={infoData.lottiesData}
    />
  );
};

export default Info;
