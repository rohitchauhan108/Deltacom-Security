"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Camera,
  Monitor,
  Sun,
  Cloud,
  Wifi,
  Activity,
  Brain,
  Wrench,
  Award,
  ShieldCheck,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseMobile = () => {
  const sectionRef = useRef(null);

  const reasons = [
    {
      icon: Camera,
      title: "Enterprise-Grade Axis Communications Cameras",
    },
    {
      icon: Monitor,
      title: "24/7 Live Video Monitoring",
    },
    {
      icon: Sun,
      title: "Solar-Powered Mobile Surveillance Platforms",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Video Management",
    },
    {
      icon: Wifi,
      title: "Cellular Connectivity",
    },
    {
      icon: Brain,
      title: "AI Video Analytics",
    },
    {
      icon: Activity,
      title: "Remote System Health Monitoring",
    },
    {
      icon: Wrench,
      title: "Professional Installation & Support",
    },
    {
      icon: Award,
      title: "Commercial & Government Security Experience",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
    },
    {
      icon: Globe,
      title: "Responsive Local Service with Nationwide Project Support",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".why-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
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
      className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#01497c]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#427DF6]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-16 why-item">
          <div className="inline-flex items-center bg-[#01497c]/10 border border-[#01497c]/20 rounded-full px-5 py-2 mb-6">
            <span className="text-[#01497c] font-bold tracking-wide text-sm uppercase">
              Why Choose Deltacom Security?
            </span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
              Deltacom Security is a commercial security integrator specializing in
              advanced video surveillance, access control, and remote monitoring
              solutions for businesses, contractors, government agencies, and
              critical infrastructure.
            </p>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Our mobile surveillance solutions are built using the same enterprise
              technologies trusted in commercial security environments.
            </p>
          </div>
        </div>

        {/* List Section Wrapper */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-100">
          
          <div className="text-center mb-10 pb-6 border-b border-slate-100 why-item">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#013a63] tracking-tight">
              What Sets Us Apart
            </h3>
          </div>

          {/* List Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {reasons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="why-item">
                  <div className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/70 hover:bg-[#013a63] border border-slate-200/60 hover:border-[#013a63] transition-all duration-300">
                    
                    {/* Icon Badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center text-[#01497c] group-hover:text-white shadow-sm transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Content Item */}
                    <span className="text-base sm:text-lg font-bold text-[#013a63] group-hover:text-white leading-snug transition-colors duration-300">
                      {item.title}
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

export default WhyChooseMobile;