import React, { useCallback, useState } from "react";
import "../../proVersionActivator.css";
import TextField from "@mui/material/TextField";
import StripePayment from "../stripe-payment/StripePayment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RyMmg2E9JX99Lm5HUrRp2igX5UG3OL9oVOKrEyVawaOoG691IMWXAbpvtc1r590mS9BiAiSZRFI8Tkd8HLPgj7j00kwQpNhiN"
); // todo

interface Props {
  email: string;
  setEmail: (email: string) => void;
  isEmailInvalid: boolean;
  setIsEmailInvalid: (isEmailInvalid: boolean) => void;
  planID: number;
  handleSuccess: (successMessage: string) => void;
  handleError: (errorMessage: string) => void;
}

const PaymentContent: React.FC<Props> = ({
  email,
  setEmail,
  isEmailInvalid,
  setIsEmailInvalid,
  planID,
  handleSuccess,
  handleError,
}) => {
  const [touched, setTouched] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // const onPaymentApprove = useCallback(
  //   async (paymentData: Record<string, unknown>) => {
  //     try {
  //       const response = await fetch(
  //         "https://regallery.team/core/wp-json/reacgcore/v2/user",
  //         {
  //           //const response = await fetch("http://localhost/wordpress/wp-json/reacgcore/v2/user", { //todo
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             email: email,
  //             planID: planID,
  //             action: "ordered",
  //             ...paymentData,
  //           }),
  //         }
  //       );

  //       const result = await response.json();

  //       if (response.ok) {
  //         handleSuccess(result.message);
  //       } else {
  //         handleError(result.errors.message);
  //       }
  //     } catch (e) {
  //       handleError((e as TypeError).message);
  //     }
  //   },
  //   [email, planID, handleSuccess, handleError]
  // );

  const onPaymentApprove = useCallback(
    (essage: string) => {
      handleSuccess(essage);
    },
    [handleError]
  );

  const onPaymentError = useCallback(
    (errorMessage: string) => {
      handleError(errorMessage);
    },
    [handleError]
  );

  return (
    <div className="payment__form-wrapper">
      <div>
        <TextField
          className="payment__form-wrapper__input"
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
          error={isEmailInvalid}
          helperText={isEmailInvalid && "Please provide a valid email address."}
        />
        <p className="payment__form-wrapper__field-description">
          We’ll send your license key to this email after purchase.
        </p>
      </div>
      {/* <PayPalPayment email={email} isEmailInvalid={isEmailInvalid} setIsEmailInvalid={setIsEmailInvalid} planID={planID} handleApprove={onPaymentApprove} handleError={onPaymentError} /> */}
      <Elements stripe={stripePromise}>
        <StripePayment
          email={email}
          isEmailInvalid={isEmailInvalid}
          setIsEmailInvalid={setIsEmailInvalid}
          planID={planID}
          handleApprove={onPaymentApprove}
          handleError={onPaymentError}
        />
      </Elements>
    </div>
  );
};

export default PaymentContent;
