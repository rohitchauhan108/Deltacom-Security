"use client";

import MobileHero from "@/components/mobile/MobileHero";
import WhyChooseMobile from "@/components/mobile/WhyChooseMobile";
import DesignedFor from "@/components/mobile/DesignedFor";
import EnterpriseTech from "@/components/mobile/EnterpriseTech";
import BenefitsSection from "@/components/mobile/BenefitsSection";
import IndustriesSection from "@/components/mobile/IndustriesSection";
import ProcessSection from "@/components/mobile/ProcessSection";
import MobileFAQ from "@/components/mobile/MobileFAQ";
import WhyMobileSection from "@/components/mobile/WhyMobileSection";
import MobileCTA from "@/components/mobile/MobileCTA";
import TrustStatement from "@/components/mobile/TrustStatement";
import MobileAbout from "@/components/mobile/MobileAbout";

export default function MobileSurveillancePage() {
  return (
    <>
      <MobileHero />
      <MobileAbout/>
      <WhyChooseMobile />
      <DesignedFor />
      <EnterpriseTech />
      <BenefitsSection />
      <IndustriesSection />
      <ProcessSection />
      <MobileFAQ />
      <WhyMobileSection />
      <MobileCTA />
      <TrustStatement />
    </>
  );
}
