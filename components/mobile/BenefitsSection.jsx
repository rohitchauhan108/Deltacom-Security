"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  HandCoins,
  Users,
  Wrench,
  Boxes,
  Siren,
  FileText,
  CircleDollarSign,
  MapPinned,
  AlertTriangle,
  FileCheck2,
  Eye,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const sectionRef = useRef(null);

  const benefits = [
    {
      icon: Shield,
      name: "Reduce Theft",
      description: "Active visual deterrence and real-time alerts prevent valuable asset losses.",
    },
    {
      icon: HandCoins,
      name: "Reduce Vandalism",
      description: "High-definition coverage discourages property damage and graffiti across remote areas.",
    },
    {
      icon: Users,
      name: "Deter Trespassing",
      description: "Automated audio/visual warnings alert unauthorized visitors after hours.",
    },
    {
      icon: Wrench,
      name: "Protect Equipment",
      description: "Continuous monitoring of heavy machinery, vehicles, and specialized job tools.",
    },
    {
      icon: Boxes,
      name: "Protect Stored Materials",
      description: "Safeguard high-value copper, raw supplies, and laydown inventory on site.",
    },
    {
      icon: Siren,
      name: "Improve Site Safety",
      description: "Ensure compliance with safety protocols and identify hazardous site activity quickly.",
    },
    {
      icon: FileText,
      name: "Document Site Activity",
      description: "Maintain clear video logs for project progress, delivery tracking, and audits.",
    },
    {
      icon: CircleDollarSign,
      name: "Reduce Security Costs",
      description: "Replace or supplement costly traditional security guard services efficiently.",
    },
    {
      icon: MapPinned,
      name: "Monitor Multiple Locations",
      description: "Manage and view multiple active job sites seamlessly from a single dashboard.",
    },
    {
      icon: AlertTriangle,
      name: "Improve Incident Response",
      description: "Verified live video feeds expedite priority dispatch for local law enforcement.",
    },
    {
      icon: FileCheck2,
      name: "Support Insurance Documentation",
      description: "Access cloud-archived video evidence to resolve claims and worker disputes rapidly.",
    },
    {
      icon: Eye,
      name: "Maintain Visibility Across Large Projects",
      description: "Comprehensive multi-angle field coverage across sprawling commercial acreage.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".bnf-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: (i % 2) * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-24 lg:py-32 bg-gradient-to-br from-[#012a4a] via-[#013a63] to-[#01497c] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Subtle Glow Filters */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#427DF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#01497c]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 bnf-item">
          <div className="inline-flex items-center bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2 mb-6">
            <span className="text-sky-200 font-bold tracking-wide text-sm uppercase">
              Benefits of Mobile Surveillance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Built to Protect &amp; Empower Your Project
          </h2>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Our mobile surveillance solutions help organizations:
          </p>
        </div>

        {/* Integrated Divided List Wrapper (No separate cards) */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 divide-y md:divide-y-0 divide-white/10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bnf-item pt-6 md:pt-0 ${
                    index === 0 ? "pt-0" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5 group">
                    {/* Icon Badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-sky-300 group-hover:bg-[#427DF6] group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Content Detail */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="h-4 w-4 text-sky-400 flex-shrink-0" />
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {benefit.name}
                        </h3>
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;