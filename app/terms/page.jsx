"use client";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using this website at{" "}
              <a
                href="https://deltacomsecurity.com"
                className="text-blue-600 hover:text-blue-800"
              >
                https://deltacomsecurity.com
              </a>{" "}
              (the &quot;Site&quot;), you accept and agree to be bound by and comply with
              these Terms of Service. If you do not agree to abide by the above,
              please do not use this service.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Deltacom Security&apos;s website
              for personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this license
              you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display (commercial or non-commercial)
              </li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials</li>
              <li>Use the materials for any unlawful purpose or illegal activity</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on Deltacom Security&apos;s website are provided on an &quot;as
              is&quot; basis. Deltacom Security makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitations of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Deltacom Security or its suppliers be liable for
              any damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Deltacom Security&apos;s website,
              even if Deltacom Security or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Accuracy of Materials */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Accuracy of Materials
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on Deltacom Security&apos;s website could include
              technical, typographical, or photographic errors. Deltacom Security
              does not warrant that any of the materials on the website are
              accurate, complete, or current. Deltacom Security may make changes
              to the materials contained on the website at any time without notice.
            </p>
          </section>

          {/* Materials and Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Materials and Content
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on Deltacom Security&apos;s website may be out of date, and
              Deltacom Security makes no commitment to update such materials. By
              using this website, you acknowledge that Deltacom Security has no
              obligation to provide you with any support or maintenance.
            </p>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Links and External Websites
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Deltacom Security has not reviewed all of the sites linked to the
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              Deltacom Security of the site. Use of any such linked website is at
              the user&apos;s own risk.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modifications to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Deltacom Security may revise these terms of service for the website
              at any time without notice. By using this website, you are agreeing
              to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws of Washington, DC, and you irrevocably
              submit to the exclusive jurisdiction of the courts located in this
              location.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a user of the website, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Provide accurate and complete information when using the website
              </li>
              <li>Not engage in any harmful or illegal activities</li>
              <li>
                Not attempt to disrupt the normal functioning of the website
              </li>
              <li>Respect the intellectual property rights of Deltacom Security</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
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
