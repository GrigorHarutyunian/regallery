import React from "react";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import supportData from "./support-data.json";
const Support: React.FC = () => {
  const parts = supportData.text.split("Support Forum");
  return (
    <SupportAndInfo
      title={supportData.title}
      text={
        <>
          {parts[0]}
          <a
            href="https://wordpress.org/support/plugin/regallery/"
            target="_blank"
          >
            Support Forum
          </a>
          {parts[1]}
        </>
      }
      id={"support"}
    />
  );
};

export default Support;
