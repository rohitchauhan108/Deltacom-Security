"use client";

import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can a mobile surveillance system be deployed?",
    answer:
      "Deployment schedules vary based on project location and equipment availability. Contact our team to discuss your project timeline.",
  },
  {
    question: "Can I view the cameras remotely?",
    answer:
      "Yes. Authorized users can securely access live and recorded video using our cloud-based video management platform.",
  },
  {
    question: "Do you provide live monitoring?",
    answer:
      "Yes. We offer professional 24/7 live video monitoring with customer-specific response procedures.",
  },
  {
    question: "Are the systems solar powered?",
    answer:
      "Yes. Our mobile surveillance solutions utilize solar-powered systems designed for locations where permanent electrical service may not be available.",
  },
  {
    question: "Can systems be relocated during a project?",
    answer:
      "Yes. Mobile surveillance platforms can be repositioned as project requirements change.",
  },
  {
    question: "What happens if suspicious activity is detected?",
    answer:
      "Verified events are handled according to your approved response plan and may include audio intervention, customer notification, or coordination with local authorities when appropriate.",
  },
];

const MobileFAQ = () => {
  const [openItem, setOpenItem] = useState("item-0");

  // Split FAQs into two even arrays for left and right columns
  const midIndex = Math.ceil(faqs.length / 2);
  const leftColFaqs = faqs.slice(0, midIndex);
  const rightColFaqs = faqs.slice(midIndex);

  return (
    <section
      id="faq"
      className="py-16 lg:py-24 bg-slate-100/70 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#01497c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#427DF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#01497c]/10 border border-[#01497c]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#01497c] font-bold tracking-wide text-xs uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#013a63] mb-3 tracking-tight leading-tight">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-[#01497c] to-[#427DF6] bg-clip-text text-transparent">
              We&apos;ve Got Answers
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Everything you need to know about our mobile surveillance solutions.
          </p>
        </div>

        {/* Dual Column Accordion Root */}
        <Accordion.Root
          type="single"
          collapsible
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
          value={openItem}
          onValueChange={(val) => setOpenItem(val ?? "")}
        >
          {/* Left Column */}
          <div className="space-y-4">
            {leftColFaqs.map((faq, index) => {
              const globalIndex = index;
              return (
                <Accordion.Item
                  key={`item-${globalIndex}`}
                  value={`item-${globalIndex}`}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-200/90 hover:border-[#01497c]/30 transition-all duration-300 overflow-hidden group"
                >
                  <Accordion.Trigger className="group w-full flex justify-between items-center text-left p-6 data-[state=open]:bg-slate-50/50 transition-colors duration-300 focus:outline-none rounded-2xl">
                    <span className="text-base sm:text-lg font-bold text-[#013a63] pr-4 leading-snug tracking-tight">
                      {faq.question}
                    </span>
                    <div className="p-2.5 bg-[#013a63] text-white rounded-xl flex-shrink-0 group-hover:bg-[#01497c] transition-colors duration-300">
                      <ChevronDown className="h-4 w-4 text-white transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-6 pt-1">
                      <div className="border-l-2 border-[#01497c] pl-4 py-1">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColFaqs.map((faq, index) => {
              const globalIndex = index + midIndex;
              return (
                <Accordion.Item
                  key={`item-${globalIndex}`}
                  value={`item-${globalIndex}`}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-200/90 hover:border-[#01497c]/30 transition-all duration-300 overflow-hidden group"
                >
                  <Accordion.Trigger className="group w-full flex justify-between items-center text-left p-6 data-[state=open]:bg-slate-50/50 transition-colors duration-300 focus:outline-none rounded-2xl">
                    <span className="text-base sm:text-lg font-bold text-[#013a63] pr-4 leading-snug tracking-tight">
                      {faq.question}
                    </span>
                    <div className="p-2.5 bg-[#013a63] text-white rounded-xl flex-shrink-0 group-hover:bg-[#01497c] transition-colors duration-300">
                      <ChevronDown className="h-4 w-4 text-white transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-6 pt-1">
                      <div className="border-l-2 border-[#01497c] pl-4 py-1">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </div>
        </Accordion.Root>
      </div>
    </section>
  );
};

export default MobileFAQ;