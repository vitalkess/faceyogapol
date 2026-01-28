import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    // Return a dummy context if used outside provider (e.g. during initial render before context is set up, or simpler migration)
    // However, best practice is to ensure provider wraps app.
    // For safety in this environment where I modify Shared.tsx:
    return {
        isOpen: false,
        openModal: () => console.warn("ModalProvider missing"),
        closeModal: () => console.warn("ModalProvider missing")
    };
  }
  return context;
};