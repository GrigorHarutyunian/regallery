import "./Footer.css";
import(
  "https://cdn-uicons.flaticon.com/2.4.2/uicons-brands/css/uicons-brands.css"
);
import { socialWebsiteData } from "./social-website-data";
const Footer: React.FC = () => {
  return (
    <footer className="row__social-website">
      <div className="footer-text__title icons__title">
        Copyright © 2024 ReGallery.All rights reserved .
      </div>
      <div className="footer__social-website-icons">
        {socialWebsiteData.map((websiteData) => {
          return (
            <a
              style={{ textDecoration: "none", display: "contents" }}
              href={websiteData.url}
              target="blank"
            >
              <i
                className={websiteData.className}
                style={{
                  fontSize: "17px",
                  color: "#0e4a70",
                  display: "contents",
                }}
              ></i>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
