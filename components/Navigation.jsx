"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Shield, Phone, Mail, ChevronDown, MapPin, Clock,
  KeyRound, Video, BellRing, Wifi, Cable, Radio, Lock
} from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Deltacom", href: "/about/" },
    { 
      name: "Solutions", 
      href: "#",
      dropdown: [
        { 
          name: "Access Control Systems", 
          href: "/services/access-control/",
          desc: "Keycard & biometric entry management",
          icon: KeyRound
        },
        { 
          name: "Video Surveillance / CCTV", 
          href: "/services/video-surveillance/",
          desc: "HD security cameras & remote feeds",
          icon: Video
        },
        { 
          name: "Alarm Monitoring", 
          href: "/services/fire-protection/",
          desc: "24/7 central station monitoring",
          icon: BellRing
        },
        { 
          name: "Network Access Point Installation", 
          href: "/services/networking-solutions/",
          desc: "Enterprise Wi-Fi & AP installation",
          icon: Wifi
        },
        { 
          name: "Structured Cabling", 
          href: "/services/networking-solutions/",
          desc: "Cat6 & Fiber optic infrastructure",
          icon: Cable
        },
        { 
          name: "Intercom Systems", 
          href: "/services/access-control/",
          desc: "Audio/video entry and communication systems",
          icon: Radio
        },
      ]
    },
    { name: "Commercial Security", href: "/services/commercial-security/" },
    { name: "Intrusion & Fire", href: "/services/fire-protection/" },
    // TEMPORARILY HIDDEN - Cybersecurity page disabled
    // { name: "Cybersecurity", href: "/services/cyber-security/" },
    { name: "Contact & Assessment", href: "/contact/" },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      {/* 1. TOP BLUE BAR */}
      <div className="bg-[#013a63] text-white text-sm relative z-40">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Virginia, Maryland, Washington, DC & Nationwide</span>
            </div>
            <a
              href="mailto:support@deltacomsecurity.com"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">support@deltacomsecurity.com</span>
            </a>
            <a
              href="tel:+17033451012"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">703-345-1012</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-white/90">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8AM - 6PM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="/contact/"
              className="hidden sm:inline-flex px-4 py-1.5 bg-white text-[#013a63] rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold text-xs"
            >
              Request a Free Security Quote
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STICKY MAIN NAVBAR */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-md border-b border-gray-200/50"
            : "border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105">
              <Image height={64} width={128} src="/images/logo.png" alt="Deltacom Security Logo" className="object-contain h-12 w-auto" />
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7 px-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 py-2 transition-all duration-300 text-sm font-medium whitespace-nowrap ${
                      (item.href !== "#" && pathname.startsWith(item.href)) || activeDropdown === item.name
                        ? "text-[#01497c] font-semibold"
                        : "text-gray-700 hover:text-[#01497c]"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative py-2 transition-all duration-300 group text-sm font-medium whitespace-nowrap ${
                      pathname === item.href
                        ? "text-[#01497c] font-semibold"
                        : "text-gray-700 hover:text-[#01497c]"
                    }`}
                  >
                    {item.name}
                    {(pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01497c] rounded-full"></div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01497c] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                )}

                {/* --- MODERN 2-COLUMN MEGA SUBMENU --- */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full -left-12 w-[640px] bg-white shadow-2xl rounded-2xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Top Decorative Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#013a63] to-[#01497c]"></div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {item.dropdown.map((subItem) => {
                        const IconComponent = subItem.icon;
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100/80 transition-all duration-200 group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#013a63]/5 text-[#013a63] group-hover/item:bg-[#013a63] group-hover/item:text-white transition-all duration-200 shrink-0">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-800 group-hover/item:text-[#01497c] transition-colors leading-tight">
                                {subItem.name}
                              </div>
                              <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                                {subItem.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact/"
              className="px-5 py-2.5 bg-[#013a63] text-white rounded-full hover:bg-[#01497c] transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-semibold whitespace-nowrap"
            >
              Schedule a Security Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 bg-[#013a63] hover:bg-[#01497c]"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#013a63] rounded-xl">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    Deltacom Security
                  </div>
                  <div className="text-xs text-gray-600">DC Metro Area</div>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 py-6 overflow-y-auto">
              <div className="space-y-2 px-6">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-2 space-y-1 my-1">
                            {item.dropdown.map((subItem) => {
                              const IconComponent = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-3 py-2.5 px-4 text-sm text-gray-600 hover:text-[#01497c] hover:bg-gray-50 rounded-lg transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <IconComponent className="w-4 h-4 text-[#013a63]" />
                                  <span className="text-xs font-medium">{subItem.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                          pathname === item.href
                            ? "bg-[#013a63] text-white font-semibold"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 space-y-4">
              <div className="space-y-3">
                <a
                  href="mailto:support@deltacomsecurity.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>support@deltacomsecurity.com</span>
                </a>
                <a
                  href="tel:+17033451012"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>703-345-1012</span>
                </a>
              </div>
              <Link
                href="/contact/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3 px-4 bg-[#013a63] text-white text-center rounded-xl hover:bg-[#01497c] transition-colors font-semibold"
              >
                Schedule a Security Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;