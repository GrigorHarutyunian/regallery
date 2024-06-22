import { useState } from "react";
import useScrollPosition from "../../custom-hooks/useScrollPosition";
import "./Navbar.css";
import iconc from "../../assets/icons/logo-no-bg.png";

interface Link {
  title: string;
  href: string;
  target?: string;
}

const links: Link[] = [
  // { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  // { title: "Review", href: "#review" },

  { title: "Views", href: "#views" },
  {
    title: "Download",
    href: "https://wordpress.org/plugins/regallery/",
    target: "_blank",
  },
  { title: "Support", href: "#support" },
  // { title: "Pricing", href: "#pricing" },
  // { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isSticky: boolean = useScrollPosition();

  return (
    <div
      className={`nav${isSticky ? " nav-stickey" : ""}${
        menuOpen ? " nav-open" : ""
      }`}
    >
      <div className={"nav-content"}>
        <a
          href="#home"
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          <div className={"nav-logo"}>
            <img src={iconc} alt="Logo" className={"nav-logo__icon"} />
            <span>eGallery</span>
          </div>
        </a>

        <nav className={"nav-links__container"}>
          {links &&
            links.map((link, i) => (
              <a
                onClick={() => setMenuOpen(!menuOpen)}
                className={"nav-link"}
                href={link.href}
                target={link.target}
                key={i}
              >
                <div className={"nav-link__text"}>{link.title}</div>
                <div className={"nav-link__background"} />
              </a>
            ))}
        </nav>

        <div
          className={"nav-menu__icon"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
