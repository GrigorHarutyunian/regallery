import "./Footer.css";
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
        {/* <div className="copyright">Coded by Zabeeh.</div> */}

        <div className="row__social-website">
          {socialWebsiteData.map((websiteData) => {
            return (
              <a href={websiteData.url} target="_blank">
                <websiteData.tagName
                  fontSize="large"
                  style={{ color: `${websiteData.color}`, cursor: "pointer" }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
