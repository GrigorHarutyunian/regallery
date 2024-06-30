import { motion } from "framer-motion";

interface FeaturesBoxProps {
  title: string;
  description: string;
  className: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const CommonBoxForGrid: React.FC<FeaturesBoxProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <motion.div variants={item} id={title} className="feature-box col-50">
      <i className={className} style={{ color: "#FDC120", fontSize: "41px" }} />

      <div className="section-text__title-small">{title}</div>
      <div className="section-text__desc">
        {description.includes("Coming soon") ? (
          <>
            {description.replace("Coming soon", "")}
            <span style={{ fontStyle: "italic" }}>Coming soon</span>
          </>
        ) : (
          description
        )}
      </div>
    </motion.div>
  );
};

export default CommonBoxForGrid;
