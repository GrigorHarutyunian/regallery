import React from "react";
import { useContext } from "react";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import SupportAndInfo from "../../common-components/common-support-Info/SupportAndInfo";
import supportData from "./support-data";

const Support: React.FC = () => {
  const parts = supportData.text.split("Support Forum.");

  const windowWitdth = useContext(WindowWidthContext);
  const version = windowWitdth.version;
  const width = version === "mobile" ? 208 : version === "mid" ? 277.3333 : 416;
  const ration = 416 / 411;
  const height = width / ration;
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
      width={width}
      height={height}
      id={"support"}
      img={supportData.img}
      sizes={supportData.sizes}
      alt={supportData.alt}
    />
  );
};

export default Support;
