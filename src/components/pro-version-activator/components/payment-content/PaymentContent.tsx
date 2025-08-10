import React, {useCallback, useState} from "react";
import "../../proVersionActivator.css";
import TextField from "@mui/material/TextField";
import PayPalPayment from "../pay-pal-payment/PayPalPayment";

interface Props {
  email: string;
  setEmail: (email: string) => void;
  isEmailInvalid: boolean;
  setIsEmailInvalid: (isEmailInvalid: boolean) => void;
  planId: number;
  handleSuccess: (successMessage: string) => void;
  handleError: (errorMessage: string) => void;
}

const PaymentContent: React.FC<Props> = ({
    email,
    setEmail,
    isEmailInvalid,
    setIsEmailInvalid,
    planId,
    handleSuccess,
    handleError
}) => {
  // const [email, setEmail] = useState('');
  // const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [touched, setTouched] = useState(false);

  const validateEmail = (value: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const onPaymentApprove = useCallback(async (paymentData: Record<string, unknown>) => {
    try {
      // const response = await fetch("https://regallery.team/core/wp-json/reacgcore/v2/user", {
      const response = await fetch("http://localhost/wordpress/wp-json/reacgcore/v2/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          planId: planId,
          action: "ordered",
          ...paymentData
        }),
      });

      const result = await response.json();

      if (response.ok) {
        handleSuccess(result.message);
      } else {
        handleError(result.errors.message);
      }
    } catch (e) {
      handleError((e as TypeError).message);
    }
  }, [email, planId, handleSuccess, handleError]);

  const onPaymentError = useCallback((errorMessage: string) => {
    handleError(errorMessage);
  }, [handleError]);

  return (
    <div className="payment__form-wrapper">
      <div>
        <TextField
            type="email"
            value={email}
            onChange={(e) => {
              const val = e.target.value;
              setEmail(val);
              // Only revalidate immediately if it was already touched/invalid
              if (touched) {
                setIsEmailInvalid(!validateEmail(val));
              }
            }}
            onBlur={() => {
              setTouched(true);
              setIsEmailInvalid(!validateEmail(email));
            }}
            required
            placeholder="Your email address"
            fullWidth
            error={isEmailInvalid && email !== ""}
            helperText={isEmailInvalid && email !== "" && 'Your email address is invalid.'}
        />
        <p className="payment__form-wrapper__field-description">We’ll send your license key to this email after purchase.</p>
      </div>
      <PayPalPayment isEmailInvalid={isEmailInvalid || email === ""} planId={planId} handleApprove={onPaymentApprove} handleError={onPaymentError} />
      <div className="payment__form-wrapper__terms">
        Our 14-day money back guarantee applies to all purchases. All plans automatically renew yearly at regular price using the payment method you provide today. By purchasing, you agree to the <a href="https://www.paypal.com/us/legalhub/paypal/useragreement-full" target="_blank" rel="noopener noreferrer">PayPal User Agreement</a> and <a href="https://www.paypal.com/us/legalhub/paypal/privacy-full" target="_blank" rel="noopener noreferrer">PayPal Privacy Policy</a>.
      </div>
    </div>
  );
};

export default PaymentContent;