"use client";

import Image from "next/image";
import { protectInvestmentContent } from "@/content/site-content";
import betterTogether from "@/design-reference/BetterTogether.jpeg";
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

          <ScrollReveal delay={0.06}>
            <figure className="mx-auto max-w-4xl overflow-hidden rounded-sm border border-border bg-background-subtle p-2 lg:p-3">
              <Image
                src={betterTogether}
                alt="Elastic Security, ElastiFlow, and ATTAQ.AI better together"
                width={1600}
                height={1000}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
