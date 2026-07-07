"use client";

import { useBriefingModal } from "@/components/briefing/briefing-modal-context";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const buttonClassName =
  "inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-body-sm font-semibold text-background transition-opacity hover:opacity-90";

export function BriefingRequestButton({
  children,
  className,
  onOpen,
}: {
  children: ReactNode;
  className?: string;
  onOpen?: () => void;
}) {
  const { openBriefingModal } = useBriefingModal();

  return (
    <button
      type="button"
      onClick={() => {
        openBriefingModal();
        onOpen?.();
      }}
      className={cn(buttonClassName, className)}
    >
      {children}
    </button>
  );
}
