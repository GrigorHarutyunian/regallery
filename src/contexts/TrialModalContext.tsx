import React, { createContext, useContext, useState, ReactNode } from "react";

interface ITrialModalProviderProps {
  children: ReactNode;
}

interface ITrialModalContextValue {
  isTrialModalOpen: boolean;
  openTrialModal: (planID?: number) => void;
  closeTrialModal: () => void;
  planID: number;
  enableTrial: (email: string) => Promise<{
    success: boolean;
    message: string;
    expire?: string;
    error?: string;
  }>;
}

const TrialModalContext = createContext<ITrialModalContextValue | undefined>(
  undefined,
);

export const TrialModalProvider: React.FC<ITrialModalProviderProps> = ({
  children,
}: ITrialModalProviderProps) => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
  const [planID, setPlanID] = useState<number>(0);

  const openTrialModal = (planID?: number) => {
    if (planID) {
      setPlanID(planID);
    }
    setIsTrialModalOpen(true);
  };

  const closeTrialModal = () => {
    setIsTrialModalOpen(false);
    setPlanID(0);
  };

  const enableTrial = async (email: string) => {
    try {
      const response = await fetch(
        "https://regallery.team/core/wp-json/reacgcore/v2/trial/enable",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      let result: Record<string, unknown> | null = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (response.ok) {
        return {
          success: true,
          message:
            (typeof result?.message === "string" && result.message) ||
            "License key sent to your email.",
          expire:
            typeof result?.expire === "string" ? result.expire : undefined,
        };
      } else {
        const errorsMessage =
          typeof result?.errors === "object" &&
          result.errors &&
          "message" in result.errors
            ? (result.errors as { message?: unknown }).message
            : undefined;

        const errorsMessageText = Array.isArray(errorsMessage)
          ? errorsMessage.find(
              (item): item is string =>
                typeof item === "string" && item.trim().length > 0,
            )
          : typeof errorsMessage === "string" && errorsMessage.trim().length > 0
            ? errorsMessage
            : undefined;

        const backendErrorMessage =
          errorsMessageText ||
          (typeof result?.message === "string" && result.message) ||
          (typeof result?.error === "string" && result.error) ||
          (typeof result?.data === "object" &&
          result.data &&
          "message" in result.data &&
          typeof (result.data as { message?: unknown }).message === "string"
            ? (result.data as { message: string }).message
            : "") ||
          `Request failed with status ${response.status}`;

        return {
          success: false,
          message: backendErrorMessage,
          error: backendErrorMessage,
        };
      }
    } catch (error) {
      console.error("Error enabling trial:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";
      return {
        success: false,
        message: errorMessage,
        error: errorMessage,
      };
    }
  };

  return (
    <TrialModalContext.Provider
      value={{
        isTrialModalOpen,
        openTrialModal,
        closeTrialModal,
        planID,
        enableTrial,
      }}
    >
      {children}
    </TrialModalContext.Provider>
  );
};

export const useTrialModalContext = () => {
  const context = useContext(TrialModalContext);

  if (!context) {
    throw new Error(
      "useTrialModalContext must be used within a TrialModalProvider",
    );
  }

  return context;
};
