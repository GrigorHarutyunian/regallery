import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import stripeBadge from "../../../../assets/icons/stripe-badge-white.webp";

interface IStripePaymentProps {
  fullname: string;
  country: string;
  email: string;
  isEmailInvalid: boolean;
  setIsEmailInvalid: (isEmailInvalid: boolean) => void;
  planID: number;
  //   handleApprove: (paymentData: Record<string, unknown>) => Promise<void>;
  handleApprove: (message: string) => void;
  handleError: (message: string) => void;
}

const StripePayment: React.FC<IStripePaymentProps> = ({
  fullname,
  country,
  email,
  isEmailInvalid,
  setIsEmailInvalid,
  planID,
  handleApprove,
  handleError,
}: IStripePaymentProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger;
    if (email === "") {
      setIsEmailInvalid(true);
    }
    if (isEmailInvalid || fullname === "") {
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      // 1) Create PaymentMethod on client
      const card = elements.getElement(CardElement);
      if (!card) {
        handleError("Card element not found");
        setLoading(false);
        return;
      }

      const { error: pmError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
          billing_details: {
            name: fullname,
            email: email,
            address: {
              country: country,
            },
          },
        });

      if (pmError) {
        handleError(pmError.message || "Payment method creation failed");
        setLoading(false);
        return;
      }

      // 2) Send to backend to create subscription
      // Backend should create subscription using paymentMethod.id and return clientSecret + subscriptionId
      const createResp = await fetch(
        "https://regallery.team/core/wp-json/reacgcore/v2/stripe/createOrder",
        // "http://localhost/wordpress/wp-json/reacgcore/v2/stripe/createOrder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            planID: planID,
            email,
            fullname,
            country,
            paymentMethod: paymentMethod.id,
          }),
        }
      );

      const createData = await createResp.json();
      if (!createResp.ok || createData.error) {
        handleError(createData.error || "Failed to create subscription");
        setLoading(false);
        return;
      }

      const { clientSecret, subscriptionId } = createData;
      //   if (!clientSecret) {
      //     handleError("No clientSecret returned from server");
      //     setLoading(false);
      //     return;
      //   }

      //   // 3) Confirm card payment (handles SCA)
      //   const confirmResult = await stripe.confirmCardPayment(clientSecret);
      //   if (confirmResult.error) {
      //     // Payment failed / SCA failed
      //     handleError(
      //       confirmResult.error.message || "Payment confirmation failed"
      //     );
      //     setLoading(false);
      //     return;
      //   }

      //   const paymentIntent = confirmResult.paymentIntent;
      //   if (!paymentIntent || paymentIntent.status !== "succeeded") {
      //     handleError("Payment not completed");
      //     setLoading(false);
      //     return;
      //   }

      // 4) Call backend to verify subscription + register license (server-side verification)
      // This endpoint must verify subscription with Stripe using secret key before issuing license
      const verifyResp = await fetch(
        "https://regallery.team/core/wp-json/reacgcore/v2/user",
        // "http://localhost/wordpress/wp-json/reacgcore/v2/user", //todo
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            planID: planID,
            fullname: fullname,
            country: country,
            action: "ordered",
            subscriptionID: subscriptionId,
            paymentType: "stripe",
          }),
        }
      );

      const verifyData = await verifyResp.json();
      if (!verifyResp.ok || verifyData.error) {
        handleError(verifyData.error || "Subscription verification failed");
        setLoading(false);
        return;
      }

      handleApprove && handleApprove(verifyData.message as string);
    } catch (err) {
      handleError &&
        handleError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="payment__form-wrapper__card-input">
        <CardElement
          options={{
            hidePostalCode: false,
            style: {
              base: {
                fontSize: "16px",
                color: "rgba(0, 0, 0, 0.87)",
                "::placeholder": {
                  color: "#aab7c4",
                },
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              },
              invalid: {
                color: "rgb(211, 47, 47)",
              },
            },
          }}
        />
      </div>
      <img src={stripeBadge} alt="Secured by Stripe" />
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="payment__form-wrapper__submit-button"
          onMouseEnter={(e) => {
            if (!loading && stripe) {
              e.currentTarget.style.filter = "brightness(1.1)";
            }
          }}
          onMouseLeave={(e) => {
            if (!loading && stripe) {
              e.currentTarget.style.filter = "unset";
            }
          }}
        >
          {loading ? "PROCESSING…" : "COMPLETE PURCHASE"}
        </button>
      </form>
      <div className="payment__form-wrapper__terms">
        Our 14-day money back guarantee applies to all purchases. All plans
        automatically renew yearly at regular price using the payment method you
        provide today. You can cancel your plan at any time. By purchasing, you
        agree to the Stripe{" "}
        <a
          href="https://stripe.com/legal/ssa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Services Agreement
        </a>{" "}
        and{" "}
        <a
          href="https://stripe.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </div>
    </>
  );
};

export default StripePayment;
