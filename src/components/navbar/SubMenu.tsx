import { useState } from "react";
import "./Navbar.css";

const SubMenu = ({ title, items, onClick, href }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <a href={"#views"} id="fade-button" className={"nav-link"}>
        <div className={"nav-link__text"}>
          {title}
          <i
            className={`fi fi-rs-angle-small-down${
              open ? " arrow-rotate" : ""
            }`}
          ></i>
        </div>
        <div className={"nav-link__background"} />
      </a>
      {
        <div
          onClick={() => {
            handleClose();
            onClick();
          }}
          className={`dropdown-menu ${open ? "open" : ""}`}
        >
          <div className="empty__space"></div>
          {items.map((val: any, i: any) => (
            <div key={i} className="menuItem__div">
              <a href={href} className="nav-link menu">
                <div className="nav-link__text submenu">
                  <i
                    style={{
                      marginRight: "5px",
                      fontSize: "1rem",
                      height: "18px",
                    }}
                    className={val.className}
                  ></i>{" "}
                  {val.title}
                </div>
                <div className="nav-link__background" />
              </a>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default SubMenu;
