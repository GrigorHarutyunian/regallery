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

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose} onClick={handleToggle}>
      <a href={"#views"} id="fade-button" className={"nav-link"}>
        <div className={"nav-link__text"}>
          {title}
          <svg
            className={`fi-rs-angle-small-down${open ? " arrow-rotate" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill={"#fcfcfc"}
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
            />
          </svg>
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
                  <svg
                    height={16}
                    width={16}
                    style={{ marginRight: "10px" }}
                    id="Outline"
                    viewBox="0 0 24 24"
                  >
                    {val.path}
                  </svg>
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
