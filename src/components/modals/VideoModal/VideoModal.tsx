import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./VideoModal.css";
interface VideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      disableScrollLock
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <div onClick={handleClose} className="modal-content">
          <div onClick={handleClose}>
            <CloseIcon
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                verticalAlign: "large",
                width: "30px",
                height: "30px",
                marginBottom: "2px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RldoAkceHTQ?si=HCCyqe5X3tgs211B&autoplay=1&rel=0"
              title="Photo Gallery Re gallery"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default VideoModal;
