"use client";

// ============================================================================
// TEMPORARILY DISABLED - Cybersecurity page hidden at client request.
// Nothing has been deleted. The original page is preserved below (commented).
// The route now redirects visitors to the homepage.
//
// CLEANEST PERMANENT REMOVAL: rename this folder so Next.js stops generating
//   the route:  app/services/cyber-security  ->  app/services/_cyber-security-disabled
//
// TO RESTORE: delete the temporary redirect component at the bottom of this
//   file and uncomment the original imports + component below.
// ============================================================================

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import CyberHero from "@/components/cybersecurity/CyberHero";
// import CyberLandscape from "@/components/cybersecurity/CyberLandscape";
// import CybersecurityServices from "@/components/cybersecurity/CybersecurityServices";
// import IndustrySpecific from "@/components/cybersecurity/IndustrySpecific";
// import InfrastructureServices from "@/components/cybersecurity/InfrastructureServices";
// import CyberCTA from "@/components/cybersecurity/CyberCTA";
// import CyberSecurityContent from "@/components/cybersecurity/CyberSecurityContent"
// import CMMCSection from "@/components/cybersecurity/CMMCSection"
// import AccessControlLink from "@/components/AccessControlLink";
//
// export default function Cybersecurity() {
//   return (
//     <>
//       <CyberHero />
//       {/* <CMMCSection /> */}
//       <CyberLandscape />
//       <CyberSecurityContent/>
//       <CybersecurityServices />
//       <IndustrySpecific />
//       <InfrastructureServices />
//       <CyberCTA />
//       <AccessControlLink />
//     </>
//   );
// }

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// TEMPORARY placeholder that replaces the disabled Cybersecurity page.
export default function Cybersecurity() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
