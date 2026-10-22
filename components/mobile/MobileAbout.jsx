"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Cpu, Video, Sun, Radio } from "lucide-react";

// Import your desired image here
import AboutImage from "@/public/images/newImags/image2.webp";

gsap.registerPlugin(ScrollTrigger);

const MobileAbout = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for content blocks
      gsap.fromTo(
        ".about-animate",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Card hover effect trigger
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".feature-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "Axis Cameras",
      description: "High-definition, enterprise-grade optical security cameras",
    },
    {
      icon: Video,
      title: "Cloud Management",
      description: "Secure, real-time remote access from any browser or device",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Live Monitoring",
      description: "Active threat detection and rapid dispatch response plans",
    },
    {
      icon: Sun,
      title: "Solar Powered",
      description: "Continuous self-sustaining operation for off-grid sites",
    },
    {
      icon: Radio,
      title: "Cellular Connectivity",
      description: "Encrypted, high-speed remote transmission nationwide",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#013a63]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#427DF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge */}
            <div className="about-animate inline-flex items-center gap-2 bg-[#01497c]/10 text-[#01497c] px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#01497c]" />
              <span>ENTERPRISE-GRADE PROTECTION</span>
            </div>

            {/* Section H2 Title */}
            <h2 className="about-animate text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#013a63] leading-tight tracking-tight">
              Protect Your Project with{" "}
              <span className="bg-gradient-to-r from-[#01497c] to-[#427DF6] bg-clip-text text-transparent">
                Intelligent Mobile Surveillance
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="about-animate text-lg text-slate-700 leading-relaxed font-normal">
              Construction sites, infrastructure projects, equipment yards, and
              remote facilities face constant risks from theft, vandalism,
              trespassing, and unauthorized access. Deltacom Security provides
              fully managed mobile surveillance solutions that deliver
              enterprise-grade protection without the need for permanent
              infrastructure.
            </p>

            {/* Paragraph 2 */}
            <p className="about-animate text-base sm:text-lg text-slate-600 leading-relaxed">
              Our mobile surveillance systems combine{" "}
              <strong className="text-[#013a63] font-semibold">
                Axis Communications cameras
              </strong>
              ,{" "}
              <strong className="text-[#013a63] font-semibold">
                cloud video management
              </strong>
              ,{" "}
              <strong className="text-[#013a63] font-semibold">
                24/7 live video monitoring
              </strong>
              ,{" "}
              <strong className="text-[#013a63] font-semibold">
                solar-powered operation
              </strong>
              , and{" "}
              <strong className="text-[#013a63] font-semibold">
                cellular connectivity
              </strong>{" "}
              to provide reliable security for temporary and long-term projects
              throughout Virginia, Maryland, Washington, DC, and nationwide.
            </p>

            {/* Paragraph 3 */}
            <p className="about-animate text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you&apos;re securing a commercial development, highway
              project, utility site, warehouse, or vacant property, Deltacom
              Security delivers a professional security solution designed to
              help protect your people, equipment, and assets.
            </p>

            {/* Integrated Security Note */}
            <div className="about-animate bg-gradient-to-r from-[#013a63]/5 to-blue-50 rounded-2xl p-5 border border-[#013a63]/10">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Mobile surveillance can be paired with{" "}
                <Link
                  href="/services/access-control/"
                  className="text-[#014f86] font-semibold underline underline-offset-2 hover:text-[#013a63] transition-colors"
                >
                  commercial access control systems
                </Link>{" "}
                for temporary site trailers, gates and visitor checkpoints, and
                integrated with fixed-site cameras and intercoms as your
                project transitions into permanent operations.
              </p>
            </div>
          </div>

          {/* Right Column - Image Showcase & Stats Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame */}
            <div className="about-animate relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-3">
              <div className="relative h-[400px] sm:h-[480px] w-full rounded-2xl overflow-hidden">
                <Image
                  src={AboutImage}
                  alt="Deltacom Security Mobile Surveillance Trailer Unit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#013a63]/80 via-transparent to-transparent" />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[#013a63] text-lg">
                        Rapid Deployment Units
                      </h3>
                      <p className="text-sm text-slate-600">
                        100% Self-Powered &amp; Managed
                      </p>
                    </div>
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Floating Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#427DF6]/20 to-[#7826CF]/20 rounded-3xl -z-10 blur-xl" />
          </div>
        </div>

        {/* Feature Grid Below Content */}
        <div className="feature-grid mt-16 pt-12 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="feature-card bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#01497c]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#01497c]/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#01497c]" />
                </div>
                <h3 className="font-bold text-[#013a63] text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MobileAbout;