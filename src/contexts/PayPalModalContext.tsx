import React, { createContext, useContext, useState, ReactNode } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
const initialOptions: PayPalScriptOptions = {
  clientId:
    // "ARAKzGBBZQf1XhY_fR-D00X8TXZcDMwpqnHrnWtTkp1WHCqPOF1kziiVNl4b6jD3nWoZWxmkY3vIvF5r",
    "ARB7wIjhMa6mPTPtdhFTnpWjc2Ks7Or1GBuH6eIZVFKxGr4PXxCqt9otd8a7MssnOodtAGZIA4ihz1Kg",
  currency: "USD",
  intent: "capture",
};
type PayPalModalContextType = {
  isOpenModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const PayPalModalContext = createContext<PayPalModalContextType | undefined>(
  undefined
);

export const PayPalModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpenModal, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <PayPalModalContext.Provider
      value={{ isOpenModal, handleOpenModal, handleCloseModal }}
    >
      <PayPalScriptProvider options={initialOptions}>
        {children}
      </PayPalScriptProvider>
    </PayPalModalContext.Provider>
  );
};

export const usePayPalModal = () => {
  const context = useContext(PayPalModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
