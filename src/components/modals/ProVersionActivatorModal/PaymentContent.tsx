import React from "react";
import EmailDomainForm from "../../../common-components/common-email-domain-form/EmailDomainForm";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import PayPalFormControl from "./PayPalFormControl";
import {
  CreateOrderData,
  OnApproveActions,
  OnApproveData,
} from "@paypal/paypal-js";
import freeTrialData from "./pro-version-activator-data";
import SuccessMessageContent from "./SuccesMessageContent";
import ErrorMessageContent from "./ErrorMessageContent";
import { SelectChangeEvent } from "@mui/material";

interface Props {
  email: string;
  domain: string;
  captchaToken: string | null;
  loading: boolean;
  isResponseOk: boolean;
  setIsResponseOk: (response: boolean) => void;
  currency: string;
  onEmailChange: (email: string) => void;
  onDomainChange: (domain: string) => void;
  onCaptchaChange: (token: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  setCurrency: (value: string) => void;
  setStatus: (status: "initial" | "success" | "error") => void;
  status: "initial" | "success" | "error";
  errorMessage: string;
  siteKey: string;
}

const PaymentContent: React.FC<Props> = ({
  email,
  domain,
  captchaToken,
  loading,
  isResponseOk,
  setIsResponseOk,
  currency,
  onEmailChange,
  onDomainChange,
  onCaptchaChange,
  onSubmit,
  setCurrency,
  setStatus,
  status,
  errorMessage,
  siteKey,
}) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const {
    initialData: { icon, title, descriptionTop, descriptionBottom },
  } = freeTrialData;

  const onCurrencyChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setCurrency(value);
    dispatch({
      type: "resetOptions" as any,
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (_data: CreateOrderData, actions: { order: any }) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "8.99",
          },
        },
      ],
    });
  };

  const onApproveOrder = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    if (!actions.order) {
      console.error("Order object not present.");
      return Promise.reject("Missing order.");
    }

    const details = await actions.order!.capture();
    setStatus("success");
    if (!details.payer || !details.payer.name) {
      alert("Transaction completed, but payer information is missing.");
    }
  };

  if (isPending) {
    return (
      <div className="payment__form-wrapper paypal-loading">
        <div className="paypal-spinner" />
        <p>Preparing secure payment...</p>
      </div>
    );
  }
  if (status === "success") {
    return (
      <SuccessMessageContent
        onTryAgain={() => {
          setStatus("initial"), setIsResponseOk(false);
        }}
      />
    );
  }
  if (status === "error") {
    return (
      <ErrorMessageContent
        message={errorMessage}
        onTryAgain={() => setStatus("initial")}
      />
    );
  }

  return !isResponseOk ? (
    <div className="payment__initial">
      <div className="payment__initial-header">
        {icon}
        <h2 className="payment__initial-title">{title}</h2>
      </div>
      <p className="payment__initial-description_top">{descriptionTop}</p>
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
        className="payment"
        buttonText="Start Payment"
      />
      <p className="payment__initial-description_bottom">{descriptionBottom}</p>
    </div>
  ) : (
    <div className="payment__form-wrapper">
      <PayPalFormControl
        key={currency}
        currency={currency}
        onChange={onCurrencyChange}
      />
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "buynow",
          height: 45,
        }}
        createOrder={(data, actions) => onCreateOrder(data, actions)}
        onApprove={(data, actions) => onApproveOrder(data, actions)}
        onError={() => {
          setStatus("error");
        }}
      />
    </div>
  );
};

export default PaymentContent;
