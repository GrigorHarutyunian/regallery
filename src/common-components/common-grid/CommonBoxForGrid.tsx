import { motion } from "framer-motion";

interface FeaturesBoxProps {
  title: string;
  description: string;
  path: string;
  globalTitle: string;
  demoLink?: string;
}

const CommonBoxForGrid: React.FC<FeaturesBoxProps> = ({
  title,
  description,
  path,
  globalTitle,
  demoLink,
}) => {
  const text = "Demo".split("");

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
      <a href={demoLink || "#"}>
        <div
          className={`go-corner ${
            globalTitle === "Gallery views" ? "showed" : "hidden"
          }`}
        >
          <div className="span">
            {text.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="17"
            height="17"
          >
            <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm5.629-9.104l-4.629,4.236v-4.132H6v-2h7V7l4.629,4.236c.494,.443,.494,1.217,0,1.66Z" />
          </svg>
        </div>
      </a>
    </motion.div>
  );
};

export default CommonBoxForGrid;
