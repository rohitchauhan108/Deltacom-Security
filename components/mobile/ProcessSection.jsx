"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  FileText,
  Truck,
  Monitor,
  Headphones,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Security Consultation",
      description:
        "We review your project, security objectives, and site requirements.",
    },
    {
      step: "02",
      icon: FileText,
      title: "System Design",
      description:
        "Our team recommends the appropriate camera coverage, monitoring strategy, and equipment configuration.",
    },
    {
      step: "03",
      icon: Truck,
      title: "Deployment",
      description:
        "The surveillance platform is delivered, positioned, configured, and tested by experienced technicians.",
    },
    {
      step: "04",
      icon: Monitor,
      title: "Live Monitoring",
      description:
        "Professional monitoring begins according to your approved schedule and response procedures.",
    },
    {
      step: "05",
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "Deltacom Security provides technical support, remote health monitoring, maintenance, and system management throughout the project.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".pr-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
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
      className="py-20 lg:py-28 bg-slate-50/60 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#01497c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#427DF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 pr-item">
          <div className="inline-flex items-center bg-[#01497c]/10 border border-[#01497c]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#01497c] font-bold tracking-wide text-xs uppercase">
              How Our Process Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#013a63] mb-4 tracking-tight leading-tight">
            From Consultation to{" "}
            <span className="bg-gradient-to-r from-[#01497c] to-[#427DF6] bg-clip-text text-transparent">
              Ongoing Support
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            From initial consultation through deployment and ongoing support, we
            manage every detail of your mobile surveillance solution.
          </p>
        </div>

        {/* Clean Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 lg:pl-10">
          
          {/* Continuous Timeline Line */}
          <div className="absolute left-6 sm:left-8 lg:left-10 top-6 bottom-6 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

          <div className="space-y-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="pr-item relative pl-8 sm:pl-12">
                  
                  {/* Timeline Circle Node & Icon */}
                  <div className="absolute -left-6 sm:-left-8 lg:-left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#013a63] border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>

                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#01497c]/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-extrabold tracking-widest text-[#427DF6] uppercase bg-[#427DF6]/10 px-2.5 py-1 rounded-md">
                        Step {step.step}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#013a63] mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {step.description}
                    </p>
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

export default ProcessSection;