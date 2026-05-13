import React, { useState } from "react";
import { useTrialModalContext } from "../../../contexts/TrialModalContext";
import { TRIAL_DAYS } from "../../pricing/pricing-data";
import "./TrialModal.css";

const TrialModal: React.FC = () => {
  const { isTrialModalOpen, closeTrialModal, enableTrial } =
    useTrialModalContext();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [expireDate, setExpireDate] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsLoading(true);

    const result = await enableTrial(email);

    if (result.success) {
      setSuccess(true);
      setSuccessMessage(result.message);
      setExpireDate(result.expire || "");
      setEmail("");
      // Close modal after 3 seconds on success
      setTimeout(() => {
        closeTrialModal();
        setSuccess(false);
        setSuccessMessage("");
        setExpireDate("");
      }, 3000);
    } else {
      setError(result.message);
    }

    setIsLoading(false);
  };

  if (!isTrialModalOpen) {
    return null;
  }

  return (
    <div className="trial-modal__overlay" onClick={closeTrialModal}>
      <div className="trial-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="trial-modal__close"
          onClick={closeTrialModal}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="trial-modal__content">
          {!success ? (
            <>
              <div className="trial-modal__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="8" width="18" height="4"></rect>
                  <path d="M12 8v11"></path>
                  <path d="M19 12v7H5v-7"></path>
                  <path d="M12 8H8.5a2.5 2.5 0 1 1 0-5c2 0 3.5 2 3.5 5Z"></path>
                  <path d="M12 8h3.5a2.5 2.5 0 1 0 0-5c-2 0-3.5 2-3.5 5Z"></path>
                </svg>
              </div>
              <h2 className="trial-modal__title">
                Start Your {TRIAL_DAYS}-Day Free Trial
              </h2>
              <p className="trial-modal__description">
                Unlock all PRO features risk-free for {TRIAL_DAYS} days.
                <br />
                No credit card required.
              </p>

              <form onSubmit={handleSubmit} className="trial-modal__form">
                <div className="trial-modal__form-group">
                  <label htmlFor="email" className="trial-modal__label">
                    Enter your email to get license key
                  </label>
                  <div className="trial-modal__input-wrapper">
                    <svg
                      className="trial-modal__input-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="youremail@domain.com"
                      className={`trial-modal__input ${error ? "trial-modal__input--error" : ""}`}
                      disabled={isLoading}
                    />
                  </div>
                  {error && <p className="trial-modal__error">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="trial-modal__submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Start Free Trial"}
                </button>
              </form>
              <div className="trial-modal__terms">
                By starting a trial, you agree to our <br />
                <a
                  href="https://regallery.team/core/terms-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://regallery.team/core/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </div>
            </>
          ) : (
            <div className="trial-modal__success">
              <div className="trial-modal__success-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="trial-modal__success-title">Success!</h3>
              <p className="trial-modal__success-message">{successMessage}</p>
              {expireDate && (
                <p className="trial-modal__success-expire">
                  Trial expires: {new Date(expireDate).toLocaleDateString()}
                </p>
              )}
              <p className="trial-modal__success-note">
                Check your email for further instructions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrialModal;
