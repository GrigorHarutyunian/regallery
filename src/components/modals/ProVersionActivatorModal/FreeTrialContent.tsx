import React from "react";
import EmailDomainForm from "../../../common-components/common-email-domain-form/EmailDomainForm";
import SuccessMessageContent from "./SuccesMessageContent";
import ErrorMessageContent from "./ErrorMessageContent";
import freeTrialData from "./pro-version-activator-data";

interface Props {
  email: string;
  domain: string;
  captchaToken: string | null;
  loading: boolean;
  status: "initial" | "success" | "error";
  errorMessage: string;
  onEmailChange: (email: string) => void;
  onDomainChange: (domain: string) => void;
  onCaptchaChange: (token: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  setStatus: (status: "initial" | "success" | "error") => void;
  siteKey: string;
}

const FreeTrialContent: React.FC<Props> = ({
  email,
  domain,
  captchaToken,
  loading,
  status,
  errorMessage,
  onEmailChange,
  onDomainChange,
  onCaptchaChange,
  onSubmit,
  setStatus,
  siteKey,
}) => {
  const {
    initialData: { icon, title, descriptionTop, descriptionBottom },
  } = freeTrialData;

  if (status === "success") {
    return <SuccessMessageContent onTryAgain={() => setStatus("initial")} />;
  }

  if (status === "error") {
    return (
      <ErrorMessageContent
        message={errorMessage}
        onTryAgain={() => setStatus("initial")}
      />
    );
  }

  return (
    <div className="free-trial__initial">
      <div className="free-trial__initial-header">
        {icon}
        <h2 className="free-trial__initial-title">{title}</h2>
      </div>
      <p className="free-trial__initial-description_top">{descriptionTop}</p>
      <EmailDomainForm
        email={email}
        domain={domain}
        loading={loading}
        captchaToken={captchaToken}
        onEmailChange={onEmailChange}
        onDomainChange={onDomainChange}
        onCaptchaChange={onCaptchaChange}
        onSubmit={onSubmit}
        siteKey={siteKey}
        className="free-trial"
        buttonText="Start Free Trial"
      />
      <p className="free-trial__initial-description_bottom">
        {descriptionBottom}
      </p>
    </div>
  );
};

export default FreeTrialContent;
