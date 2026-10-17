"use client";

import React from "react";
import Link from "next/link";
import servicesData from "../../../public/data/services.json";
import ServiceDetailClient from "../../../components/ServiceDetailClient";

const slug = "networking-solutions";
const serviceData = servicesData.services.find((s) => s.slug === slug);

export default function NetworkingSolutionsPage() {
  return (
    <>
      <ServiceDetailClient service={serviceData} slug={slug} />
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100">
            <h3 className="text-xl font-bold text-[#013a63] mb-3">
              Network Infrastructure for Access Control and Video
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              The network underpinning your{" "}
              <Link
                href="/services/access-control/"
                className="text-[#014f86] font-semibold underline underline-offset-2 hover:text-[#013a63] transition-colors"
              >
                commercial access control systems
              </Link>{" "}
              and surveillance cameras is the most critical component of a
              reliable physical security deployment. We design, cable and
              commission dedicated security VLANs, PoE+ switching, fiber
              backhaul and encrypted controller networks so door panels,
              readers and cameras stay online.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-slate-700 leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.55rem] before:w-2 before:h-2 before:rounded-full before:bg-[#013a63]">
                Structured Cat6A and fiber OSDP/Wiegand pathways
              </li>
              <li className="text-sm text-slate-700 leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.55rem] before:w-2 before:h-2 before:rounded-full before:bg-[#013a63]">
                Managed PoE+ switches and UPS for door controllers
              </li>
              <li className="text-sm text-slate-700 leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.55rem] before:w-2 before:h-2 before:rounded-full before:bg-[#013a63]">
                Segmented security VLANs and firewall zones
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
