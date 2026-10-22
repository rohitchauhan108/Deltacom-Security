"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, Mail, Building2, ShieldCheck } from "lucide-react";

const AccessControlCTA = () => {
  return (
    <section className="py-20 bg-[#013a63] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Upgrade Your Access Control System?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you need to secure a single commercial building, replace an aging card access system or centrally manage hundreds of doors across multiple locations, Deltacom designs an integrated security solution around your organization.
            </p>
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8">
              <p className="text-lg font-medium text-white italic">
                Access control. Video surveillance. Video intercom. Intrusion detection. One integrated security environment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
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
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 text-[#013a63]">
            <p className="text-2xl font-bold mb-8">Contact Information</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold">Deltacom Security, LLC</p>
                  <p className="text-slate-600">4000 Legato Road, Suite 1100</p>
                  <p className="text-slate-600">Fairfax, VA 22033</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <a href="tel:+17033451012" className="text-blue-600 hover:underline">703-345-1012</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:support@deltacomsecurity.com" className="text-blue-600 hover:underline">support@deltacomsecurity.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold">DCJS ID</p>
                  <p className="text-slate-600">#11-15782</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessControlCTA;
