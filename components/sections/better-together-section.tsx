"use client";

import Image from "next/image";
import { Fragment } from "react";
import { betterTogetherContent } from "@/content/site-content";
import elastiflowLogo from "@/design-reference/Elastiflow-logo2.jpeg";
import { ScrollReveal } from "@/components/shared/section-primitives";
import { cn } from "@/lib/utils";

export function BetterTogetherSection() {
  return (
    <section
      id="better-together"
      className="scroll-mt-24 relative overflow-hidden border-b border-border-subtle bg-background-elevated"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(61,139,253,0.06),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="container-main">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl rounded-sm border border-border bg-background-subtle px-6 py-12 lg:px-14 lg:py-16">
              <p className="text-label mb-10 text-center text-foreground-subtle lg:mb-12">
                Better together
              </p>

              {/* Ecosystem stack */}
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-4">
                {betterTogetherContent.stack.map((item, index) => (
                  <Fragment key={item.name}>
                    <StackItem item={item} />
                    {index < betterTogetherContent.stack.length - 1 && (
                      <span
                        className="font-display text-lg text-foreground-subtle"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* Outcomes */}
              <div className="mt-10 flex flex-col items-center gap-3 lg:mt-12">
                <FlowConnector />
                {betterTogetherContent.outcomes.map((outcome, index) => (
                  <Fragment key={outcome}>
                    <p className="max-w-lg text-center font-display text-xl text-foreground lg:text-2xl">
                      {outcome}
                    </p>
                    {index < betterTogetherContent.outcomes.length - 1 && (
                      <FlowConnector />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function StackItem({
  item,
}: {
  item: (typeof betterTogetherContent.stack)[number];
}) {
  if (item.type === "logo") {
    return (
      <Image
        src={elastiflowLogo}
        alt="ElastiFlow"
        className="h-9 w-auto lg:h-10"
      />
    );
  }

  return (
    <p
      className={cn(
        "text-center font-medium tracking-tight text-foreground",
        item.type === "brand"
          ? "font-display text-xl lg:text-2xl"
          : "font-sans text-lg lg:text-xl",
      )}
    >
      {item.name}
    </p>
  );
}

function FlowConnector() {
  return (
    <svg
      width="16"
      height="32"
      viewBox="0 0 16 32"
      fill="none"
      className="text-foreground-subtle"
      aria-hidden="true"
    >
      <line
        x1="8"
        y1="0"
        x2="8"
        y2="22"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M3 22L8 30L13 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
