"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

interface OverlayContextType {
  showOverlay: boolean;
  setShowOverlay: (show: boolean) => void;
  openOverlay: () => void;
  closeOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType | null>(null);

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within an OverlayProvider");
  }
  return context;
};

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true); // 初始状态为显示登录overlay
  const { at, uid } = useAuth();

  // 当用户登出时，显示登录overlay
  useEffect(() => {
    if (!at || !uid) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [at, uid]);

  const openOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  return (
    <OverlayContext.Provider
      value={{
        showOverlay,
        setShowOverlay,
        openOverlay,
        closeOverlay,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
}