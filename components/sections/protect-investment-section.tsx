"use client";

import { protectInvestmentContent } from "@/content/site-content";
import {
  ScrollReveal,
  SectionIntro,
} from "@/components/shared/section-primitives";

export function ProtectInvestmentSection() {
  return (
    <section
      id="protect-investment"
      className="scroll-mt-24 border-b border-border-subtle bg-background-elevated"
    >
      <div className="section-shell">
        <div className="container-main">
          <ScrollReveal>
            <SectionIntro
              headline={protectInvestmentContent.headline}
              subheadline={protectInvestmentContent.subheadline}
              className="mb-14 lg:mb-16"
            />
          </ScrollReveal>

          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {protectInvestmentContent.points.map((point, index) => (
              <ScrollReveal key={point} delay={index * 0.06}>
                <article className="bg-background-subtle p-8 lg:p-10">
                  <p className="text-body-lg text-foreground">{point}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
