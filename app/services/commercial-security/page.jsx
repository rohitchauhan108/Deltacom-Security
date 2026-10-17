"use client";

import CommercialHero from "@/components/commercial/CommercialHero";
import SecuritySolutions from "@/components/commercial/SecuritySolutions";
import IndustriesWeServe from "@/components/commercial/IndustriesWeServe";
import BusinessesDeltacom from "@/components/commercial/BusinessesDeltacom";
import ProvenResults from "@/components/commercial/ProvenResults";
import CommercialCTA from "@/components/commercial/CommercialCTA";
import AccessControlLink from "@/components/AccessControlLink";

export default function Commercial() {
  return (
    <>
      <CommercialHero />
      <SecuritySolutions />
      <IndustriesWeServe />
      <BusinessesDeltacom />
      <ProvenResults />
      <CommercialCTA />
      <AccessControlLink />
    </>
  );
}
