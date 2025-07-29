import React, { createContext, useContext, useState, ReactNode } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";

type PaymentModalContextType = {
  modalState: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};
const initialOptions: PayPalScriptOptions = {
  clientId:
    // "ARAKzGBBZQf1XhY_fR-D00X8TXZcDMwpqnHrnWtTkp1WHCqPOF1kziiVNl4b6jD3nWoZWxmkY3vIvF5r",
    "ARB7wIjhMa6mPTPtdhFTnpWjc2Ks7Or1GBuH6eIZVFKxGr4PXxCqt9otd8a7MssnOodtAGZIA4ihz1Kg",
  currency: "USD",
  intent: "capture",
};

const ProVersionActivatorModalContext = createContext<
  PaymentModalContextType | undefined
>(undefined);

export const ProVersionActivatorModalProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [modalState, setModalState] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <ProVersionActivatorModalContext.Provider
      value={{ modalState, handleOpenModal, handleCloseModal }}
    >
      <PayPalScriptProvider options={initialOptions}>
        {children}
      </PayPalScriptProvider>
    </ProVersionActivatorModalContext.Provider>
  );
};

export const useProVersionActivatorModal = () => {
  const context = useContext(ProVersionActivatorModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
