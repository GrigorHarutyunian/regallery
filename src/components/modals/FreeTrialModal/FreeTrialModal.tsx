import * as React from "react";
import { useModal } from "../../../contexts/ModalContext";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import freeTrialData from "./free-trial-data";
import ReCAPTCHA from "react-google-recaptcha";
// const SITE_KEY_LOCAL = "6Ldj-FsrAAAAAKF_Cov4AqlH_j_5_Cg66u1F80WJ"; // Replace with your reCAPTCHA site key
// const SECRET_KEY_LOCAL = "6Ldj-FsrAAAAAHUTxSzNn9qZUcW6rLxC_mCxH3En";
const SITE_KEY = "6Lf191srAAAAAHp--PQz0lu1XBIJrbewWhhCkeIL"; // Replace with your reCAPTCHA site key
// const SECRET_KEY = "6Lf191srAAAAAJEzK_wXL9AcMI5_aAboQide_bzg";
import { useState } from "react";
import "./FreeTrialModal.css";
type Status = "initial" | "success" | "error";
const FreeTrialModal: React.FC = () => {
  const { isOpenModal, handleCloseModal } = useModal();
  const {
    initialData: { icon, title, descriptionTop, descriptionBottom },
  } = freeTrialData;
  const [email, setEmail] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [status, setStatus] = useState<Status>("initial");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleBackToinitial = () => {
    setStatus("initial");
  };
  const handleSubmit = async (e: React.FormEvent) => {
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
        setStatus("error");
        setErrorMessage(data?.message || "An unexpected error occurred.");
      } else {
        setStatus("success");
        setEmail("");
        setDomain("");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => (
    <div className="free-trial__initial">
      <div className="free-trial__initial-header">
        {icon}
        <h2 className="free-trial__initial-title">{title}</h2>
      </div>
      <p className="free-trial__initial-description_top">{descriptionTop}</p>
      <form className="free-trial__form" onSubmit={handleSubmit}>
        <div className="free-trial__inptus-div">
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            fullWidth
          />
          <TextField
            placeholder="Domain"
            type="url"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
            fullWidth
          />
          <div className="g-recaptcha ">
            <ReCAPTCHA
              sitekey={SITE_KEY}
              onChange={(token: any) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="custom-button free-trial__button_initial"
          disabled={loading || !captchaToken}
        >
          {loading ? "Sending..." : "Start Free Trial"}
        </button>
      </form>
      <p className="free-trial__initial-description_bottom">
        {descriptionBottom}
      </p>
    </div>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenModal}
      onClose={handleCloseModal}
      disableScrollLock
      disableAutoFocus={true}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade
        in={isOpenModal}
        onExited={() => {
          setEmail("");
          setDomain("");
          setStatus("initial");
        }}
      >
        <div onClick={handleCloseModal} className="free-trial__modal">
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
                color: "black",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className="free-trial__content"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <SuccessMessage onTryAgain={handleBackToinitial} />
            ) : status === "error" ? (
              <ErrorMessage
                message={errorMessage}
                onTryAgain={handleBackToinitial}
              />
            ) : (
              renderForm()
            )}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default FreeTrialModal;
