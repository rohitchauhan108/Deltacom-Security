import Link from 'next/link';
import { business, localBusinessSchema } from '@/lib/business';

const LocationTemplate = ({
  city,
  state,
  slug,
  seoTitle,
  seoDescription,
  intro,
  localContent,
  cardDescriptions = {},
  industries = [],
  whyChoose = [],
  faqs = []
}) => {
  const fullUrl = `https://deltacomsecurity.com/${slug}/`;

  const services = [
    { key: 'access', name: 'Commercial Access Control Systems', href: '/services/access-control/', icon: 'key' },
    { key: 'video', name: 'Commercial Video Surveillance', href: '/services/video-surveillance/', icon: 'camera' },
    { key: 'intrusion', name: 'Intrusion & Alarm Systems', href: '/services/fire-protection/', icon: 'shield' },
    { key: 'cloud', name: 'Cloud Video Management', href: '/services/video-surveillance/', icon: 'cloud' },
    { key: 'intercom', name: 'Access Control and Video Intercom Integration', href: '/services/access-control/', icon: 'bell' },
    { key: 'cabling', name: 'Structured Cabling & Network Infrastructure', href: '/services/networking-solutions/', icon: 'cpu' },
    { key: 'monitoring', name: 'Commercial Security and Alarm Monitoring', href: '/services/commercial-security/', icon: 'wrench' }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Commercial Security Systems in ${city}, ${state}`,
    description: seoDescription,
    url: fullUrl,
    serviceType: 'Commercial Security Systems',
    areaServed: `${city}, ${state}`,
    provider: localBusinessSchema('https://deltacomsecurity.com/'),
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION - Matched to Footer Gradient & Background */}
      <header className="relative bg-gradient-to-br from-[#013a63] via-[#01497c] to-[#013a63] text-white overflow-hidden border-b border-white/10">
        {/* Footer-matching Grid Lines Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Background Elements matching Footer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full border border-white/5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-3xl"></div>
          <div className="absolute bottom-10 left-16 w-48 h-48 rounded-2xl border border-white/5 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-3xl rotate-45"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10">
          <div className="max-w-3xl">
            {/* Location Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Serving {city}, {state} & Surrounding Areas
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Commercial Security Systems in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">{city}, {state}</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
              {intro}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link
                href="/contact/"
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm shadow-lg hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300"
              >
                Get Free Security Assessment
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href="tel:7033451012"
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                703-345-1012
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Support Available
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Non-Proprietary Open Systems
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* SERVICES SECTION */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
              Tailored Security Infrastructure
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 sm:text-4xl">
              Commercial Security Services in {city}
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              End-to-end smart security solutions that protect your people, property, and operational continuity, from{" "}
              <Link href="/services/access-control/" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">
                commercial access control
              </Link>{" "}
              and{" "}
              <Link href="/services/video-surveillance/" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">
                video surveillance
              </Link>{" "}
              to network infrastructure and fire protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article 
                key={s.name} 
                className="group relative bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-sky-500 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                    <ServiceIcon type={s.icon} />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900 text-lg group-hover:text-sky-600 transition-colors">
                    <Link href={s.href} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {s.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {cardDescriptions[s.key]}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                  Explore {s.name}
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DETAILS GRID (INDUSTRIES & LOCAL CONTENT + SIDEBAR) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          {/* LEFT 2-COLUMN SECTION */}
          <div className="lg:col-span-2 space-y-12">
            {/* Industries Served */}
            <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Industries We Protect</h2>
              <p className="text-slate-600 text-sm mt-1">Customized access control, surveillance, and network infrastructure tailored to site specifications.</p>
              
              <div className="mt-6 flex flex-wrap gap-2.5">
                {industries.map((ind) => (
                  <span 
                    key={ind} 
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-200/80"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </section>

            {/* About City / Local Content */}
            <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Commercial Security Solutions in {city}, {state}</h2>
              <div className="prose prose-slate max-w-none mt-4 text-slate-600 leading-relaxed text-base">
              <div dangerouslySetInnerHTML={{ __html: localContent }} />
            </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 h-fit sticky top-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">Why Choose Deltacom</h3>
            <p className="text-xs text-slate-400 mt-1">Trusted security integrator across the DC Metro Area & Nationwide.</p>
            
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              {whyChoose.map((item) => (
                <SidebarFeature key={item} text={item} />
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link 
                href="/contact/"
                className="block w-full text-center px-5 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm rounded-lg shadow-md transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </aside>
        </div>

        {/* FAQS SECTION - CENTERED */}
        <section className="mt-20 flex flex-col items-center">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2 text-sm">Common questions regarding commercial security design, installation, and monitoring in {city}.</p>
          </div>

          <div className="mt-10 space-y-4 w-full max-w-4xl mx-auto">
            {faqs.map((f) => (
              <details 
                key={f.q} 
                className="group bg-white border border-slate-200 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden transition-colors hover:border-slate-300 shadow-sm text-left"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 text-base">
                  <span>{f.q}</span>
                  <span className="ml-4 shrink-0 transition group-open:-rotate-180 text-sky-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="mt-20 relative bg-gradient-to-r from-slate-900 via-[#0a192f] to-slate-900 rounded-3xl p-8 sm:p-12 text-center overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Secure Your Commercial Facility in {city}?</h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base">
              Speak with a Deltacom security specialist to request a site survey or discuss a tailored system design.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact/" 
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium text-sm rounded-xl shadow-lg transition-all"
              >
                Request Free Assessment
              </Link>
              <a 
                href="tel:7033451012" 
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-xl border border-slate-700 transition-all"
              >
                Call 703-345-1012
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Helper component for Sidebar feature bullet points
function SidebarFeature({ text }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span>{text}</span>
    </li>
  );
}

// Clean inline SVG Icons replacing raw emojis
function ServiceIcon({ type }) {
  const strokeWidth = 1.8;
  const className = "w-6 h-6";

  switch (type) {
    case 'key':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      );
    case 'camera':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'cloud':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 15a4 4 0 004 4h9a5 5 0 001-.09 5 5 0 003-8.35 4 4 0 00-7.38-2.75A4 4 0 003 15z" />
        </svg>
      );
    case 'bell':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      );
    case 'cpu':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'wrench':
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
  }
}

export default LocationTemplate;