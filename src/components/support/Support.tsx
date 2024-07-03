import React from "react";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import supportData from "./support-data";
const Support: React.FC = () => {
  const parts = supportData.text.split("Support Forum.");
  return (
    <SupportAndInfo
      title={supportData.title}
      text={
        <>
          {parts[0]}
          <a
            style={{
              color: "#0e4a70",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            href="https://wordpress.org/support/plugin/regallery/"
            target="_blank"
          >
            Support Forum.
          </a>
          <br></br>
          {parts[1]}
        </>
      }
      id={"support"}
      img={supportData.img}
    />
  );
};

export default Support;
