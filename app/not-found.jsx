import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Deltacom Security',
  description: 'The page you requested could not be found. Explore Deltacom Security services or contact our team for help.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="error-404 min-h-[60vh] bg-slate-50 px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">We Couldn&apos;t Find That Page</h1>
        <p className="mx-auto mt-5 max-w-xl text-slate-600">
          The page you requested does not exist or may have moved. Explore our security services or contact our team for a quick recommendation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="button button-primary rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800">
            Return to Home
          </Link>
          <Link href="/contact/" className="button button-secondary rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50">
            Contact Deltacom Security
          </Link>
        </div>
        <nav aria-label="Helpful links" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-sky-700">
            <li><Link href="/services/access-control/">Commercial Access Control Systems</Link></li>
            <li><Link href="/services/video-surveillance/">Commercial Video Surveillance</Link></li>
            <li><Link href="/services/fire-protection/">Intrusion &amp; Fire Protection</Link></li>
            <li><Link href="/services/networking-solutions/">Structured Cabling &amp; Network Infrastructure</Link></li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
