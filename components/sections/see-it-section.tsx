"use client";

import Image from "next/image";
import { seeItContent } from "@/content/site-content";
import securityGraph from "@/design-reference/security-graph.jpg";
import {
  ScrollReveal,
  SectionIntro,
} from "@/components/shared/section-primitives";

export function SeeItSection() {
  return (
    <section id="see-it" className="scroll-mt-24 border-b border-border-subtle">
      <div className="section-shell">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <SectionIntro
                  headline={seeItContent.headline}
                  subheadline={seeItContent.subheadline}
                  className="mb-10"
                />

                <ul className="space-y-5">
                  {seeItContent.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-4 text-body-lg text-foreground-muted"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <figure className="overflow-hidden rounded-sm border border-border bg-background-elevated p-2 lg:p-3">
                <Image
                  src={securityGraph}
                  alt="Attaq.ai Security Graph showing attack paths, crown jewels, and timeline analysis"
                  width={1670}
                  height={942}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
