"use client";

import { asymmetricDisadvantageContent } from "@/content/site-content";
import {
  ScrollReveal,
  SectionIntro,
} from "@/components/shared/section-primitives";

export function AsymmetricDisadvantageSection() {
  return (
    <section
      id="asymmetric-disadvantage"
      className="scroll-mt-24 border-b border-border-subtle"
    >
      <div className="section-shell">
        <div className="container-main">
          <ScrollReveal>
            <SectionIntro
              headline={asymmetricDisadvantageContent.headline}
              subheadline={asymmetricDisadvantageContent.subheadline}
              className="mb-14 lg:mb-16"
            />
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {asymmetricDisadvantageContent.cards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 0.08}>
                <article className="flex h-full flex-col border-t border-border pt-6 lg:pt-8">
                  <h3 className="text-label text-accent">{card.title}</h3>
                  <p className="mt-4 text-body-lg text-foreground-muted">
                    {card.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
