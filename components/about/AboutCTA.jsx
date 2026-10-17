import React, { useEffect, useRef } from "react";
import Link from "next/link"; // or 'react-router-dom' ka Link agar use ho raha ho
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-cta",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="py-10 md:py-[120px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6 animate-cta">
            Let&apos;s Talk About What You&apos;re Protecting
          </h2>
          <p className="text-xl text-[#013a63] mb-8 animate-cta">
            Whether you&apos;re securing a single facility, modernizing a system you inherited, or standing up coverage across multiple sites, the first conversation is a straightforward one about what you have, what&apos;s failing, and what it needs to do.
          </p>
          <Link
            href="/contact/"
            className="bg-white border border-gray-200  px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block shadow-md animate-cta"
          >
            <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
              Request a Free Assessment
            </span>
          </Link>
          <p className="mt-6 text-sm text-slate-600">
            Serving Washington, DC, Virginia, and Maryland, and multi-site clients nationwide
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutCTA;
