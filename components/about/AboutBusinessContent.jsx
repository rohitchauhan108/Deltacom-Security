const capabilities = [
  {
    title: 'Access control',
    text: 'Design, installation, and integration of commercial credentialing systems, including wireless lock platforms and cloud-managed access control. We also modify and modernize existing systems rather than insisting on a full rip-and-replace when the installed base still has life in it.',
  },
  {
    title: 'Video surveillance',
    text: 'Camera system design, cloud-managed and on-premise video, retention planning, and export workflows built so footage is actually retrievable when someone needs it.',
  },
  {
    title: 'Intrusion and fire protection',
    text: 'Alarm systems, detection, and monitoring.',
  },
  {
    title: 'Network and structured cabling',
    text: 'The infrastructure the rest of it runs on, designed by the same team that designs the security system.',
  },
  {
    title: 'Cybersecurity',
    text: 'Hardening for the systems we install, because a camera on a flat network is a liability, not an asset.',
  },
  {
    title: 'Mobile and temporary surveillance',
    text: 'Deployable coverage for construction sites, remote assets, and locations without permanent infrastructure.',
  },
];

export default function AboutBusinessContent() {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            Deltacom Security was founded in 2017 to solve a problem our team kept running into from the inside: commercial security systems were being sold as products instead of designed as infrastructure. Cameras that nobody could pull footage from. Access control that didn&apos;t survive a staff change. Networks treated as somebody else&apos;s problem.
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We started Deltacom to do it the other way around — design first, document everything, and stay accountable after the install is signed off.
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            The company is nine years old. The people running it are not. Our leadership and technical staff bring more than 25 years of combined industry experience across enterprise IT, network infrastructure, identity management, and physical security integration. That combination is deliberate. Modern security systems are network systems, and the projects that go wrong are usually the ones where nobody owned both sides.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63]">
              Designed, Installed, and Supported by One Accountable Team
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We design, install, configure, and support integrated commercial security systems across Washington, DC, Virginia, and Maryland, and we support multi-site clients well beyond the region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <article key={capability.title} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-[#013a63] mb-3">{capability.title}</h3>
                <p className="text-slate-600 leading-relaxed">{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
              Licensed, Certified, and On the Record
            </h2>
            <ul className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <li><strong className="text-slate-800">Virginia DCJS Private Security Services Business License #11-15782</strong> — current through 31 July 2028</li>
              <li><strong className="text-slate-800">Virginia SWaM Certification #801864</strong> — certified Small, Micro, and Minority-Owned Business through the Virginia Department of Small Business and Supplier Diversity, current through 7 March 2028</li>
              <li><strong className="text-slate-800">Virginia SCC Entity #S6876751</strong></li>
              <li>Fully licensed and insured for commercial and government work</li>
            </ul>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              For government buyers: our SWaM certification supports small-business and set-aside participation goals on Commonwealth of Virginia procurements, and we hold current registrations for state and federal contracting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Small Enough to Answer the Phone. Staffed to Finish the Job.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Deltacom operates with a team of twelve, including five field technicians. That size is a feature, not a limitation. You deal with the people who designed your system, and the person accountable for the outcome is reachable.
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            For larger deployments and multi-state work, we extend capacity through established subcontractor relationships — including an eight-year working partnership with a regional fire and security contractor for dispatch depth. We remain the prime on those engagements and retain design, configuration, certified technical work, quality control, and final acceptance. Coordination, scheduling, and documentation standards stay centralized with us. You get one point of accountability regardless of how many locations or crews are involved.
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We currently manage cloud video deployments spanning multiple states and the District of Columbia under this model, with centralized scheduling and documentation and locally dispatched field work.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-8">
            The Part Most Integrators Skip
          </h2>
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p><strong className="text-slate-800">We document everything.</strong> Every device we install is recorded with model, serial, location, warranty term, and configuration detail in an asset management system with QR-tagged records. When a device fails in year three, we know exactly what it is, when it went in, and whether it&apos;s still covered. When you need a system inventory for an audit, an insurance review, or a procurement, it already exists.</p>
            <p><strong className="text-slate-800">We plan for the handoff.</strong> Systems get inherited — by new facility managers, new IT staff, new owners. We build and leave behind documentation that survives staff turnover, because a security system nobody understands is a security system nobody maintains.</p>
            <p><strong className="text-slate-800">We stay after acceptance.</strong> Service response, inspections, monitoring, and system health are ongoing commitments, not an upsell we introduce after the install invoice clears.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
