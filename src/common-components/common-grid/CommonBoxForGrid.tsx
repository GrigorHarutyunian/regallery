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
  globalTitle,
  img,
  demoLink,
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
      {globalTitle === "Gallery views" && (
        <a href={demoLink} target="_blank">
          <div className={`absolute_btn`}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 97 42"
              style={{ transform: "scale(2)" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="arrow"
                stroke="none"
                strokeWidth="1"
                fill="#000000000"
                fillRule="evenodd"
              >
                <path
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                  fill="#000000000"
                ></path>
              </g>
            </svg>
          </div>
        </a>
      )}
      {globalTitle === "Gallery views" && (
        <div className="back">
          <img src={img} alt="as" />
        </div>
      )}
    </motion.div>
  );
};

export default CommonBoxForGrid;
