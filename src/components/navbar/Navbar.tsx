import { useState, useEffect, useContext, useMemo } from "react";
import "./Navbar.css";
import iconc from "../../assets/icons/logo.webp";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import SubMenu from "./SubMenu";
import { viewsDataSubMenu } from "../views/views-data-subMenu";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import scrollToTarget from "../../common-components/scrollToTarget";
interface Link {
  id: number;
  title: string;
  href: string;
  target?: string;
  type?: string;
  subMenuItems?: Array<any>;
  external?: boolean;
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
    external: true,
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

  const handleMenuClick = (e: React.MouseEvent, ref: any) => {
    e.preventDefault();
    const currentPath = window.location.href;

    if (currentPath.endsWith(ref)) {
      return;
    }

    const container = document.querySelector(
      ".demo_live_container"
    ) as HTMLElement;

    if (container.offsetHeight > 0) {
      scrollToTarget(ref);
      if (typeof ref === "string" && ref.startsWith("#")) {
        setTimeout(() => {
          if (typeof ref === "string" && ref.startsWith("#")) {
            history.replaceState(null, "", ref);
          }
        }, 1);
      }
    } else {
      const intervalId = setInterval(() => {
        if (container.offsetHeight > 0) {
          scrollToTarget(ref);
          if (typeof ref === "string" && ref.startsWith("#")) {
            setTimeout(() => {
              if (typeof ref === "string" && ref.startsWith("#")) {
                history.replaceState(null, "", ref);
              }
            }, 1);
          }
          clearInterval(intervalId);
        }
      }, 500);
    }
  };

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
                onClick={(e) => {
                  !link.external && handleMenuClick(e, link.href);
                  if (version === "mobile") {
                    setMenuOpen(!menuOpen);
                  }
                }}
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
