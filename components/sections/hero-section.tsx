"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { betterTogetherContent, heroContent } from "@/content/site-content";
import elastiflowLogo from "@/design-reference/logo_elastiflow_black2.jpg";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border-subtle"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(61,139,253,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="section-shell relative !pt-32 lg:!pt-44">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-4xl space-y-10 lg:space-y-12"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-label text-foreground-muted"
            >
              {heroContent.eyebrow}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-5"
            >
              <h1 className="text-display-xl text-foreground">
                {heroContent.headline}
                <span className="block text-foreground-muted">
                  {heroContent.headlineSecondary}
                </span>
              </h1>
              <p className="text-label text-accent">
                {heroContent.subheadline}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-3xl text-body-lg text-foreground-muted"
            >
              {heroContent.body}
            </motion.p>

            <motion.div
              id="better-together"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-5 border-t border-border-subtle pt-10"
            >
              <p className="text-label text-center text-foreground-subtle">
                Better together
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-3">
                {betterTogetherContent.stack.map((item, index) => (
                  <Fragment key={item.name}>
                    <StackItem item={item} />
                    {index < betterTogetherContent.stack.length - 1 && (
                      <span
                        className="text-base text-foreground-subtle"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    )}
                  </Fragment>
                ))}
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <span className="text-sm text-foreground-subtle" aria-hidden="true">
                  ↓
                </span>
                {betterTogetherContent.outcomes.map((outcome) => (
                  <p
                    key={outcome}
                    className="text-center font-display text-lg text-foreground"
                  >
                    {outcome}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
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
      <div className="text-lg leading-none lg:text-xl">
        <Image
          src={elastiflowLogo}
          alt="ElastiFlow"
          width={1273}
          height={414}
          className="h-[2em] w-auto"
        />
      </div>
    );
  }

  return (
    <p
      className={cn(
        "text-center font-medium tracking-tight text-foreground",
        item.type === "brand"
          ? "font-display text-lg lg:text-xl"
          : "font-sans text-base lg:text-lg",
      )}
    >
      {item.name}
    </p>
  );
}
