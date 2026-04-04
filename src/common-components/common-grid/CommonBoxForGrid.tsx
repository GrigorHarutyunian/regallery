import { motion } from "framer-motion";

interface FeaturesBoxProps {
  title: string;
  description: string;
  path: string;
  globalTitle: string;
  demoLink?: string;
  img?: string;
}

const CommonBoxForGrid: React.FC<FeaturesBoxProps> = ({
  title,
  description,
  path,
}) => {
  return (
    <motion.div id={title} className="grid-item feature-box col-50">
      {title !== "none" && (
        <>
          <div className="feature-box__header">
            <svg height={55} width={55} id="Outline" viewBox="0 0 24 24">
              {path}
            </svg>
            <h3 className="section-text__title-small">{title}</h3>
          </div>
          <p className="section-text__desc">{description}</p>
        </>
      )}
    </motion.div>
  );
};

export default CommonBoxForGrid;
