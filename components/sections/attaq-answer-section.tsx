"use client";

import { attaqAnswerContent } from "@/content/site-content";
import {
  ScrollReveal,
  SectionIntro,
} from "@/components/shared/section-primitives";

export function AttaqAnswerSection() {
  return (
    <section
      id="attaq-answer"
      className="scroll-mt-24 border-b border-border-subtle bg-background-elevated"
    >
      <div className="section-shell">
        <div className="container-main">
          <ScrollReveal>
            <SectionIntro
              headline={attaqAnswerContent.headline}
              subheadline={attaqAnswerContent.subheadline}
              className="mb-14 lg:mb-20"
            />
          </ScrollReveal>

          <div className="space-y-0 divide-y divide-border-subtle">
            {attaqAnswerContent.capabilities.map((capability, index) => (
              <ScrollReveal key={capability.title} delay={index * 0.06}>
                <article className="grid gap-4 py-8 first:pt-0 last:pb-0 lg:grid-cols-[4rem_1fr] lg:gap-8 lg:py-10">
                  <p className="font-display text-2xl text-foreground-subtle lg:text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-display text-xl text-foreground lg:text-2xl">
                      {capability.title}
                    </h3>
                    <p className="max-w-2xl text-body-lg text-foreground-muted">
                      {capability.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
