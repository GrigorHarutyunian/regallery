import { motion } from "framer-motion";

interface FeaturesBoxProps {
  title: string;
  description: string;
  path: string;
  globalTitle: string;
}

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

const CommonBoxForGrid: React.FC<FeaturesBoxProps> = ({
  title,
  description,
  path,
  globalTitle,
}) => {
  return (
    <motion.div id={title} className="feature-box col-50">
      <svg
        style={{ marginBottom: "5px" }}
        height={41}
        width={41}
        id="Outline"
        viewBox="0 0 24 24"
      >
        {path}
      </svg>

      <h3 className="section-text__title-small">{title}</h3>
      <p className="section-text__desc">{description}</p>
      <a href="">
        <div
          className={`go-corner ${
            globalTitle === "Gallery views" ? "showed" : "hidden"
          }`}
        >
          <span>DEMO</span>
        </div>
      </a>
    </motion.div>
  );
};

export default CommonBoxForGrid;
