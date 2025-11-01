import React, {createContext, useContext, useState, ReactNode} from "react";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import {PayPalScriptOptions} from "@paypal/paypal-js/types/script-options";

interface IProVersionActivatorProviderProps {
    children: ReactNode;
}

interface IProVersionActivatorContextValue {
    isPaymentModalOpen: boolean;
    openPaymentModal: (planID: number) => void;
    closePaymentModal: () => void;
    planID: number;
    openStripeCheckout: (planID: number) => void;
    showSuccessMessage: (message: string) => void;
}

const initialPaypalOptions: PayPalScriptOptions = {
    // clientId: "AVwxVkMOTRkixoaT2d2QCzMHbj5Fr6Ov7t0NkFHoz4OQqmYgF1lqyykS7noCTa3zTAYkRYchtGO6Cuhb", // sandbox
    clientId: "ASloPHOXR7iImLFSfgyaHevQQmf4iL2U8DLynt-uE0VHLjyGkuFBhzowxbLI02EbewiXOFCR6zfSVFtP", // prod
    currency: "USD",
    vault: true,
    intent: "subscription",
    // environment: "sandbox", // sandbox
    environment: "production", // prod
};

const ProVersionActivatorContext = createContext<
    IProVersionActivatorContextValue | undefined
>(undefined);

export const ProVersionActivatorProvider: React.FC<IProVersionActivatorProviderProps> = ({children}: IProVersionActivatorProviderProps) => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
    const [planID, setplanID] = useState<number>(0);

    const openPaymentModal = (planID: number) => {
        setplanID(planID);
        setIsPaymentModalOpen(true);
    };

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
        setplanID(0);
    };

    const showSuccessMessage = (message: string) => {
        setIsPaymentModalOpen(true);
    };

    const openStripeCheckout = async (planID: number) => {
        try {
            const response = await fetch("https://regallery.team/core/wp-json/reacgcore/v2/stripe/createCheckoutSession", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    planID: planID,
                }),
            });

            const result = await response.json();

            if (response.ok && result.url) {
                window.location.href = result.url;
            } else {
                throw new Error(result.errors?.message || 'Failed to create Stripe checkout session');
            }
        } catch (error) {
            console.error('Error creating Stripe checkout:', error);
        }
    };

    return (
        <ProVersionActivatorContext.Provider
            value={{isPaymentModalOpen, openPaymentModal, openStripeCheckout, closePaymentModal, planID, showSuccessMessage}}
        >
            <PayPalScriptProvider options={initialPaypalOptions}>
                {children}
            </PayPalScriptProvider>
        </ProVersionActivatorContext.Provider>
    );
};

export const useProVersionActivatorContext = () => {
    const context = useContext(ProVersionActivatorContext);

    if (!context) {
        throw new Error("useProVersionActivatorContext must be used within a ProVersionActivatorProvider");
    }

    return context;
};
