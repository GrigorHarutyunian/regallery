import React from "react";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import infoData from "./info-data";
const Info: React.FC = () => {
  let text = infoData.text.split("LIVE DEMO");
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
      img={infoData.img}
    />
  );
};

export default Info;
