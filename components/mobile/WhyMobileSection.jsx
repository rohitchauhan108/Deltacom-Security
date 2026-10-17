"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Hammer,
  Network,
  Zap,
  Tent,
  Home,
  Warehouse,
  MapPin,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const usecases = [
  { icon: Hammer, name: "Construction Projects" },
  { icon: Network, name: "Infrastructure Improvements" },
  { icon: Zap, name: "Utility Work" },
  { icon: Tent, name: "Temporary Facilities" },
  { icon: Home, name: "Vacant Properties" },
  { icon: Warehouse, name: "Equipment Storage Areas" },
  { icon: MapPin, name: "Remote Locations" },
  { icon: AlertTriangle, name: "Emergency Response Operations" },
];

// Motion Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const listContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

const WhyMobileSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Gradients & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.08)_1px,transparent_1px)] bg-[length:36px_36px] pointer-events-none" />
      <div className="absolute top-1/4 -right-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Header */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 mb-16 items-stretch">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-orange-50 to-sky-50 border border-orange-100/80 rounded-full px-5 py-2 mb-6 shadow-sm">
              <span className="text-[#013a63] font-bold tracking-wider text-xs sm:text-sm uppercase">
                Why Mobile Surveillance?
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#013a63] tracking-tight leading-tight">
              Flexible, Rapid,{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Reliable Protection
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3 flex items-center"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed bg-gradient-to-br from-orange-50/80 via-white to-sky-50/50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              Unlike traditional security systems that require permanent
              installation, mobile surveillance provides{" "}
              <span className="font-extrabold text-[#013a63]">
                rapid deployment
              </span>
              ,{" "}
              <span className="font-extrabold text-[#013a63]">flexibility</span>
              , and reliable protection for changing job sites and temporary
              projects.
            </p>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#013a63] tracking-tight">
            Mobile surveillance is an effective solution for:
          </h3>
        </motion.div>

        {/* Use Cases - Bullet Points List */}
        <motion.div
          variants={listContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {usecases.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={listItemVariant}>
                <div className="group flex items-center gap-4 bg-gradient-to-r from-slate-50/80 to-white hover:from-orange-50/60 hover:to-sky-50/40 p-4 sm:p-5 rounded-2xl border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Icon Badge */}
                  <div className="p-3 bg-gradient-to-r from-[#013a63] to-[#01497c] rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <IconComponent className="h-5 w-5 text-orange-300" />
                  </div>

                  {/* Bullet Text */}
                  <span className="text-base sm:text-lg font-bold text-[#013a63] flex-1">
                    {item.name}
                  </span>

                  {/* Checkmark Accent */}
                  <CheckCircle2 className="h-5 w-5 text-orange-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMobileSection;