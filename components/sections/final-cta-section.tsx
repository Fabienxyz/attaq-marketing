"use client";

import Link from "next/link";
import { BriefingRequestButton } from "@/components/briefing/briefing-request-button";
import { finalCtaContent, siteConfig } from "@/content/site-content";
import { ScrollReveal } from "@/components/shared/section-primitives";

export function FinalCTASection() {
  const briefingHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(siteConfig.briefingSubject)}`;

  return (
    <section id="contact" className="scroll-mt-24 border-b border-border-subtle">
      <div className="section-shell">
        <div className="container-main">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl space-y-8">
              <h2 className="text-display-lg text-foreground">
                {finalCtaContent.headline}
              </h2>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <BriefingRequestButton>{finalCtaContent.cta}</BriefingRequestButton>
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
