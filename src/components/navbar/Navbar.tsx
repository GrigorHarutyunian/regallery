import { useState } from "react";
import { Container } from "react-bootstrap";
import useScrollPosition from "../../custom-hooks/useScrollPosition";
import "./Navbar.css";

interface Link {
  title: string;
  href: string;
}

const links: Link[] = [
  { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  { title: "Services", href: "#services" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const scrollY = useScrollPosition();
  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <Container>
      <div
        className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
          menuOpen ? " nav-open" : ""
        }`}
      >
        <div className="nav-content">
          <div className="nav-logo">Felisity</div>

          <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <a className="nav-link" href={link.href} key={i}>
                  <div className="nav-link__text">{link.title}</div>
                  <div className="nav-link__background" />
                </a>
              ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div />
            <div />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
