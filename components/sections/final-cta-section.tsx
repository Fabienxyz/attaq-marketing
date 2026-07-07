"use client";

import Link from "next/link";
import { finalCtaContent, siteConfig } from "@/content/site-content";
import { ScrollReveal } from "@/components/shared/section-primitives";

export function FinalCTASection() {
  const briefingHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(siteConfig.briefingSubject)}`;

  return (
    <section id="contact" className="scroll-mt-24 border-b border-border-subtle">
      <div className="section-shell">
        <div className="container-main">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-display-lg text-foreground">
                {finalCtaContent.headline}
              </h2>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={briefingHref}
                  className="inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-body-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  {finalCtaContent.cta}
                </Link>
                <Link
                  href={briefingHref}
                  className="text-body-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {siteConfig.contactEmail}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
