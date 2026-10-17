"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Hammer,
  Truck,
  Building2,
  Building,
  Zap,
  Warehouse,
  Layers,
  Package,
  Factory,
  Car,
  Home,
  MapPin,
  Network,
  FileText,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DesignedFor = () => {
  const sectionRef = useRef(null);

  const applications = [
    {
      icon: Hammer,
      name: "Construction Sites",
    },
    {
      icon: Truck,
      name: "Highway & Bridge Projects",
    },
    {
      icon: Building2,
      name: "Department of Transportation Projects",
    },
    {
      icon: Network,
      name: "Infrastructure Construction",
    },
    {
      icon: Zap,
      name: "Utility Projects",
    },
    {
      icon: Warehouse,
      name: "Equipment Storage Yards",
    },
    {
      icon: Layers,
      name: "Material Laydown Areas",
    },
    {
      icon: Building,
      name: "Commercial Developments",
    },
    {
      icon: Package,
      name: "Warehouses & Distribution Centers",
    },
    {
      icon: Factory,
      name: "Manufacturing Facilities",
    },
    {
      icon: Car,
      name: "Parking Lots",
    },
    {
      icon: Home,
      name: "Vacant Buildings",
    },
    {
      icon: MapPin,
      name: "Remote Job Sites",
    },
    {
      icon: Network,
      name: "Critical Infrastructure",
    },
    {
      icon: FileText,
      name: "Municipal Projects",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".df-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (i % 5) * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
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
      className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(1,58,99,0.03)_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none" />

      {/* Ambient Blur Bubbles */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#01497c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#427DF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 df-item">
          <div className="inline-flex items-center bg-[#01497c]/10 border border-[#01497c]/20 shadow-sm rounded-full px-5 py-2 mb-6">
            <span className="text-[#01497c] font-bold tracking-wide text-sm uppercase">
              Designed for Commercial Projects
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#013a63] mb-6 tracking-tight leading-tight">
            Our mobile surveillance solutions are{" "}
            <span className="bg-gradient-to-r from-[#01497c] to-[#427DF6] bg-clip-text text-transparent">
              ideal for:
            </span>
          </h2>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {applications.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div key={index} className="df-item">
                <div className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center h-full border border-slate-100 hover:border-[#01497c]/30 relative overflow-hidden flex flex-col items-center justify-center">
                  
                  {/* Top Hover Highlight Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#013a63] via-[#01497c] to-[#427DF6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Icon Frame */}
                  <div className="p-3.5 bg-gradient-to-br from-[#013a63] to-[#01497c] rounded-2xl inline-flex mb-4 shadow-md shadow-[#013a63]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Item Name */}
                  <h3 className="text-sm lg:text-base font-bold text-[#013a63] leading-snug tracking-tight">
                    {app.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DesignedFor;