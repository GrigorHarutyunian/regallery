import "./Footer.css";
import { footerLinksData } from "./footer-links-data";
import { socialWebsiteData } from "./social-website-data";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__links-grid">
        {footerLinksData.map((column) => (
          <div key={column.title} className="footer__column">
            <h3 className="footer__column-title">{column.title}</h3>
            <ul className="footer__column-links">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.target}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="row__social-website">
        <div className="footer-text__title footer-copyright">
          <div>
            <span>Copyright © {new Date().getFullYear()} Re Gallery.</span>{" "}
            <span>All rights reserved.</span>
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
      </div>
    </footer>
  );
};

export default Footer;
