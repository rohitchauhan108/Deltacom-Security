"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const tagsRef = useRef([]);
  const cardRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animations
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        subheadingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
      );

      // Animate tags with stagger
      gsap.fromTo(
        tagsRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.9,
        }
      );

      // Animate floating card
      gsap.fromTo(
        cardRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 1.2,
        }
      );

      // Floating animation for background elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Single hero background avoids loading hidden carousel slides. */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/7.webp')" }}
        aria-hidden="true"
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/50 to-gray-100/10"></div>

      {/* Background 3D Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Large Circle */}
        <div className="floating-element absolute top-20 right-20 w-96 h-96 rounded-full  bg-gradient-to-br from-white/5 to-gray-100/20 backdrop-blur-sm"></div>

        {/* Medium Circle */}
        <div
          className="floating-element absolute top-40 right-40 w-64 h-64 rounded-full  bg-gradient-to-br from-gray-50/10 to-white/5 backdrop-blur-sm"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Small floating elements */}
        <div className="floating-element absolute top-60 left-20 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100/40 to-gray-200/40 backdrop-blur-sm rotate-12"></div>

        {/* Vertical lines pattern */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
        <div className="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200/30 to-transparent"></div>
        <div className="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex items-center min-h-[88vh] px-4 lg:px-8">
        <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)] gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-5xl">
            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              <span
                ref={(el) => (tagsRef.current[0] = el)}
                className="px-4 py-2 bg-[#01497c] text-white text-xs md:text-sm rounded-full"
              >
                Security Systems
              </span>
              <span
                ref={(el) => (tagsRef.current[1] = el)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-xs md:text-sm rounded-full border border-gray-200"
              >
                CCTV Surveillance
              </span>
              <span
                ref={(el) => (tagsRef.current[2] = el)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-xs md:text-sm rounded-full border border-gray-200"
              >
                Access Control
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                ref={headingRef}
                className="text-4xl lg:text-6xl font-bold text-gray-100 leading-tight max-w-5xl"
              >
                Commercial Security Systems in Washington, DC, Virginia & Maryland
              </h1>

              <p
                ref={subheadingRef}
                className="text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed"
              >
                Protecting businesses throughout Washington, DC, Maryland and Virginia with smart, end-to-end security solutions that safeguard your people, property, and
                operations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
               className="px-8 py-4 bg-[#01497c] text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
               onClick={() => router.push('/contact')}
               >
                Get Free Consultation
              </button>
              <button
               className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl border border-gray-200 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
               onClick={() => router.push('/about')}
               >
                About Deltacom Security
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-200">
                  Serving Washington, DC Metro & Nationwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          {/* <div className="relative hidden md:flex justify-center lg:justify-end ">
            <div
              ref={cardRef}
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 max-w-sm w-full"
            >
             
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#01497c]">
                    DC Metro Security
                  </h3>
                  <p className="text-sm text-gray-500">
                    Advanced monitoring system
                  </p>
                </div>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

             
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-[#01497c]">24/7</div>
                  <div className="text-xs text-gray-500">Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">24/7</div>
                  <div className="text-xs text-gray-500">Live Support</div>
                </div>
              </div>

        
              <div className="relative bg-gradient-to-br from-[#01497c] to-gray-700 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white text-sm font-medium">
                  Live Monitoring Active
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  All systems operational
                </p>
              </div>
            </div>

            <div className="floating-element absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl opacity-60"></div>
            <div
              className="floating-element absolute -bottom-8 -left-4 w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl opacity-40"
              style={{ animationDelay: "2s" }}
            ></div>
          </div> */}
        </div>
      </div>

    </section>
  );
}
