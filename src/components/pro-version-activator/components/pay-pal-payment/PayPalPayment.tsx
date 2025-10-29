import React, { useCallback, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import {
  CreateSubscriptionActions,
  OnApproveData,
  OnClickActions,
  PayPalButtonStyle,
} from "@paypal/paypal-js";

interface IPayPalPaymentProps {
  email: string;
  isEmailInvalid: boolean;
  setIsEmailInvalid: (isEmailInvalid: boolean) => void;
  planID: number;
  handleApprove: (paymentData: Record<string, unknown>) => Promise<void>;
  handleError: (message: string) => void;
}

const style: PayPalButtonStyle = {
  layout: "vertical",
  color: "gold",
  shape: "rect",
  height: 45,
};

const paypalplanIDs: Record<number, string> = {
  // 2: "P-69354733JW929133GNCNE2IY", // sandbox https://sandbox.paypal.com/billing/plans
  2: "P-02C76123FM722133GNCNFOII", // prod https://paypal.com/billing/plans
  // 3: "P-69354733JW929133GNCNE2IY", // sandbox
  3: "P-6UD71719R7286810YNCNFPCY", // prod
};

const PayPalPayment: React.FC<IPayPalPaymentProps> = ({
  email,
  isEmailInvalid,
  setIsEmailInvalid,
  planID,
  handleApprove,
  handleError,
}: IPayPalPaymentProps) => {
  const [init, setInit] = useState<boolean>(false);

  const onClick = useCallback(
    (_data: Record<string, unknown>, actions: OnClickActions) => {
      if (email === "") {
        setIsEmailInvalid(true);
      }
      if (isEmailInvalid) {
        return actions.reject();
      }
    },
    [email, setIsEmailInvalid, isEmailInvalid]
  );

  const onInit = useCallback(() => {
    setInit(true);
  }, []);

  const onApprove = useCallback(
    async (data: OnApproveData) => {
      try {
        const paymentData = {
          paymentType: "paypal",
          subscriptionID: data.subscriptionID,
        };

        await handleApprove(paymentData);
      } catch (e) {
        handleError((e as TypeError).message);
      }
    },
    [handleApprove, handleError]
  );

  const onError = useCallback(
    (e: Record<string, unknown>) => {
      handleError(e.toString());
    },
    [handleError]
  );

  const onCreateSubscription = useCallback(
    (_data: unknown, actions: CreateSubscriptionActions) => {
      return actions.subscription.create({
        plan_id: paypalplanIDs[planID],
      });
    },
    [planID]
  );

  return (
    <>
      <div
        style={{
          pointerEvents: init ? "auto" : "none",
        }}
      >
        <PayPalButtons
          onClick={onClick}
          onApprove={onApprove}
          onInit={onInit}
          onError={onError}
          createSubscription={onCreateSubscription}
          disabled={isEmailInvalid || email == ""}
          style={style}
        />
      </div>
      <div className="payment__form-wrapper__terms">
        Our 14-day money back guarantee applies to all purchases. All plans
        automatically renew yearly at regular price using the payment method you
        provide today. You can cancel your plan at any time. By purchasing, you
        agree to the PayPal{" "}
        <a
          href="https://www.paypal.com/us/legalhub/paypal/useragreement-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          User Agreement
        </a>{" "}
        and{" "}
        <a
          href="https://www.paypal.com/us/legalhub/paypal/privacy-full"
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

export default PayPalPayment;
