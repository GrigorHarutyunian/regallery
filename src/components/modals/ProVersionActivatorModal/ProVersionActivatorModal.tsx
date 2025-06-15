import * as React from "react";
import { useState } from "react";
import { useProVersionActivatorModal } from "../../../contexts/ProVersionActivatorModalContext";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import FreeTrialContent from "./FreeTrialContent";
import PaymentContent from "./PaymentContent";
import "./ProVersionActivator.css";

const siteKey = "6Ldm_VsrAAAAALyx-Z3GOeBAMsjx772DUw0YQfo6";

type Status = "initial" | "success" | "error";

const ProVersionActivator: React.FC = () => {
  const { modalState, handleCloseModal } = useProVersionActivatorModal();
  const { isOpen, modalType } = modalState;

  const [email, setEmail] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("initial");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isPaymentResponseOk, setIsPaymentResponseOk] =
    useState<boolean>(false);
  const [currency, setCurrency] = useState("USD");

  const resetState = () => {
    setEmail("");
    setDomain("");
    setCaptchaToken(null);
    setLoading(false);
    setStatus("initial");
    setErrorMessage("");
    setIsPaymentResponseOk(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("initial");

    try {
      const response = await fetch(
        "https://regallery.team/core/wp-json/reacgcore/v2/user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "hak.hakobian@gmail.com",
            domain: "https://wp.org",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        modalType !== "payment" && setStatus("error");
        setErrorMessage(data?.message || "An unexpected error occurred.");
        setIsPaymentResponseOk(true);
      } else {
        setStatus("success");
        setIsPaymentResponseOk(false);
      }
    } catch {
      modalType !== "payment" && setStatus("error");
      setErrorMessage("Network error. Please try again.");
      setIsPaymentResponseOk(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleCloseModal}
      disableScrollLock
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen} onExited={resetState}>
        <div
          onClick={handleCloseModal}
          className="pro-version-activator__modal"
        >
          <div onClick={handleCloseModal}>
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
            {modalType === "freeTrial" ? (
              <FreeTrialContent
                email={email}
                domain={domain}
                captchaToken={captchaToken}
                status={status}
                errorMessage={errorMessage}
                loading={loading}
                onEmailChange={setEmail}
                onDomainChange={setDomain}
                onCaptchaChange={setCaptchaToken}
                onSubmit={handleFormSubmit}
                setStatus={setStatus}
                siteKey={siteKey}
              />
            ) : null}
            {modalType === "payment" ? (
              <PaymentContent
                email={email}
                domain={domain}
                captchaToken={captchaToken}
                loading={loading}
                currency={currency}
                isResponseOk={isPaymentResponseOk}
                setIsResponseOk={setIsPaymentResponseOk}
                onEmailChange={setEmail}
                onDomainChange={setDomain}
                onCaptchaChange={setCaptchaToken}
                onSubmit={handleFormSubmit}
                setCurrency={setCurrency}
                setStatus={setStatus}
                status={status}
                errorMessage={errorMessage}
                siteKey={siteKey}
              />
            ) : null}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ProVersionActivator;
