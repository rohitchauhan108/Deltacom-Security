"use client";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Deltacom Security (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              at{" "}
              <a
                href="https://deltacomsecurity.com"
                className="text-blue-600 hover:text-blue-800"
              >
                https://deltacomsecurity.com
              </a>{" "}
              (the &quot;Site&quot;).
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Personal Data
                </h3>
                <p className="text-gray-700">
                  We may collect personal information that you voluntarily provide,
                  such as your name, email address, phone number, and company name
                  when you contact us through our website forms, email, or phone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Automatically Collected Data
                </h3>
                <p className="text-gray-700">
                  When you visit the Site, we may automatically collect certain
                  information about your device and usage patterns, including IP
                  address, browser type, operating system, pages visited, and time
                  spent on the Site.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>
                To improve our website and services based on your feedback
              </li>
              <li>To comply with legal obligations</li>
              <li>
                To analyze website usage patterns to enhance user experience
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only when required by law or
              with trusted partners who assist us in operating our website and
              conducting our business, under strict confidentiality agreements.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over
              the internet or electronic storage is 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have rights regarding your
              personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Site may use cookies and similar tracking technologies to
              enhance your browsing experience. You can control cookie settings
              through your browser preferences.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Site may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies before providing
              personal information.
            </p>
          </section>

          {/* Policy Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by updating the &quot;Last updated&quot; date at the top
              of this page.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <p className="text-gray-800 font-semibold">Deltacom Security</p>
              <p className="text-gray-700">Virginia, Maryland, Washington, DC, and nationwide where applicable</p>
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:info@deltacomsecurity.com" className="text-blue-600">
                  info@deltacomsecurity.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
