import React, { createContext, useContext, useState, ReactNode } from "react";

interface IProVersionActivatorProviderProps {
  children: ReactNode;
}

interface IProVersionActivatorContextValue {
  isPaymentModalOpen: boolean;
  openPaymentModal: (planID?: number) => void;
  closePaymentModal: () => void;
  planID: number;
  openStripeCheckout: (planID: number) => Promise<void>;
}

const ProVersionActivatorContext = createContext<
  IProVersionActivatorContextValue | undefined
>(undefined);

export const ProVersionActivatorProvider: React.FC<
  IProVersionActivatorProviderProps
> = ({ children }: IProVersionActivatorProviderProps) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [planID, setplanID] = useState<number>(0);

  const openPaymentModal = (planID?: number) => {
    if (planID) {
      setplanID(planID);
    }
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setplanID(0);
  };

  const openStripeCheckout = async (planID: number) => {
    try {
      const response = await fetch(
        "https://regallery.team/core/wp-json/reacgcore/v2/stripe/createCheckoutSession",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            planID: planID,
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.url) {
        window.location.href = result.url;
      } else {
        throw new Error(
          result.errors?.message || "Failed to create Stripe checkout session"
        );
      }
    } catch (error) {
      console.error("Error creating Stripe checkout:", error);
    }
  };

  return (
    <ProVersionActivatorContext.Provider
      value={{
        isPaymentModalOpen,
        openPaymentModal,
        closePaymentModal,
        planID,
        openStripeCheckout,
      }}
    >
      {children}
    </ProVersionActivatorContext.Provider>
  );
};

export const useProVersionActivatorContext = () => {
  const context = useContext(ProVersionActivatorContext);

  if (!context) {
    throw new Error(
      "useProVersionActivatorContext must be used within a ProVersionActivatorProvider"
    );
  }

  return context;
};
