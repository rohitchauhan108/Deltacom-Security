'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Linkedin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer content animation
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            once: true
          }
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: 'Commercial Security Home', href: '/' },
    { name: 'About Deltacom Security', href: '/about/' },
    { name: 'Commercial Security Solutions', href: '/services/commercial-security/' },
    { name: 'Intrusion & Fire Protection', href: '/services/fire-protection/' },
    // TEMPORARILY HIDDEN - Cybersecurity page disabled
    // { name: 'Cybersecurity', href: '/services/cyber-security/' },
    { name: 'Request a Security Assessment', href: '/contact/' }
  ];

  const services = [
    { name: 'Video Surveillance', href: '/services/video-surveillance/' },
    { name: 'Access Control', href: '/services/access-control/' },
    // TEMPORARILY HIDDEN - Cybersecurity page disabled
    // { name: 'Cybersecurity', href: '/services/cyber-security/' },
    { name: 'Intrusion & Fire Protection', href: '/services/fire-protection/' },
    { name: 'Networking Solutions', href: '/services/networking-solutions/' },
    { name: 'Mobile Surveillance', href: '/services/mobile-surveillance/' }
  ];

  const areasWeServe = [
    { name: 'Washington, DC', href: '/commercial-security-systems-washington-dc/' },
    { name: 'Fairfax, VA', href: '/commercial-security-systems-fairfax-va/' },
    { name: 'Arlington, VA', href: '/commercial-security-systems-arlington-va/' },
    { name: 'Alexandria, VA', href: '/commercial-security-systems-alexandria-va/' },
    { name: 'Woodbridge, VA', href: '/commercial-security-systems-woodbridge-va/' },
    { name: 'Tysons, VA', href: '/commercial-security-systems-tysons-va/' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/deltacom-security/', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-cyan-400' }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-[#013a63] via-[#01497c] to-[#013a63] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-white/5 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 rounded-2xl border border-white/5 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 backdrop-blur-3xl rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div ref={contentRef} className="py-16 lg:py-20">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-3 space-y-5">
              {/* Logo + Company Name on 1 Row */}
           
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white leading-tight">Deltacom Security, LLC</h3>
                  <p className="text-gray-200 text-xs mt-0.5 leading-relaxed font-medium">
                    4000 Legato Road, Suite 1100, Fairfax, VA 22033
                  </p>
                  <p className="text-gray-200 text-xs mt-1 leading-relaxed font-medium">
                    Founded in 2017
                  </p>
                  <p className="text-[#4FC3F7] text-xs mt-2 font-semibold tracking-wide">
                    Virginia DCJS License #11-15782
                  </p>
                </div>

              <p className="text-gray-300 leading-relaxed text-sm">
                Serving Virginia, Maryland, Washington, DC, and nationwide where applicable, Deltacom Security provides end-to-end smart security and IT solutions.
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-medium text-sm"
                >
                  Request a Free Security Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas We Serve */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Areas We Serve</h4>
              <ul className="space-y-3">
                {areasWeServe.map((area) => (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="text-gray-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <MapPin className="w-4 h-4 text-gray-100" />
                  </div>
                  <div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      4000 Legato Road, Suite 1100, Fairfax, VA 22033
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <Phone className="w-4 h-4 text-gray-100" />
                  </div>
                  <a
                    href="tel:+17033451012"
                    className="text-gray-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    703-345-1012
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg shrink-0">
                    <Mail className="w-4 h-4 text-gray-100" />
                  </div>
                  <a
                    href="mailto:support@deltacomsecurity.com"
                    className="text-gray-200 hover:text-white transition-colors duration-300 text-sm break-all"
                  >
                    support@deltacomsecurity.com
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target='_blank'
                        rel="noreferrer"
                        className={`p-2 bg-white/10 text-white rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Deltacom Security. All rights reserved.</p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/privacy/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;