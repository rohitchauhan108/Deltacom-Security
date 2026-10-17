"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, FileCheck, CalendarCheck, Presentation } from "lucide-react";

// Motion Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const MobileCTA = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-[#012a4a] via-[#013a63] to-[#01497c]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(251,146,60,0.15)_1px,transparent_1px)] bg-[length:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-orange-500/15 border border-orange-400/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <Phone className="h-4 w-4 text-orange-300 mr-2" />
            <span className="text-orange-200 font-bold tracking-wider uppercase text-xs">
              Request a Security Assessment
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Protect Your Project with{" "}
            <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 bg-clip-text text-transparent inline-block">
              Confidence &amp; Professional Security
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed">
              Protect your construction site, infrastructure project, commercial
              property, or remote location with a professionally managed mobile
              surveillance solution from Deltacom Security.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
              Our team will evaluate your project, discuss your security
              objectives, and recommend a solution tailored to your operational
              needs.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons Section */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
              Choose Your Commercial Security Next Step
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Choose a next step that works for your team
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/contact/"
              className="group relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white p-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden text-center"
            >
              <FileCheck className="h-4 w-4 shrink-0" />
              <span>Request a Proposal</span>
            </Link>

            <Link
              href="/contact/"
              className="group relative flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-orange-300/50 text-white p-4 rounded-2xl font-bold text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-300 overflow-hidden text-center"
            >
              <CalendarCheck className="h-4 w-4 text-orange-300 shrink-0" />
              <span>Schedule Consultation</span>
            </Link>

            <Link
              href="/contact/"
              className="group relative flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#013a63] to-[#005f99] backdrop-blur-md border border-white/15 hover:border-orange-300/40 text-white p-4 rounded-2xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden text-center"
            >
              <Presentation className="h-4 w-4 text-orange-300 shrink-0" />
              <span>Live Demonstration</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileCTA;