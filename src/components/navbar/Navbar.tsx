import { useState } from "react";
// import useScrollPosition from "../../custom-hooks/useScrollPosition";
import "./Navbar.css";
import iconc from "../../assets/icons/logo.png";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import SubMenu from "./SubMenu";
import viewData from "../../components/views/views-data.json";

interface Link {
  id: number;
  title: string;
  href: string;
  target?: string;
  type?: string;
  subMenuItems?: Array<any>;
}

const links: Link[] = [
  {
    id: 1,
    title: "Gallery views",
    href: "#views",
    type: "menu",
    subMenuItems: viewData,
  },
  { id: 2, title: "Features", href: "#features" },
  { id: 3, title: "FAQ", href: "#faq" },
  { id: 4, title: "Contact us", href: "#support" },
  {
    id: 5,
    title: "Download",
    href: "https://wordpress.org/plugins/regallery/",
    target: "_blank",
    type: "button",
  },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // const isSticky: boolean = useScrollPosition();

  return (
    <div className={`nav${menuOpen ? " nav-open" : ""}`}>
      <div className={"nav-content"}>
        <a
          href="#home"
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          <div className={"nav-logo"}>
            <img src={iconc} alt="Logo" className={"nav-logo__icon"} />
            <div style={{ marginTop: "13px", marginLeft: "4px" }}>eGallery</div>
          </div>
        </a>
        <nav className={"nav-links__container"}>
          {links.map((link) =>
            link.type === "menu" ? (
              <SubMenu
                key={link.id}
                onClick={() => setMenuOpen(!menuOpen)}
                title={link.title}
                items={link.subMenuItems}
              />
            ) : (
              <a
                key={link.id}
                onClick={() => setMenuOpen(!menuOpen)}
                className={"nav-link"}
                href={link.href}
                target={link.target}
              >
                {link.type === "button" ? (
                  <DownloadBtn
                    className={"download-btn download-btn__navbar"}
                  />
                ) : (
                  <>
                    <div className={"nav-link__text"}>{link.title}</div>
                    <div className={"nav-link__background"} />
                  </>
                )}
              </a>
            )
          )}
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
