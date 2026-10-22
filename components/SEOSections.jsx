'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Shield, 
  Zap, 
  Headphones, 
  Globe, 
  ArrowRight,
  Building2,
  Lock,
  Camera,
  Network,
  Users,
  Warehouse,
  School,
  Church,
  Activity,
  HardHat,
  Eye,
  Video,
  Key
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SEOSections = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section) => {
        if (!section) return;

        const title = section.querySelector('h2');
        const content = section.querySelectorAll('.animate-item');

        gsap.fromTo(title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              once: true
            }
          }
        );

        gsap.fromTo(content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              once: true
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const vendors = [
    { name: 'Axis Communications', logo: '/images/partners-logos/axis.webp' },
    { name: 'YourSixOS', logo: null },
    { name: 'Brivo', logo: '/images/partners-logos/Brivo.webp' },
    { name: 'DSX', logo: '/images/partners-logos/dsx.webp' },
    { name: 'Verkada', logo: '/images/partners-logos/verkada.webp' },
    { name: 'Rhombus', logo: '/images/partners-logos/rhombus.webp' },
    { name: 'Eagle Eye Networks', logo: '/images/partners-logos/eagle-eye-networks.webp' },
    { name: 'Honeywell', logo: '/images/partners-logos/honeywell.webp' },
    { name: 'PDK', logo: '/images/partners-logos/pdk.webp' },
    { name: 'Schlage', logo: null },
    { name: 'HID Global', logo : '/images/partners-logos/hid.webp' }
  ];

  const industries = [
    { name: 'Commercial Office', icon: Building2 },
    { name: 'Construction', icon: Activity },
    { name: 'Government', icon: Shield },
    { name: 'Healthcare', icon: Activity },
    { name: 'Multifamily', icon: Users },
    { name: 'Warehousing & Logistics', icon: Warehouse },
    { name: 'Retail', icon: Lock },
    { name: 'Education', icon: School },
    { name: 'Religious Organizations', icon: Church }
  ];

  // Tailored dataset for the modern Construction Site Security cards
  const constructionServices = [
    {
      title: 'Mobile Surveillance Trailers',
      desc: 'Self-powered, rapid-deployment solar mast platforms designed for heavy environments.',
      image: '/images/mobile-survelliance.webp',
      icon: Video
    },
    {
      title: 'Live Video Monitoring',
      desc: 'Real-time proactive threat detection utilizing advanced remote intervention teams.',
      image: 'https://images.pexels.com/photos/7431356/pexels-photo-7431356.jpeg',
      icon: Eye
    },
    {
      title: 'Temporary Jobsite Cameras',
      desc: 'High-definition solar and cellular connected perimeter defense units.',
      image: 'https://images.pexels.com/photos/30546987/pexels-photo-30546987/free-photo-of-close-up-of-security-camera-overlooking-busy-street.jpeg?cs=tinysrgb&dpr=1&w=1200',
      icon: Camera
    },
    {
      title: 'Construction Access Control',
      desc: 'Turnstile gating systems, badging setups, and rugged cloud check-in options.',
      image: 'https://images.pexels.com/photos/1990764/pexels-photo-1990764.jpeg?cs=tinysrgb&dpr=1&w=1200',
      icon: Key
    },
    {
      title: 'Theft & Loss Prevention',
      desc: 'A.I. powered asset tracking alerts tailored to eliminate hardware tool losses.',
      image: 'https://images.pexels.com/photos/6266304/pexels-photo-6266304.jpeg',
      icon: Shield
    },
    {
      title: 'Remote Guarding Systems',
      desc: 'Virtual check-ins, automated voice down lines, and continuous network validation.',
      image: 'https://images.pexels.com/photos/27505236/pexels-photo-27505236.jpeg',
      icon: HardHat
    }
  ];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="overflow-hidden bg-white">
      {/* Section 1: Commercial Security Systems */}
      <section 
        ref={addToRefs}
        className="relative py-0 lg:py-0 bg-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/20 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="animate-item">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#013a63] text-sm font-bold mb-8">
                <div className="w-2 h-2 rounded-full bg-[#013a63] animate-pulse" />
                <span>Integrated Security Solutions</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#013a63] mb-8 leading-[1.15] tracking-tight">
                Commercial Security Systems in <br />
                <span className="bg-gradient-to-r from-[#013a63] to-[#2a6f97] bg-clip-text text-transparent">
                  Washington, DC, Virginia & Maryland
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="animate-item">
                  Deltacom Security delivers advanced commercial security solutions designed to protect businesses, employees, and assets across Washington DC, Virginia, and Maryland.
                </p>
                <p className="animate-item">
                  We specialize in designing, installing, and supporting integrated security systems including{" "}
                  <Link href="/services/access-control/" className="font-semibold text-[#014f86] underline underline-offset-2 hover:text-[#013a63]">
                    access control
                  </Link>
                  ,{" "}
                  <Link href="/services/video-surveillance/" className="font-semibold text-[#014f86] underline underline-offset-2 hover:text-[#013a63]">
                    video surveillance
                  </Link>
                  , alarm monitoring, intercom systems,{" "}
                  <Link href="/services/networking-solutions/" className="font-semibold text-[#014f86] underline underline-offset-2 hover:text-[#013a63]">
                    structured cabling
                  </Link>
                  , and commercial wireless infrastructure.
                </p>
                <p className="animate-item">
                  Our approach is centered around delivering a true single-pane-of-glass experience—bringing security, surveillance, and network infrastructure together into one unified platform for easier management, stronger visibility, and better protection.
                </p>
                <p className="animate-item">
                  Whether your business operates from a single office or across multiple locations nationwide, Deltacom provides scalable solutions designed to grow with you.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="animate-item relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-[2.5rem] -z-10 blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/images/commercial/HeroSectionIMage.webp" 
                  alt="Commercial Security Systems" 
                  width={800} 
                  height={600}
                  className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#013a63]/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#013a63] rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[#013a63] font-bold text-lg leading-tight">Trusted Protection</div>
                      <div className="text-gray-600 text-sm">Founded in 2017</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#013a63]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Businesses Choose Deltacom Security */}
      <section 
        ref={addToRefs}
        className="py-20 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-4">
              Why Businesses Choose Deltacom Security
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#013a63] to-[#2a6f97] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Single Pane of Glass Solutions",
                desc: "Access control, surveillance, alarms, and networking managed in one ecosystem."
              },
              {
                icon: Zap,
                title: "Non-Proprietary Systems",
                desc: "Flexible solutions that scale with your business."
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Dependable support whenever you need it."
              },
              {
                icon: Globe,
                title: "Local Expertise, National Capability",
                desc: "Serving Washington, DC, Virginia, Maryland, and nationwide multi-site clients."
              }
            ].map((item, index) => (
              <div key={index} className="animate-item p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#013a63] transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#013a63] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#013a63] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Trusted Technology Partners */}
      <section 
        ref={addToRefs}
        className="py-20 lg:py-32 bg-[#013a63] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Trusted Technology Partners
              </h2>
              <p className="text-blue-100/70 text-lg">
                We partner with industry-leading manufacturers to provide you with the most reliable and advanced security technology available.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {vendors.map((vendor) => (
              <div key={vendor.name} className="animate-item flex items-center justify-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group relative overflow-hidden h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {vendor.logo ? (
                  <div className="relative w-full h-full p-2">
                    <Image 
                      src={vendor.logo} 
                      alt={`${vendor.name} logo`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain filter brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <span className="text-xl font-black tracking-tighter text-white/30 group-hover:text-white transition-all duration-300 uppercase italic group-hover:scale-110">
                    {vendor.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Industries We Serve */}
      <section 
        ref={addToRefs}
        className="py-20 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deltacom Security provides tailored solutions for a wide range of industries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="animate-item group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 text-center">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto group-hover:bg-blue-50 transition-colors">
                    <industry.icon className="w-8 h-8 text-[#2a6f97]" />
                  </div>
                </div>
                <span className="font-bold text-[#013a63] group-hover:text-[#2a6f97] transition-colors">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgraded Section 5: Construction Site Security (Unique Card Grid Design) */}
      <section
        ref={addToRefs}
        className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden"
      >
        {/* Subtle geometric background line pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#013a63_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 mb-16 items-end">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#013a63]/5 border border-[#013a63]/10 text-[#013a63] text-xs font-bold uppercase tracking-wider mb-4">
                <span>Enterprise Jobsite Defense</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#013a63] tracking-tight">
                Construction Site Security
              </h2>
            </div>
            <p className="text-lg text-gray-600 lg:border-l-2 lg:border-gray-300 lg:pl-6">
              Protect every phase of your construction project with high-performance mobile infrastructure, active video verification, and rugged deployment systems.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {constructionServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={index} 
                  className="animate-item group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Image Container with Subtle Image Scaling Aspect */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                    
                    {/* Unique Floating Absolute Icon Over image context */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg text-[#013a63] group-hover:bg-[#013a63] group-hover:text-white transition-colors duration-300">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Content Context */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#013a63] mb-3 group-hover:text-[#2a6f97] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                      {service.desc}
                    </p>
                
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOSections;