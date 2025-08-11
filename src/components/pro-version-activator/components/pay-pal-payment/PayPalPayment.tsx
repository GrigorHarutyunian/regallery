import React, {useCallback} from "react";
import {PayPalButtons} from "@paypal/react-paypal-js";
import {
    CreateSubscriptionActions,
    OnApproveData,
    OnClickActions,
    PayPalButtonStyle
} from "@paypal/paypal-js";

interface IPayPalPaymentProps {
    email: string;
    isEmailInvalid: boolean;
    setIsEmailInvalid: (isEmailInvalid: boolean) => void;
    planID: number;
    handleApprove: (paymentData: Record<string, unknown>) => Promise<void>
    handleError: (message: string) => void
}

const style: PayPalButtonStyle = {
    layout: "vertical",
    color: "gold",
    shape: "rect",
    height: 45,
};

const paypalplanIDs: Record<number, string> = {
    2: "P-7DU43314C2322545VNCMIF3Y",//todo https://sandbox.paypal.com/billing/plans
    3: "P-0XS63825EF796480VNCMIWKQ"//todo
};

const PayPalPayment: React.FC<IPayPalPaymentProps> = ({
                                                          email,
                                                          isEmailInvalid,
                                                          setIsEmailInvalid,
                                                          planID,
                                                          handleApprove,
                                                          handleError
                                                      }: IPayPalPaymentProps) => {
    const onClick = useCallback((_data: Record<string, unknown>, actions: OnClickActions) => {
        if (email === "") {
            setIsEmailInvalid(true);
        }
        if (isEmailInvalid) {
            return actions.reject();
        }
    }, [email, setIsEmailInvalid, isEmailInvalid]);

    const onApprove = useCallback(async (data: OnApproveData) => {
        try {
            const paymentData = {
                paymentType: 'paypal',
                subscriptionID: data.subscriptionID
            };

            await handleApprove(paymentData);
        } catch (e) {
            handleError((e as TypeError).message);
        }
    }, [handleApprove, handleError]);

    const onError = useCallback((e: Record<string, unknown>) => {
        handleError(e.toString());
    }, [handleError]);

    const onCreateSubscription = useCallback(
        (_data: unknown, actions: CreateSubscriptionActions) => {
            return actions.subscription.create({
                plan_id: paypalplanIDs[planID]
            });
        },
        [planID]
    );

    return <PayPalButtons
        onClick={onClick}
        onApprove={onApprove}
        onError={onError}
        createSubscription={onCreateSubscription}
        forceReRender={[isEmailInvalid, planID, email]}
        disabled={isEmailInvalid || email === ""}
        style={style}
    />;
}

export default PayPalPayment;