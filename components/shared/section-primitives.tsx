"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

type SectionIntroProps = {
  headline: string;
  subheadline?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  headline,
  subheadline,
  eyebrow,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-label text-accent">{eyebrow}</p>
      )}
      <h2 className="text-display-lg text-foreground">{headline}</h2>
      {subheadline && (
        <p className="text-body-lg text-foreground-muted">{subheadline}</p>
      )}
    </div>
  );
}
