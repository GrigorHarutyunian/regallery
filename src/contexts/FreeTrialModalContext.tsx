import React, { createContext, useContext, useState, ReactNode } from "react";
type FreeTrialModalContextType = {
  isOpenModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const FreeTrialModalContext = createContext<
  FreeTrialModalContextType | undefined
>(undefined);

export const FreeTrialModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpenModal, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <FreeTrialModalContext.Provider
      value={{ isOpenModal, handleOpenModal, handleCloseModal }}
    >
      {children}
    </FreeTrialModalContext.Provider>
  );
};

export const useFreeTrialModal = () => {
  const context = useContext(FreeTrialModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
