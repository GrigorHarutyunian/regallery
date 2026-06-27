import { useState, useEffect, useContext, useMemo } from "react";
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
  external?: boolean;
  badge?: string;
}

const links: Link[] = [
  {
    id: 1,
    title: "Gallery layouts",
    href: "/#gallery_layouts",
    type: "menu",
    subMenuItems: viewsDataSubMenu,
  },

  {
    id: 3,
    title: "Demo",
    href: "https://regallery.team/core/demo/",
    target: "_blank",
    external: true,
  },
  { id: 4, title: "Re Gallery AI", href: "/ai" },
  { id: 5, title: "Pricing", href: "/pricing" },
  {
    id: 6,
    title: "Blog",
    href: "https://regallery.team/core/blog/",
    target: "_blank",
    external: true,
  },
  { id: 7, title: "Contact us", href: "/#support" },

  {
    id: 8,
    title: "Get Started",
    href: "/pricing",
    type: "button",
  },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const windowWitdth = useContext(WindowWidthContext);

  const version = useMemo(() => windowWitdth.version, [windowWitdth.version]);
  useEffect(() => {
    if (version !== "mobile") return;

    const prevOverflow = document.body.style.overflowY;

    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = prevOverflow;
    };
  }, [menuOpen, version]);

  return (
    <div
      className={`nav${menuOpen ? " nav-open" : ""}${
        localStorage.getItem("topBannerOpen") ? " closed-banner" : ""
      }`}
    >
      <div className={"nav-content"}>
        <a href="/" style={{ textDecoration: "none", display: "inline-flex" }}>
          <div className={"nav-logo"}>
            <img height={50} width={50} src={iconc} alt="Re Gallery" />

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
                href={link.href}
                version={version}
              />
            ) : (
              <a
                key={link.id}
                className={"nav-link"}
                target={link.target}
                href={link.href}
                data-track={
                  link.type === "button" ? "start_free_trial" : undefined
                }
                data-location={link.type === "button" ? "navbar" : undefined}
                onClick={() => {
                  if (version === "mobile") {
                    setMenuOpen(false);
                  }
                }}
              >
                {link.type === "button" ? (
                  <DownloadBtn
                    className={"download-btn download-btn__navbar"}
                    location="navbar"
                  />
                ) : (
                  <>
                    <div className={"nav-link__text"}>
                      {link.title}
                      {link.badge && (
                        <span className="nav-link__badge">{link.badge}</span>
                      )}
                    </div>
                    <div className={"nav-link__background"} />
                  </>
                )}
              </a>
            ),
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
