import React from "react";
import TextField from "@mui/material/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import "./EmailDomainForm.css";
import freeTrialData from "./pro-version-activator-data";
interface ProVersionActivatorModalFormContentProps {
  email: string;
  domain: string;
  loading: boolean;
  captchaToken: string | null;
  onEmailChange: (value: string) => void;
  onDomainChange: (value: string) => void;
  onCaptchaChange: (token: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  siteKey: string;
  className?: string;
  buttonText?: string;
}

const ProVersionActivatorModalFormContent: React.FC<
  ProVersionActivatorModalFormContentProps
> = ({
  email,
  domain,
  loading,
  captchaToken,
  onEmailChange,
  onDomainChange,
  onCaptchaChange,
  onSubmit,
  siteKey,
  className = "",
  buttonText = "Submit",
}) => {
  const {
    initialData: { icon, title, descriptionTop, descriptionBottom },
  } = freeTrialData;
  return (
    <div className="free-trial__initial">
      <div className="free-trial__initial-header">
        {icon}
        <h2 className="free-trial__initial-title">{title}</h2>
      </div>
      <p className="free-trial__initial-description_top">{descriptionTop}</p>
      <form className={`${className}__form`} onSubmit={onSubmit}>
        <div className={`${className}__inptus-div`}>
          <TextField
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
            placeholder="Email"
            fullWidth
          />
          <TextField
            type="url"
            value={domain}
            onChange={(e) => onDomainChange(e.target.value)}
            required
            placeholder="Domain"
            fullWidth
          />
          <div className={`${className}__g-recaptcha`}>
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(token) => onCaptchaChange(token)}
              onExpired={() => onCaptchaChange(null)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="custom-button"
          disabled={loading || !captchaToken}
        >
          {loading ? "Sending..." : buttonText}
        </button>
      </form>
      <p className="free-trial__initial-description_bottom">
        {descriptionBottom}
      </p>
    </div>
  );
};

export default ProVersionActivatorModalFormContent;
