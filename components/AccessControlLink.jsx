import Link from 'next/link';

export default function AccessControlLink() {
  return (
    <p className="py-6 text-center text-sm text-slate-600">
      Need integrated entry management? Explore our{' '}
      <Link href="/services/access-control/" className="font-semibold text-blue-600 underline underline-offset-2">
        commercial access control systems
      </Link>
      .
    </p>
  );
}
