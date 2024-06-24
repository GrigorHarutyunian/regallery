import React from "react";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import infoData from "./info-data";
const Info: React.FC = () => {
  return (
    <SupportAndInfo
      title={infoData.title}
      text={infoData.text}
      id={"info"}
      img={infoData.img}
    />
  );
};

export default Info;
