"use client";

import Image from "next/image";
import { seeItContent } from "@/content/site-content";
import securityGraph from "@/design-reference/security-graph.jpg";
import {
  ScrollReveal,
  SectionIntro,
} from "@/components/shared/section-primitives";

const bulletsLeft = seeItContent.bullets.slice(0, 2);
const bulletsRight = seeItContent.bullets.slice(2, 4);
const bulletCenter = seeItContent.bullets[4];

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex gap-4 text-body-lg text-foreground-muted">
      <span
        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
        aria-hidden="true"
      />
      <span>{text}</span>
    </li>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-5">
      {items.map((bullet) => (
        <BulletItem key={bullet} text={bullet} />
      ))}
    </ul>
  );
}

export function SeeItSection() {
  return (
    <section id="see-it" className="scroll-mt-24 border-b border-border-subtle">
      <div className="section-shell">
        <div className="container-main">
          <div className="mx-auto max-w-4xl space-y-6 lg:space-y-7">
            <ScrollReveal>
              <SectionIntro
                headline={seeItContent.headline}
                subheadline={seeItContent.subheadline}
                align="center"
                className="space-y-3"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <figure className="overflow-hidden rounded-sm border border-border bg-background-elevated">
                <div className="p-1.5 lg:p-2">
                  <Image
                    src={securityGraph}
                    alt="Attaq.ai Security Graph showing attack paths, crown jewels, and timeline analysis"
                    width={1670}
                    height={942}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>

                <figcaption className="border-t border-border-subtle px-6 py-5 lg:px-8 lg:py-6">
                  <div className="grid gap-6 md:grid-cols-2 md:gap-0">
                    <div className="md:pr-8">
                      <BulletList items={bulletsLeft} />
                    </div>
                    <div className="md:border-l md:border-border-subtle md:pl-8">
                      <BulletList items={bulletsRight} />
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border-subtle pt-6">
                    <ul className="flex justify-center">
                      <BulletItem text={bulletCenter} />
                    </ul>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
