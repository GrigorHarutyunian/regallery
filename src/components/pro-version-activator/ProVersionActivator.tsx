import React, { useCallback, useState, useEffect } from "react";
import { useProVersionActivatorContext } from "../../contexts/ProVersionActivatorModalContext";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import "./proVersionActivator.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ProVersionActivator: React.FC = () => {
  const { isPaymentModalOpen, closePaymentModal, openPaymentModal } =
    useProVersionActivatorContext();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [successMessage, setSuccessMessage] = useState<string | undefined>(
    undefined
  );
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const payment = urlParams.get("payment");

    if (payment === "success") {
      setStatus("success");
      setSuccessMessage(
        "Thanks for your purchase! We've sent your license key to your email."
      );
    } else if (payment === "cancel") {
      setStatus("error");
      setErrorMessage("Payment cancelled.");
    }
    if (payment) {
      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
      if (!isPaymentModalOpen) {
        openPaymentModal();
      }
    }
  }, [isPaymentModalOpen, openPaymentModal]);

  const onDialogClosed = useCallback(() => {
    setStatus("idle");
    setSuccessMessage(undefined);
    setErrorMessage(undefined);
  }, []);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isPaymentModalOpen}
      onClose={closePaymentModal}
      disableScrollLock
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isPaymentModalOpen} onExited={onDialogClosed}>
        <div
          onClick={closePaymentModal}
          className="pro-version-activator__modal"
        >
          <div onClick={closePaymentModal}>
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
          <div
            onClick={(e) => e.stopPropagation()}
            className="pro-version-activator__content"
          >
            {status === "success" && (
              <div
                className={
                  "pro-version-activator__result pro-version-activator__result_success"
                }
              >
                <CheckCircleOutlineIcon />
                <p>{successMessage}</p>
              </div>
            )}
            {status === "error" && (
              <div
                className={
                  "pro-version-activator__result pro-version-activator__result_error"
                }
              >
                <ErrorOutlineIcon />
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ProVersionActivator;
