import { useState } from "react";
import "./Navbar.css";

const SubMenu = ({ title, items, href, onClick }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <a id="fade-button" className={"nav-link"}>
        <div className={"nav-link__text"}>{title}</div>
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
          {items.map((val: any, i: any) => (
            <div key={i} className="menuItem__div">
              <a href={href} className="nav-link menu">
                <div className="nav-link__text">{val}</div>
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
