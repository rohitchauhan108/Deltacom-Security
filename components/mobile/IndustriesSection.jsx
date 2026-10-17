"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Hammer,
  Building2,
  Truck,
  Zap,
  Building,
  Plane,
  Factory,
  Boxes,
  Landmark,
  Stethoscope,
  GraduationCap,
  Warehouse,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null);

  const industries = [
    {
      icon: Hammer,
      name: "General Contractors",
    },
    {
      icon: Building2,
      name: "Commercial Developers",
    },
    {
      icon: Truck,
      name: "Heavy Civil Contractors",
    },
    {
      icon: Zap,
      name: "Utility Companies",
    },
    {
      icon: Building,
      name: "Government Agencies",
    },
    {
      icon: Plane,
      name: "Transportation",
    },
    {
      icon: Factory,
      name: "Manufacturing",
    },
    {
      icon: Boxes,
      name: "Logistics",
    },
    {
      icon: Warehouse,
      name: "Property Management",
    },
    {
      icon: Landmark,
      name: "Commercial Real Estate",
    },
    {
      icon: GraduationCap,
      name: "Education",
    },
    {
      icon: Stethoscope,
      name: "Healthcare",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".ind-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: (i % 3) * 0.06,
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
      className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#01497c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#427DF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 ind-item">
          <div className="inline-flex items-center bg-[#01497c]/10 border border-[#01497c]/20 rounded-full px-5 py-2 mb-6">
            <span className="text-[#01497c] font-bold tracking-wide text-sm uppercase">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#013a63] mb-6 tracking-tight leading-tight">
            Trusted Across the{" "}
            <span className="bg-gradient-to-r from-[#01497c] to-[#427DF6] bg-clip-text text-transparent">
              Commercial &amp; Public Sectors
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Deltacom Security supports organizations throughout the commercial
            and public sectors, including:
          </p>
        </div>

        {/* Single Outer Wrapper Container (No individual cards) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {industries.map((ind, index) => {
              const IconComponent = ind.icon;
              return (
                <div key={index} className="ind-item">
                  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-[#013a63] border border-slate-200/60 hover:border-[#013a63] transition-all duration-300 cursor-default">
                    
                    {/* Icon Badge */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center text-[#01497c] group-hover:text-white shadow-sm transition-colors duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    {/* Industry Title */}
                    <span className="text-base font-bold text-[#013a63] group-hover:text-white tracking-tight transition-colors duration-300">
                      {ind.name}
                    </span>
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

export default IndustriesSection;