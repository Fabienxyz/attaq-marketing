import Link from "next/link";
import { footerContent, siteConfig } from "@/content/site-content";

export function SiteFooter() {
  const briefingHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(siteConfig.briefingSubject)}`;

  return (
    <footer className="bg-background-elevated">
      <div className="section-shell !pb-12 !pt-16">
        <div className="container-main">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-display-md text-foreground">
                {footerContent.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <Link
                href={briefingHref}
                className="text-body-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.contactEmail}
              </Link>
              <p className="font-display text-body-sm text-foreground-subtle">
                ATTAQ.AI
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-border-subtle pt-8">
            <div className="flex flex-col gap-2 text-body-sm text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Attaq.ai. All rights reserved.</p>
              <p>Continuous Attack Path Analysis</p>
            </div>
            <p className="mt-4 max-w-4xl text-[0.75rem] leading-relaxed text-foreground-subtle">
              {footerContent.trademarkNotice}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
