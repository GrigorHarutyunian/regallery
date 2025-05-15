import "./Footer.css";
import { socialWebsiteData } from "./social-website-data";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="row__social-website">
        <div className="footer-text__title footer-copyright">
          <span>Copyright © 2025 Re Gallery.</span>{" "}
          <span>All rights reserved.</span>
        </div>
        <div className="footer__social-website-icons">
          {socialWebsiteData.map((websiteData) => {
            return (
              <a
                key={websiteData.url}
                style={{ textDecoration: "none", display: "contents" }}
                href={websiteData.url}
                target="blank"
              >
                <svg width="25" height="25">
                  <title>{websiteData.title}</title>
                  <path d={websiteData.path[0]} fill="#ffffffff" />
                  {!websiteData.path[1] || (
                    <path d={websiteData.path[1]} fill="#ffffffff" />
                  )}
                  {!websiteData.circle || (
                    <circle
                      cx={websiteData.circle.cx}
                      cy={websiteData.circle.cy}
                      r={websiteData.circle.r}
                    />
                  )}
                </svg>
              </a>
            );
          })}
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
