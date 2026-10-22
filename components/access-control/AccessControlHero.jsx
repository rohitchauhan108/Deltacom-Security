"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Phone, ArrowRight, Cloud, Shield, Video, Smartphone } from "lucide-react";

const AccessControlHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".feature-block",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.5 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const featureBlocks = [
    {
      title: "Cloud and Enterprise Access Control",
      text: "Centralized management for doors, users, credentials and multiple facilities.",
      icon: Cloud,
    },
    {
      title: "Access Control + Video",
      text: "Associate door events with surveillance video for faster verification and investigations.",
      icon: Video,
    },
    {
      title: "Video Intercom + Access Control",
      text: "See and communicate with visitors and grant or deny access through the integrated system.",
      icon: Phone,
    },
    {
      title: "Single Pane of Glass",
      text: "Bring access control, video, intercom and intrusion events into one centralized security environment.",
      icon: Shield,
    },
  ];

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex flex-col pt-20 pb-16 overflow-hidden bg-[#013a63]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new-serv.webp"
          alt="Commercial Access Control Hero"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#013a63]/80 via-[#013a63]/60 to-[#013a63]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
        <div className="hero-content max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Commercial Access Control Systems
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-300 mb-8">
            Secure. Connected. Centrally Managed.
          </h2>
          
          <div className="space-y-6 text-lg text-gray-200 mb-10 leading-relaxed">
            <p>
              Deltacom Security designs, installs, integrates, and supports commercial access control systems for businesses, government agencies, commercial properties, and multi-site organizations throughout Virginia, Maryland, Washington, DC, and nationwide where applicable.
            </p>
            <p>
              Modern access control should do more than unlock a door.
            </p>
            <p>
              Deltacom integrates access control, video surveillance, video intercom and intrusion detection into a unified physical security environment. Authorized personnel manage doors, credentials, cameras, visitors, intercom calls, alarms and security events through a <strong>single pane of glass</strong>.
            </p>
            <p>
              Whether you need to secure one entrance or centrally manage hundreds of doors across multiple locations, Deltacom designs scalable access control solutions around your organization&apos;s security, IT and operational requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 group"
            >
              Request an Access Control Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+17033451012"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 703-345-1012
            </a>
          </div>
          
          <p className="text-xs text-gray-400 mt-4 italic">
            Specific capabilities described on this page depend on the platform selected for your environment. Deltacom confirms what is supported for your facility during the assessment.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {featureBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div key={index} className="feature-block bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 border border-blue-400/30">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {block.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {block.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccessControlHero;
