import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  isOpenModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpenModal, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{ isOpenModal, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
