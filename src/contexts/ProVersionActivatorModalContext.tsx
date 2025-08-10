import React, {createContext, useContext, useState, ReactNode} from "react";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import {PayPalScriptOptions} from "@paypal/paypal-js/types/script-options";

interface IProVersionActivatorProviderProps {
    children: ReactNode;
}

interface IProVersionActivatorContextValue {
    isPaymentModalOpen: boolean;
    openPaymentModal: (planId: number) => void;
    closePaymentModal: () => void;
    planId: number;
}

const initialPaypalOptions: PayPalScriptOptions = {
    clientId: "AQPbs6yybkF6z6xVouU0fU3RrQ7wuBf_BJejPDHBjmbS6VYRlTEngz3i2KBugXxVWoDcsK40sZU3MckS",
    currency: "USD",
    intent: "capture", // Payment will be captured immediately upon approval.
    environment: "sandbox",
};

const ProVersionActivatorContext = createContext<
    IProVersionActivatorContextValue | undefined
>(undefined);

export const ProVersionActivatorProvider: React.FC<IProVersionActivatorProviderProps> = ({children}: IProVersionActivatorProviderProps) => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
    const [planId, setPlanId] = useState<number>(0);

    const openPaymentModal = (planId: number) => {
        setPlanId(planId);
        setIsPaymentModalOpen(true);
    };

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
        setPlanId(0);
    };

    return (
        <ProVersionActivatorContext.Provider
            value={{isPaymentModalOpen, openPaymentModal, closePaymentModal, planId}}
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
