import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import iconc from "../../assets/icons/logo.webp";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import SubMenu from "./SubMenu";
import { viewsDataSubMenu } from "../views/views-data-subMenu";
import WindowWidthContext from "../../contexts/WindowWidthContext";

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
    subMenuItems: viewsDataSubMenu,
  },
  { id: 2, title: "Features", href: "#features" },

  {
    id: 3,
    title: "Demo",

    href: "https://regallery.team/core/demo/",
    target: "_blank",
  },
  { id: 4, title: "Pricing", href: "#pricing" },
  { id: 5, title: "FAQ", href: "#faq" },
  { id: 6, title: "Contact us", href: "#support" },

  {
    id: 7,
    title: "Get Started",
    href: "#pricing",
    type: "button",
  },
];

("Get unlimited access to the pre-built templates for less than$2/month.");
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const windowWitdth = useContext(WindowWidthContext);

  const version = windowWitdth.version;

  useEffect(() => {
    if (version !== "mobile") return;
    if (!menuOpen) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div
      className={`nav${menuOpen ? " nav-open" : ""}${
        localStorage.getItem("bannerOpen") ? " closed-banner" : ""
      }`}
    >
      <div className={"nav-content"}>
        <a
          href="#home"
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          <div className={"nav-logo"}>
            <img height={50} width={50} src={iconc} alt="ReGallery" />

            <div style={{ marginTop: "13px", marginLeft: "4px" }}>eGallery</div>
          </div>
        </a>
        <nav className={"nav-links__container"}>
          {links.map((link) =>
            link.type === "menu" ? (
              <SubMenu
                key={link.id}
                onClick={(e: any) => {
                  e.stopPropagation();
                  setMenuOpen(!menuOpen);
                }}
                title={link.title}
                items={link.subMenuItems}
                href={link.href}
                version={version}
              />
            ) : (
              <a
                key={link.id}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Nav link clicked:", link.title);
                  setMenuOpen(!menuOpen);
                }}
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
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggering other click events
            console.log("Menu icon clicked");
            setMenuOpen(!menuOpen);
          }}
        >
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
