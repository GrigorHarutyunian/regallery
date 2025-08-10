import React, {useCallback} from "react";
import {PayPalButtons} from "@paypal/react-paypal-js";
import {CreateOrderData, OnApproveActions, OnApproveData, PayPalButtonStyle} from "@paypal/paypal-js";
import {OrderResponseBody} from "@paypal/paypal-js/types/apis/orders";
import {CreateOrderActions} from "@paypal/paypal-js/types/components/buttons";
import pricingData from "../../../pricing/pricing-data";

interface IPayPalPaymentProps {
    isEmailInvalid: boolean;
    planId: number;
    handleApprove: (paymentData: Record<string, unknown>) => Promise<void>
    handleError: (message: string) => void
}

const style: PayPalButtonStyle = {
    layout: "vertical",
    color: "gold",
    shape: "rect",
    label: "pay",
    height: 45,
};

const PayPalPayment: React.FC<IPayPalPaymentProps> = ({isEmailInvalid, planId, handleApprove, handleError}: IPayPalPaymentProps) => {
    const onClick = useCallback(() => {
        if (isEmailInvalid) {
            return;
        }
    }, [isEmailInvalid]);

    const onApprove = useCallback(async (_data: OnApproveData, actions: OnApproveActions) => {
        try {
            const order: OrderResponseBody | undefined = await actions.order?.capture();

            const paymentData: Record<string, unknown> | undefined = order?.id ? {
                paymentType: 'paypal',
                orderId: order.id
            } : undefined;

            paymentData && await handleApprove(paymentData);
        } catch (e) {
            handleError((e as TypeError).message);
        }
    }, [handleApprove, handleError]);

    const onError = useCallback((e: Record<string, unknown>) => {
        handleError(e.toString());
    }, [handleError]);

    const onCreateOrder = useCallback((_data: CreateOrderData, actions: CreateOrderActions) => {
        return actions.order.create({
            intent: 'capture' as 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: Number(pricingData[planId].price).toFixed(2),
                    },
                },
            ],
            application_context: {
                shipping_preference: "NO_SHIPPING",
            },
        });
    }, [planId]);

    return <PayPalButtons
        onClick={onClick}
        onApprove={onApprove}
        onError={onError}
        createOrder={onCreateOrder}
        forceReRender={[isEmailInvalid]}
        disabled={isEmailInvalid}
        style={style}
    />;
}

export default PayPalPayment;