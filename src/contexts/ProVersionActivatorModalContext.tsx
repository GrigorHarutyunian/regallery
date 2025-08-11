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
}

const initialPaypalOptions: PayPalScriptOptions = {
    // clientId: "AVwxVkMOTRkixoaT2d2QCzMHbj5Fr6Ov7t0NkFHoz4OQqmYgF1lqyykS7noCTa3zTAYkRYchtGO6Cuhb", // sandbox todo
    clientId: "ASloPHOXR7iImLFSfgyaHevQQmf4iL2U8DLynt-uE0VHLjyGkuFBhzowxbLI02EbewiXOFCR6zfSVFtP", // sandbox todo
    currency: "USD",
    vault: true,
    intent: "subscription", // "capture" for immediately upon approval.
    // environment: "sandbox", //todo
    environment: "production", //todo
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

    return (
        <ProVersionActivatorContext.Provider
            value={{isPaymentModalOpen, openPaymentModal, closePaymentModal, planID}}
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
