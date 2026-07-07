"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BriefingRequestButton } from "@/components/briefing/briefing-request-button";
import { heroContent, navLinks } from "@/content/site-content";
import elastiflowLogo from "@/design-reference/Elastiflow-logo2.jpeg";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border-subtle bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-main flex h-16 items-center justify-between gap-4 px-6 lg:h-[4.5rem] lg:gap-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
          onClick={() => setMobileOpen(false)}
        >
          ATTAQ<span className="text-foreground-muted">.AI</span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4 lg:gap-5">
          <PartnershipIndicator className="hidden md:flex" align="end" />

          <BriefingRequestButton className="hidden px-4 py-2 md:inline-flex">
            Request briefing
          </BriefingRequestButton>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground-muted transition-colors hover:text-foreground lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 5H16M2 9H16M2 13H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border-subtle bg-background lg:hidden"
          aria-label="Mobile"
        >
          <div className="container-main flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-3 py-3 text-body-sm text-foreground-muted transition-colors hover:bg-background-elevated hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <BriefingRequestButton
              className="mt-2 w-full px-4 py-3"
              onOpen={() => setMobileOpen(false)}
            >
              Request briefing
            </BriefingRequestButton>
            <PartnershipIndicator
              className="mt-4 border-t border-border-subtle pt-5 md:hidden"
              align="start"
              size="large"
            />
          </div>
        </nav>
      )}
    </header>
  );
}

function PartnershipIndicator({
  className,
  align = "end",
  size = "default",
}: {
  className?: string;
  align?: "start" | "end";
  size?: "default" | "large";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 border-border-subtle md:border-r md:pr-5",
        align === "end" ? "items-end" : "items-start",
        className,
      )}
      aria-label={`${heroContent.partnershipLabel} ElastiFlow`}
    >
      <span className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
        {heroContent.partnershipLabel}
      </span>
      <Image
        src={elastiflowLogo}
        alt="ElastiFlow"
        className={cn(
          "w-auto",
          size === "large" ? "h-10" : "h-7 lg:h-8",
        )}
        priority
      />
    </div>
  );
}
