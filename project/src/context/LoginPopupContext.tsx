import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoginPopupContextType {
  isLoginPopupOpen: boolean;
  intendedRoute: string | null;
  openLoginPopup: (route?: string) => void;
  closeLoginPopup: () => void;
}

const LoginPopupContext = createContext<LoginPopupContextType | undefined>(undefined);

export function LoginPopupProvider({ children }: { children: ReactNode }) {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [intendedRoute, setIntendedRoute] = useState<string | null>(null);

  const openLoginPopup = (route?: string) => {
    if (route) setIntendedRoute(route);
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
    setIntendedRoute(null);
  };

  return (
    <LoginPopupContext.Provider value={{ isLoginPopupOpen, intendedRoute, openLoginPopup, closeLoginPopup }}>
      {children}
    </LoginPopupContext.Provider>
  );
}

export const useLoginPopup = () => {
  const context = useContext(LoginPopupContext);
  if (context === undefined) {
    throw new Error('useLoginPopup must be used within a LoginPopupProvider');
  }
  return context;
};
