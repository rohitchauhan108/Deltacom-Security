"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

// Motion Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const TrustStatement = () => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-white via-slate-50 to-orange-50/30 relative overflow-hidden">
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,58,99,0.03)_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge Icon */}
         

          {/* Minimal Italicized Statement */}
          <p className="text-md sm:text-lg lg:text-lg italic leading-relaxed text-slate-700 font-medium max-w-3xl mx-auto">
            &ldquo;Deltacom Security brings years of commercial security integration
            experience to every project. Our team designs, installs, supports,
            and manages enterprise video surveillance, access control,
            networking, and remote monitoring solutions for commercial
            businesses, construction companies, government agencies, and
            critical infrastructure throughout the Mid-Atlantic region and
            beyond.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStatement;