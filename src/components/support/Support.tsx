import React from "react";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import supporData from "./support-data.json";
const Support: React.FC = () => {
  return (
    <SupportAndInfo
      title={supporData.title}
      text={supporData.text}
      id={"support"}
    />
  );
};

export default Support;
