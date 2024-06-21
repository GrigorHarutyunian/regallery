import "./Footer.css";
import(
  "https://cdn-uicons.flaticon.com/2.4.2/uicons-brands/css/uicons-brands.css"
);
import { socialWebsiteData } from "./social-website-data";
const Footer: React.FC = () => {
  return (
    <footer>
      <div id="contact" className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">Felisity</div>
            <div className="footer-text__body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </div>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#home">Services</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Subscribe to get latest updates and new on whiskers
            </div>
            {/* <div className="footer-input">
              <input type="text" name="email" placeholder="Email id" />
              <div className="footer-input__icon"></div>
            </div> */}
          </div>
        </div>

        <div className="row__social-website">
          <div className="footer-text__title icons__title">
            Follow us on social media
          </div>
          <div className="footer__social-website-icons">
            {socialWebsiteData.map((websiteData) => {
              return (
                <a
                  style={{ textDecoration: "none" }}
                  href={websiteData.url}
                  target="blank"
                >
                  <i
                    className={websiteData.className}
                    style={{ color: `${websiteData.color}`, fontSize: "24px" }}
                  ></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
