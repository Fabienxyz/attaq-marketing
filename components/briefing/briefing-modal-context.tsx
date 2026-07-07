"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type BriefingModalContextValue = {
  openBriefingModal: () => void;
  closeBriefingModal: () => void;
  isOpen: boolean;
};

const BriefingModalContext = createContext<BriefingModalContextValue | null>(
  null,
);

export function BriefingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPositionRef = useRef(0);

  const openBriefingModal = useCallback(() => {
    scrollPositionRef.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = "100%";
    setIsOpen(true);
  }, []);

  const closeBriefingModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPositionRef.current);
  }, []);

  return (
    <BriefingModalContext.Provider
      value={{ openBriefingModal, closeBriefingModal, isOpen }}
    >
      {children}
    </BriefingModalContext.Provider>
  );
}

export function useBriefingModal() {
  const context = useContext(BriefingModalContext);
  if (!context) {
    throw new Error("useBriefingModal must be used within BriefingModalProvider");
  }
  return context;
}
