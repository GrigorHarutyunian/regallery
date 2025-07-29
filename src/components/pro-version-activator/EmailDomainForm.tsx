import React from "react";
import TextField from "@mui/material/TextField";
import ReCAPTCHA from "react-google-recaptcha";

interface EmailDomainFormProps {
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

const EmailDomainForm: React.FC<EmailDomainFormProps> = ({
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
  return (
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
        className={`${className}__button custom-button`}
        disabled={loading || !captchaToken}
      >
        {loading ? "Sending..." : buttonText}
      </button>
    </form>
  );
};

export default EmailDomainForm;
