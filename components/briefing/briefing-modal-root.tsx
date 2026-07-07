"use client";

import { BriefingModal } from "@/components/briefing/briefing-modal";
import { BriefingModalProvider } from "@/components/briefing/briefing-modal-context";
import type { ReactNode } from "react";

export function BriefingModalRoot({ children }: { children: ReactNode }) {
  return (
    <BriefingModalProvider>
      {children}
      <BriefingModal />
    </BriefingModalProvider>
  );
}
