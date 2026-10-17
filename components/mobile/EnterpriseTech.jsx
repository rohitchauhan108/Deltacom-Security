"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Camera,
  Monitor,
  Cloud,
  Sun,
  Wifi,
  Activity,
  Volume2,
  CheckCircle2,
  Battery,
  Clock,
  HardDrive,
  Cpu,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EnterpriseTech = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Camera,
      title: "High-Definition Video Surveillance",
      description:
        "Enterprise-grade Axis Communications cameras deliver exceptional image quality, infrared night vision, wide-area coverage, and intelligent video analytics.",
    },
    {
      icon: Monitor,
      title: "24/7 Live Video Monitoring",
      description:
        "Professional monitoring specialists verify events in real time and follow customer-approved response procedures to help reduce false alarms and improve response efficiency.",
    },
    {
      icon: Cloud,
      title: "Cloud Video Management",
      description:
        "Secure cloud-based video management provides authorized users with remote access to live and recorded video from virtually anywhere.",
    },
    {
      icon: Sun,
      title: "Solar-Powered Operation",
      description:
        "Solar-powered systems provide reliable security in locations where utility power is unavailable or impractical.",
    },
    {
      icon: Wifi,
      title: "Cellular Connectivity",
      description:
        "Wireless communication eliminates the need for on-site internet service while providing secure connectivity to the monitoring platform.",
    },
    {
      icon: Volume2,
      title: "Audio & Visual Deterrence",
      description:
        "Integrated speakers and warning strobes can be remotely activated during verified security events to help discourage unauthorized activity.",
    },
    {
      icon: Activity,
      title: "Remote System Health Monitoring",
      description:
        "Continuous monitoring helps identify potential issues before they impact system performance, including:",
      list: [
        { name: "Camera Status", icon: Camera },
        { name: "Battery Health", icon: Battery },
        { name: "Cellular Connectivity", icon: Wifi },
        { name: "Recording Status", icon: Clock },
        { name: "Storage Capacity", icon: HardDrive },
        { name: "System Diagnostics", icon: Cpu },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".et-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (i % 2) * 0.1,
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
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#01497c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#427DF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 et-item">
          <div className="inline-flex items-center bg-[#01497c]/10 border border-[#01497c]/20 rounded-full px-5 py-2 mb-6">
            <span className="text-[#01497c] font-bold tracking-wide text-sm uppercase">
              Enterprise Technology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#013a63] mb-6 tracking-tight leading-tight">
            Dependable Performance in{" "}
            <span className="bg-gradient-to-r from-[#01497c] to-[#427DF6] bg-clip-text text-transparent">
              Demanding Environments
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Every mobile surveillance solution is designed to provide dependable
            performance in demanding environments.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.slice(0, 6).map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="et-item">
                <div className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 hover:border-[#01497c]/40 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-start group">
                  <div className="w-14 h-14 bg-[#013a63] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#013a63]/15 group-hover:bg-[#01497c] group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013a63] mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Wide Feature: Remote System Health Monitoring */}
        {features[6] && (
          <div className="et-item">
            <div className="bg-slate-50/90 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#013a63] text-white rounded-2xl flex items-center justify-center shadow-md">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013a63]">
                    {features[6].title}
                  </h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {features[6].description}
                </p>
              </div>

              {/* Sub-list Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features[6].list.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/70 shadow-sm hover:border-[#01497c]/30 transition-all duration-200"
                    >
                      <div className="p-2 bg-[#01497c]/10 rounded-xl text-[#01497c]">
                        <ItemIcon className="h-5 w-5" />
                      </div>
                      <span className="text-[#013a63] font-bold text-base">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default EnterpriseTech;