"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle, 
  ShieldCheck, 
  Video, 
  Smartphone, 
  Building2, 
  Settings,
  ChevronRight,
  PlusCircle,
  HelpCircle,
  Globe,
  Users,
  Lock
} from "lucide-react";

const AccessControlContent = () => {
  return (
    <div className="bg-white">
      {/* Installation Section */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
                Commercial Access Control Installation
              </h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  Deltacom provides complete commercial access control installation, integration, service and maintenance.
                </p>
                <p>
                  Whether you are installing a new access control system, expanding an existing system or replacing aging technology, our team designs a solution for a single facility or a multi-location enterprise.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200">
              <h3 className="text-xl font-bold text-[#013a63] mb-6">Our capabilities include:</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Cloud-based access control",
                  "Enterprise access control systems",
                  "Card and credential access",
                  "Mobile credentials",
                  "Keyless entry systems",
                  "Smart card and proximity readers",
                  "OSDP and OSDP Secure Channel",
                  "Network door controllers",
                  "Electric strikes and magnetic locks",
                  "Request-to-exit devices",
                  "Door position monitoring",
                  "Automatic door integration",
                  "Elevator access control",
                  "Parking and gate access control",
                  "Visitor management integration",
                  "Video surveillance integration",
                  "Video intercom integration",
                  "Intrusion and alarm integration",
                  "Multi-site centralized management",
                  "Access control reporting and audit trails",
                  "Legacy access control upgrades and migrations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
              Access Control, Video and Intercom &mdash; One Integrated Security Environment
            </h2>
            <p className="text-lg text-slate-600">
              Modern physical security works best when critical technologies work together instead of operating as separate systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="inline-flex p-3 bg-blue-600/10 rounded-xl mb-6">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#013a63] mb-4">Centralized Single Pane of Glass</h3>
                <p className="text-slate-600 mb-6">
                  Deltacom specializes in bringing those technologies together. We integrate access control, <Link href="/services/video-surveillance/" className="text-blue-600 hover:underline">commercial video surveillance systems</Link>, <Link href="/services/commercial-security/" className="text-blue-600 hover:underline">video intercom and visitor management</Link> and <Link href="/services/fire-protection/" className="text-blue-600 hover:underline">intrusion detection and alarm systems</Link> into a centralized <strong>single pane of glass</strong>, giving security personnel a complete view of activity at secured entrances and throughout a facility.
                </p>
                <p className="text-slate-600 mb-6">
                  Authorized personnel get centralized visibility into doors, credentials, cameras, intercom calls, visitors, alarms, schedules, reports and security events. An intercom call comes in, the visitor appears on video, staff speak with the visitor and grant or deny access &mdash; all within one environment, without moving between unrelated applications.
                </p>
                <div className="p-6 bg-blue-600 rounded-2xl text-white font-bold text-center">
                  One Security Environment. Better Visibility. Faster Response.
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-[#013a63] mb-6">Access events are also associated with video, helping security personnel investigate:</h3>
              <ul className="space-y-4">
                {[
                  "Valid credential activity",
                  "Denied access attempts",
                  "Forced-open doors",
                  "Doors held open",
                  "Visitor entry",
                  "After-hours activity",
                  "Other security events"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-slate-600">
                For multi-site organizations, this provides centralized security management across every facility while allowing individual security technologies to maintain appropriate local functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Intercom Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
                Video Intercom Integrated With Access Control
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                A commercial video intercom should be more than a doorbell. Deltacom designs and installs commercial video intercom systems integrated with access control, allowing employees, security personnel and reception staff to identify and communicate with visitors before granting access.
              </p>
              <h3 className="text-xl font-bold text-[#013a63] mb-4">Authorized personnel can:</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Receive a visitor's intercom call",
                  "View live video of the visitor",
                  "Communicate directly with the visitor",
                  "Verify the reason for requesting access",
                  "Grant or deny entry",
                  "Remotely unlock the appropriate door",
                  "Review the associated access and video activity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Integrated video intercom and access control is particularly valuable for:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Commercial offices",
                  "Government facilities",
                  "Warehouses",
                  "Loading docks",
                  "Gated properties",
                  "Healthcare facilities",
                  "Multifamily properties",
                  "Remotely managed entrances"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-blue-300 italic">
                For multi-site organizations, integrated cloud platforms also allow you to manage visitor entry at locations where security or reception personnel are not physically present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Access Section */}
      <section className="py-20 bg-[#013a63] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Cloud-Based Access Control Systems
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Deltacom designs and installs cloud-based access control systems that give authorized administrators centralized management of doors, users, credentials, schedules and access permissions.
              </p>
              <p className="text-blue-100 mb-8">
                Cloud access control reduces dependence on traditional onsite server infrastructure while giving organizations greater flexibility in managing security across multiple facilities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6">Authorized administrators can securely:</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Add and remove users",
                  "Issue and revoke credentials",
                  "Manage doors and schedules",
                  "Review access activity",
                  "Investigate security events",
                  "Run reports",
                  "Manage multiple facilities",
                  "Access the system through web and mobile applications"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <PlusCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise & Multi-site */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
              Enterprise and Multi-Site Access Control
            </h2>
            <p className="text-lg text-slate-600">
              Managing multiple buildings should not require managing multiple disconnected security systems. Deltacom designs enterprise access control systems that provide centralized management across offices, warehouses, government facilities, healthcare environments, commercial properties and geographically distributed organizations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Locations", icon: Globe },
              { title: "Buildings", icon: Building2 },
              { title: "Departments", icon: Users },
              { title: "Doors", icon: Lock },
              { title: "Employees", icon: ShieldCheck },
              { title: "Visitors", icon: Smartphone }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl text-center border border-slate-200">
                <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <span className="font-bold text-[#013a63]">{item.title}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-slate-600 max-w-2xl mx-auto">
            Whether your organization operates one building or facilities across multiple states, Deltacom designs an access control architecture capable of expanding as your organization grows.
          </p>
        </div>
      </section>

      {/* Upgrades & Legacy */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Access Control System Upgrades and Legacy Migration
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Still operating an aging or end-of-life access control system? Deltacom helps organizations migrate from legacy access control systems to modern cloud-based, hybrid and enterprise access control platforms.
              </p>
              <p className="text-slate-300 mb-8">
                Replacing the access control platform does not mean replacing everything connected to it. Before recommending a complete replacement, Deltacom evaluates your existing:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Card readers", "Credentials", "Door hardware", "Locks",
                  "Cabling", "Power supplies", "Controllers", "Network infrastructure"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Wiegand to OSDP Access Control Upgrades</h3>
              <p className="text-slate-300 mb-6">
                Many older access control systems still rely on legacy Wiegand communications between card readers and access control panels. Deltacom helps organizations modernize reader communications using OSDP (Open Supervised Device Protocol) and OSDP Secure Channel.
              </p>
              <p className="text-slate-300 mb-6">
                OSDP delivers meaningful advantages over legacy Wiegand technology, including bidirectional communications, improved device supervision and encrypted reader-to-controller communications when Secure Channel is implemented.
              </p>
              <div className="p-6 bg-blue-600/20 rounded-2xl border border-blue-500/30">
                <p className="text-blue-300 font-medium italic">
                  Most organizations can transition to OSDP as part of a broader access control modernization strategy rather than replacing their entire physical security infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Intrusion Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-3xl p-8 lg:p-10 border border-blue-100">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#013a63] mb-6">
                Video Surveillance Integrated With Access Control
              </h2>
              <p className="text-slate-600 mb-6">
                Connecting access control with commercial video surveillance transforms security investigations. Instead of seeing only that a credential was presented at a particular door, an integrated system lets security personnel pull the associated video immediately and determine what actually occurred.
              </p>
              <h3 className="text-xl font-bold text-[#013a63] mb-4">Helping security personnel answer three questions quickly:</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["Who", "Where", "What"].map((q, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-blue-100">
                    <span className="block text-2xl font-black text-blue-600 mb-1">{q}?</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600">
                This cuts the time required to investigate denied credentials, unauthorized entry, forced doors, doors held open, after-hours activity and other security incidents.
              </p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#013a63] mb-6">
                Intrusion Detection and Access Control Integration
              </h2>
              <p className="text-slate-600 mb-6">
                Access control also integrates with commercial intrusion detection and alarm systems. Bringing intrusion events into the broader physical security environment gives personnel additional context when investigating alarms, after-hours activity or unauthorized access.
              </p>
              <p className="text-slate-600 font-bold">
                Rather than treating access control, intrusion detection, intercom and video surveillance as separate systems, Deltacom looks for every opportunity to make these technologies work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
                  Access Control Meets Enterprise IT
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Modern access control is no longer simply a door-hardware system. It is part of your organization&apos;s cybersecurity and <Link href="/services/networking-solutions/" className="text-blue-600 hover:underline">network infrastructure</Link> environment. That is an important difference in how Deltacom approaches physical security.
                </p>
                <p className="text-slate-600">
                  This matters most for government, enterprise and multi-site organizations where physical security technology must operate within established network and cybersecurity policies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#013a63] mb-6">Our teams work directly with IT departments on:</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Network architecture", "Cloud connectivity", "Cybersecurity requirements",
                    "Firewall coordination", "Network segmentation", "Identity management integration",
                    "User authentication", "Secure remote communications", "Software and firmware management",
                    "System integration", "Business continuity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Settings className="w-4 h-4 text-blue-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology-Neutral */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
              Technology-Neutral Access Control Solutions
            </h2>
            <p className="text-lg text-slate-600">
              Every organization has different security requirements. Deltacom does not believe every customer should be forced into the same access control platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-600 mb-6">
                We work with leading commercial security technologies and manufacturers, including <strong>AXIS Communications, YourSixOS, Brivo, HID, Schlage, DSX, PDK, Rhombus and Verkada</strong>, along with other commercial security platforms.
              </p>
              <p className="text-slate-600 mb-8">
                Our technology-neutral approach lets us evaluate your existing environment and recommend technology based on:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "Security", "Reliability", "Cybersecurity", "Scalability",
                  "Integration", "Existing infrastructure", "Lifecycle cost", "Long-term support"
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl text-center border border-slate-200 text-xs font-bold text-[#013a63]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-[#013a63] font-bold">
                  Our goal is straightforward: build the right security system for the customer rather than forcing the customer into a particular manufacturer&apos;s ecosystem.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200">
              <h3 className="text-2xl font-bold text-[#013a63] mb-6">Complete Door and Access Control Integration</h3>
              <p className="text-slate-600 mb-6">
                A properly functioning access control system involves much more than mounting a card reader beside a door. Deltacom coordinates the complete electronic door-security environment, including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Readers", "Controllers", "Credentials", "Electric strikes",
                  "Magnetic locks", "Door contacts", "Request-to-exit devices",
                  "Power supplies", "Automatic door operators", "Intercoms",
                  "Cameras", "Network infrastructure"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-600 italic">
                Our technicians test the complete door operation so the electronic security system, locking hardware and associated technologies work together as designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] text-center mb-16">
            Proven <Link href="/services/commercial-security/" className="text-blue-600 hover:underline">Commercial Security Solutions</Link> Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-[#013a63] mb-4">Multi-Site Healthcare and Educational Facility</h3>
              <p className="text-slate-600 mb-6">
                Deltacom designed and installed a 15-door cloud-based access control system for a healthcare and educational facility. The project included new access control infrastructure, cabling, electronic locking hardware, request-to-exit devices and integration with automatic door equipment.
              </p>
              <p className="text-slate-600 font-medium italic">
                Deltacom also supported the organization&apos;s second location outside the region, demonstrating our ability to deliver consistent access control solutions beyond the Washington DC metropolitan area.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-[#013a63] mb-4">Institutional Access Control Deployment</h3>
              <p className="text-slate-600 mb-6">
                Deltacom completed an institutional access control deployment involving approximately 50 wireless electronic locks and six wired access-controlled doors. The solution incorporated enterprise access control technology, electronic credentials, system programming and end-user training.
              </p>
              <p className="text-slate-600 font-medium italic">
                Projects of this type require careful coordination between door hardware, electronic security, credential management, network communications and facility operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Flow Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">From the Door to the Cloud</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              What differentiates Deltacom is our ability to bring the layers of physical security together.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 hidden lg:block -z-10"></div>
            {[
              "Door hardware", "Access control", "Video surveillance", 
              "Video intercom", "Intrusion detection", "Network infrastructure", "Cloud management"
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-4 bg-white p-4 lg:p-2 z-10">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-200">
                  {i + 1}
                </div>
                <span className="text-xs font-black uppercase tracking-tighter text-[#013a63] text-center whitespace-nowrap">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 lg:p-12 text-center text-white">
            <p className="text-xl lg:text-2xl font-light mb-8">
              These technologies are integrated into a <strong>single pane of glass</strong>, giving authorized personnel greater visibility and control over their security environment.
            </p>
            <p className="text-lg text-slate-300 mb-10 max-w-4xl mx-auto">
              Security personnel can see a visitor, communicate through the intercom, verify associated video, review access activity and grant or deny entry without moving between disconnected systems.
            </p>
            <div className="inline-block px-8 py-4 bg-blue-600 rounded-2xl font-bold text-lg">
              More than access control. Deltacom connects the door, video, intercom, network and cloud into one integrated security environment.
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
                Access Control Service, Maintenance and 24/7 Support
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Installing the system is only the beginning. Deltacom provides ongoing access control troubleshooting, repairs, preventive maintenance, system upgrades and technical support. We service existing access control systems as well as systems installed by Deltacom.
              </p>
              <p className="text-slate-600 mb-8 font-bold">
                For organizations requiring ongoing support, Deltacom provides 24/7/365 answering and dispatch, helping you maintain critical security operations when problems occur.
              </p>
              <a
                href="tel:+17033451012"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#013a63] text-white rounded-xl font-bold hover:bg-blue-900 transition-all"
              >
                Call 703-345-1012
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-[#013a63] mb-6">Serving Diverse Industries:</h3>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  "Commercial offices", "Government facilities", "Healthcare",
                  "Multifamily properties", "Warehouses and distribution centers",
                  "Education", "Retail", "Construction", "Religious organizations", "Multi-site enterprises"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Commercial Access Control in Virginia, Maryland, Washington, DC, and Nationwide
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-10">
            Deltacom Security is based in Fairfax, Virginia and provides commercial access control installation, integration, and service throughout Virginia, Maryland, Washington, DC, and nationwide where applicable.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-slate-700 font-medium mb-10">
            <Link href="/commercial-security-systems-fairfax-va/" className="text-blue-600 hover:underline">Fairfax</Link>
            <span>•</span>
            <Link href="/commercial-security-systems-tysons-va/" className="text-blue-600 hover:underline">Tysons</Link>
            <span>•</span>
            <Link href="/commercial-security-systems-arlington-va/" className="text-blue-600 hover:underline">Arlington</Link>
            <span>•</span>
            <Link href="/commercial-security-systems-alexandria-va/" className="text-blue-600 hover:underline">Alexandria</Link>
            <span>•</span>
            <span>Reston</span>
            <span>•</span>
            <span>Herndon</span>
            <span>•</span>
            <span>Ashburn</span>
            <span>•</span>
            <span>Loudoun County</span>
            <span>•</span>
            <span>Prince William County</span>
            <span>•</span>
            <Link href="/commercial-security-systems-woodbridge-va/" className="text-blue-600 hover:underline">Woodbridge</Link>
            <span>•</span>
            <Link href="/commercial-security-systems-washington-dc/" className="text-blue-600 hover:underline">Washington DC</Link>
            <span>•</span>
            <span>Bethesda</span>
            <span>•</span>
            <span>Rockville</span>
            <span>•</span>
            <span>Silver Spring</span>
          </div>
          <p className="text-slate-600 italic">
            For organizations with facilities outside the region, Deltacom also provides nationwide multi-site security deployment and support.
          </p>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#013a63] text-center mb-8">Why Organizations Choose Deltacom</h2>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {[
              "Virginia DCJS ID #11-15782",
              "Licensed and insured",
              "25+ years of combined industry experience",
              "Serving the DC metro area since 2017",
              "24/7/365 answering and dispatch",
              "Technology-neutral platforms",
              "Free security assessments"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-bold text-[#013a63] uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] text-center mb-16">
            Frequently Asked Questions About Commercial Access Control Systems
          </h2>
          <div className="space-y-12">
            {[
              {
                q: "What is a commercial access control system?",
                a: "A commercial access control system electronically manages who is authorized to enter specific buildings, doors or secured areas. Instead of relying solely on mechanical keys, organizations use cards, fobs, mobile credentials and other authentication technologies while maintaining centralized control and a complete record of access activity."
              },
              {
                q: "Can access control, video surveillance and intercom be integrated?",
                a: "Yes. Deltacom designs integrated physical security systems that connect access control, video surveillance and video intercom. Personnel can see and communicate with a visitor, review the associated video and grant or deny access through the access control system. Access events such as denied credentials, forced doors and doors held open are also associated with video."
              },
              {
                q: "Can Deltacom manage access control across multiple locations?",
                a: "Yes. Deltacom designs multi-site and enterprise access control systems that centrally manage doors, users, credentials, schedules and security events across multiple facilities. Cloud-based platforms give authorized administrators centralized management while local hardware continues performing its designated functions."
              },
              {
                q: "Can we keep our existing card readers when upgrading our access control system?",
                a: "Often, yes. Deltacom evaluates existing readers, credentials, wiring, locks and other infrastructure to determine which components are compatible with the proposed system and can reasonably be retained. This reduces unnecessary replacement costs while modernizing controllers, software, cloud management and other critical components."
              },
              {
                q: "What is the difference between Wiegand and OSDP?",
                a: "Wiegand is an older, widely deployed reader communication technology. OSDP provides bidirectional communication between readers and controllers, improved device supervision and support for OSDP Secure Channel encryption. Deltacom evaluates existing infrastructure and develops an appropriate Wiegand-to-OSDP migration strategy."
              },
              {
                q: "Do you install cloud-based access control?",
                a: "Yes. Deltacom designs and installs cloud-based, hybrid and on-premise commercial access control systems based on your security, operational and IT requirements."
              },
              {
                q: "What happens to cloud access control if the internet connection fails?",
                a: "This depends on the selected platform and controller architecture. Many enterprise systems use intelligent local controllers capable of continuing authorized access decisions during temporary connectivity interruptions. Deltacom considers local resiliency, network architecture and business continuity when designing cloud-based access control systems."
              },
              {
                q: "Does Deltacom provide access control maintenance and emergency service?",
                a: "Yes. Deltacom provides access control troubleshooting, repairs, preventive maintenance, upgrades and ongoing technical support, including 24/7/365 answering and dispatch for organizations requiring ongoing support."
              },
              {
                q: "Is Deltacom licensed in Virginia?",
                a: "Yes. Deltacom Security, LLC is licensed by the Virginia Department of Criminal Justice Services, DCJS ID #11-15782, and is fully insured."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-8">
                <h3 className="text-xl font-bold text-[#013a63] mb-4 flex gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <div className="pl-10 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessControlContent;
