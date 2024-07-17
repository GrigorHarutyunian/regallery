import "./Footer.css";
import { socialWebsiteData } from "./social-website-data";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="row__social-website">
        <div className="footer-text__title icons__title">
          Copyright © 2024 ReGallery. All rights reserved.
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
                  <path d={websiteData.path} fill="#0e4a70" />
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
