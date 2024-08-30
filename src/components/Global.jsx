import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function Global({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <ModalContext.Provider value={{ open, handleOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
