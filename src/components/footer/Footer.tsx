import "./Footer.css";
import { socialWebsiteData } from "./social-website-data";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="row__social-website">
        <div className="footer-text__title footer-copyright">
          <div>
            <span>Copyright © {new Date().getFullYear()} Re Gallery.</span>{" "}
            <span>All rights reserved.</span>
          </div>
          <div className="footer-text__links">
            <a
              href="https://regallery.team/core/terms-conditions/"
              target="_blank"
            >
              Terms & Conditions
            </a>
            &nbsp; &nbsp;
            <a
              href="https://regallery.team/core/privacy-policy/"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
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
