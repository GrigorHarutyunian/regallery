import { useState } from "react";
// import useScrollPosition from "../../custom-hooks/useScrollPosition";
import "./Navbar.css";
import iconc from "../../assets/icons/logo.webp";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import SubMenu from "./SubMenu";
import { viewsDataSubMenu } from "../views/views-data-subMenu";

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

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [bannerOpen, setBannerOpen] = useState<boolean>(
    localStorage.getItem("bannerOpen") !== "false"
  );

  const closeBanner = () => {
    setBannerOpen(false);
    localStorage.setItem("bannerOpen", "false");
  };

  return (
    <div className={`nav${menuOpen ? " nav-open" : ""}`}>
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
      <div className={`nav-banner ${bannerOpen ? "" : "closed"}`}>
        <div className="nav-banner-content">
          <div className="nav-banner-content-left">
            <div className="banner-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 64 64"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="hp fi"
              >
                <path
                  fill="#a7c957"
                  d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                ></path>
              </svg>
            </div>
            <p>
              Get unlimited access to the best ReGallery templates for less than
              $2/month. <a href="#pricing">Become a member</a>
            </p>
          </div>
          <div onClick={closeBanner} className="close-banner">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CloseIcon"
              width="18"
              height="18"
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
