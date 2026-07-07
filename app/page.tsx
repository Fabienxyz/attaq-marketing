import { AsymmetricDisadvantageSection } from "@/components/sections/asymmetric-disadvantage-section";
import { AttaqAnswerSection } from "@/components/sections/attaq-answer-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProtectInvestmentSection } from "@/components/sections/protect-investment-section";
import { SeeItSection } from "@/components/sections/see-it-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AsymmetricDisadvantageSection />
      <AttaqAnswerSection />
      <SeeItSection />
      <ProtectInvestmentSection />
      <FinalCTASection />
    </>
  );
}
