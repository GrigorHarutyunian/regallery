import * as React from "react";
import Menu from "@mui/material/Menu";

import Fade from "@mui/material/Fade";
import "./Navbar.css";

const SubMenu = ({ title, items, href, onClick }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    onClick();
    setAnchorEl(null);
  };

  return (
    <>
      <a
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={"nav-link"}
      >
        <div className={"nav-link__text"}>{title}</div>
        <div className={"nav-link__background"} />
      </a>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        disableScrollLock={true}
        PaperProps={{
          style: {
            width: anchorEl ? anchorEl.offsetWidth : undefined,
          },
        }}
      >
        {items.map((val: any, i: any) => {
          return (
            <div onClick={handleClose} key={i} className="menuItem__div">
              <a href={href} className={"nav-link menu"}>
                <div className={"nav-link__text"}>{val}</div>
                <div className={"nav-link__background"} />
              </a>
            </div>
          );
        })}
      </Menu>
    </>
  );
};

export default SubMenu;
