import React, { useEffect, useState } from "react";
import "./InteractiveAIIcon.css";
import { Popover } from "@mui/material";
const InteractiveAIIcon: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [popoverKey, setPopoverKey] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (anchorEl) {
        setPopoverKey((prev) => prev + 1);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [anchorEl]);

  const open = Boolean(anchorEl);
  const id = open ? "ai-popover" : undefined;

  return (
    <div className="interactive-ai-icon">
      <button
        className={`interactive-ai-icon__button ${!open ? "pulse" : ""}`}
        onClick={handleClick}
      >
        {open ? (
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CloseIcon"
            width={30}
            height={30}
          >
            <path
              fill="#ffffff"
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
        ) : (
          <svg
            className="ai-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={30}
            height={30}
          >
            <path
              fill="#ffffff"
              d="m19.5,9c-.46,0-.874-.28-1.045-.708l-.853-1.911-1.914-.897c-.424-.179-.697-.597-.688-1.057.009-.46.297-.868.727-1.031l1.948-.738.78-1.951c.171-.427.584-.708,1.045-.708s.874.28,1.045.708l.785,1.963,1.963.785c.427.171.708.584.708,1.045s-.28.874-.708,1.045l-1.963.785-.785,1.963c-.171.427-.584.708-1.045.708Zm3.162,1.473c-1.222.505-2.618.675-4.076.388-2.72-.536-4.911-2.727-5.447-5.447-.287-1.458-.118-2.854.388-4.076.264-.639-.204-1.338-.895-1.338h-7.632C2.239,0,0,2.239,0,5v14c0,2.761,2.239,5,5,5h14c2.761,0,5-2.239,5-5v-7.632c0-.691-.699-1.159-1.338-.895Zm-8.964,8.527c-.443,0-.831-.294-.952-.72l-.643-2.28h-5.206l-.643,2.28c-.12.426-.509.72-.952.72h0c-.654,0-1.128-.624-.953-1.254l3.091-11.108c.141-.608.541-1.12,1.098-1.405.568-.292,1.22-.31,1.839-.05.587.246,1.037.817,1.204,1.535l3.071,11.029c.175.63-.298,1.254-.953,1.254Zm5.302-1c0,.552-.448,1-1,1s-1-.448-1-1v-4.912c0-.552.448-1,1-1s1,.448,1,1v4.912ZM9.39,7.165l-1.929,6.835h4.077l-1.929-6.835c-.029-.114-.191-.114-.219,0Z"
            />
          </svg>
        )}
      </button>
      <Popover
        key={popoverKey}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{
          mt: -1,
          transform: {
            xs: "translateX(0)",
            sm: "translateX(-12px)",
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "rgba(153, 153, 153, 0.2) 0px 0px 20px 10px",
          },
        }}
      >
        <div className="ai-popover__content">
          <p className="interactive-ai-icon__popover-title">
            💡 Smart Content Assistant
          </p>
          <p className="interactive-ai-icon__popover-description">
            Click below to preview how AI can help you generate image
            descriptions and alt text in seconds.
          </p>
          <p>
            <span style={{ marginRight: 8 }}>👉</span>
            <a className="interactive-ai-icon__popover-link" href="#">
              Preview admin
            </a>
          </p>
        </div>
      </Popover>
    </div>
  );
};
export default InteractiveAIIcon;
