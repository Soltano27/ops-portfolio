import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Phone, Linkedin } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Professional Authority + Clarity
 * - Navy gradient hero with prominent headshot (trust + approachability)
 * - Proof strip with real metrics (immediate credibility)
 * - Case studies that answer interview questions
 * - Clean, scannable layout for 30-60 second decision
 * - Mobile-first responsive design
 * - Font: Inter (Modern, clean sans-serif)
 */

export default function Home() {
  const [activeCase, setActiveCase] = useState(0);

  const headshot =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663262877598/XPv4xvyBUP6uzKDY93rsbt/faruq-headshot_0f7cc503.png";
  const inecPhoto =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663262877598/XPv4xvyBUP6uzKDY93rsbt/sosanya faruq at gubernatorial election INEC Anambra_f05cd673.jpg";
  const stlwgPhoto =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663262877598/XPv4xvyBUP6uzKDY93rsbt/better view of people at the stlwg_8fe3684b.jpg";
  const imanPhoto =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663262877598/XPv4xvyBUP6uzKDY93rsbt/sosanya faruq at iman in disposable lab coat_33ab5e36.jpg";

  const unbreakableEmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=faruqsosanya@gmail.com&su=Regarding%20Operations%20Support";

  const caseStudies = [
    {
      id: "inec-case",
      title: "INEC — Voter Registration",
      problem:
        "High-volume voter data with critical error risk under field conditions",
      action:
        "Implemented Verify-Input-Audit workflow with disciplined data handling protocols",
      result:
        "1,200+ registrations processed with 0% error rate, ensuring 100% data integrity",
      image: inecPhoto,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: "stlwg-case",
      title: "SLTWG — Government Coordination",
      problem:
        "Multi-stakeholder government meeting requiring seamless documentation and coordination across 2 days",
      action:
        "Managed attendance, materials distribution, transcription, minutes creation, and Google Workspace setup for collaborative review",
      result:
        "Converted long conversations into structured documentation, clear resolutions, and actionable next steps for stakeholders",
      image: stlwgPhoto,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "iman-case",
      title: "IMAN — Medical Outreach",
      problem:
        "Large-scale community medical outreach (100+ screenings) requiring accurate documentation and participant flow management",
      action:
        "Owned documentation, test recording, and participant flow coordination under time-bound, accuracy-critical conditions",
      result:
        "Coordinated logistics and resolved on-site constraints to ensure uninterrupted operations and complete records",
      image: imanPhoto,
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "ida-case",
      title: "IDA — Digital Operations",
      problem:
        "Fragmented platforms, high-volume stakeholder data (2,800+), and need for scalable systems under tool and resource constraints",
      action:
        "Led platform migration to CMS-driven architecture, built data pipelines, and deployed automated workflows (HTML newsletter, recruitment, content ops)",
      result:
        "100% migration continuity, zero-error data integrity, and scalable systems supporting global campaigns (GIDAW, WHA79)",
      image: headshot,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const scrollToCase = (index: number) => {
    setActiveCase(index);
    document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Operations Specialist | Serving Nationwide Nigeria & Global
                Remote Teams
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-4 leading-relaxed">
                Based in Abeokuta, Ogun State | Serving Lagos, Abuja, and
                International (US/UK/EU) Timezones.
              </p>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                I build and manage documentation systems, coordinate complex
                projects, and keep operations running without errors.
              </p>

              {/* Proof Strip */}
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-slate-700">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-bold text-orange-400">
                      2,800+
                    </div>
                    <div className="text-sm text-slate-400">
                      Stakeholders Managed
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-bold text-orange-400">
                      1,600+
                    </div>
                    <div className="text-sm text-slate-400">
                      Records Digitized
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <button
                      onClick={() => scrollToCase(2)}
                      className="group text-left focus:outline-none"
                      aria-label="Zero percent error rate in administrative operations and data management. Click to view INEC case study."
                    >
                      <div className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
                        0
                      </div>
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors underline decoration-orange-400/30 underline-offset-4">
                        Critical Errors
                      </div>
                    </button>
                  </div>
                </div>
                {/* Logic Link */}
                <p className="text-sm italic text-slate-400 border-b border-slate-700 pb-6">
                  "Accuracy is my baseline. I achieve this through a proprietary
                  'Three-Step Verification' workflow for all high-volume data
                  and CMS operations."
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                  onClick={() =>
                    document
                      .getElementById("impact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Experience <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold"
                  variant="outline"
                  asChild
                >
                  <a
                    href={unbreakableEmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Me
                  </a>
                </Button>
              </div>

              {/* Direct Contact Safety Net */}
              <div className="text-xs text-slate-400 space-y-1 border-l-2 border-orange-500/30 pl-4">
                <p className="font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Direct Contact:
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={unbreakableEmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors"
                  >
                    faruqsosanya@gmail.com
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/2349155267860"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors"
                  >
                    +234 915 526 7860
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Headshot */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-2xl opacity-30"></div>
                <img
                  src={headshot}
                  alt="Faruq Sosanya - Operations & Programme Support Professional"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE I FIT SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <div className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Where I Fit
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              I support operations and programme coordination in NGO and
              administrative environments by managing workflows, documentation,
              stakeholder communication, and digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Administrative Operations",
                desc: "Workflow management, documentation systems, vendor coordination, scheduling",
              },
              {
                title: "Programme Coordination",
                desc: "Stakeholder communication, project tracking, compliance documentation",
              },
              {
                title: "Documentation & Reporting",
                desc: "Data integrity, record organization, audit trails, governance support",
              },
              {
                title: "CMS & Digital Operations",
                desc: "Wix, WordPress, Google Workspace, Zapier automation, digital infrastructure",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED IMPACT SECTION */}
      <section id="impact" className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <div className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Proven Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Selected Impact
            </h2>
          </div>

          {/* Case Study Selector */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {caseStudies.map((study, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCase(idx)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeCase === idx
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {study.title.split(" — ")[0]}
              </button>
            ))}
          </div>

          {/* Case Study Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={caseStudies[activeCase].image}
                alt={caseStudies[activeCase].title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${caseStudies[activeCase].color} opacity-20`}
              ></div>
            </div>

            {/* Content */}
            <div id={caseStudies[activeCase].id}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {caseStudies[activeCase].title}
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">
                    Challenge
                  </h4>
                  <p className="text-slate-700">
                    {caseStudies[activeCase].problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">
                    Approach
                  </h4>
                  <p className="text-slate-700">
                    {caseStudies[activeCase].action}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-2">
                    Result
                  </h4>
                  <p className="text-slate-900 font-semibold">
                    {caseStudies[activeCase].result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <div className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How I Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Detail-Oriented",
                desc: "Accuracy-first approach to all operations and data management",
              },
              {
                title: "Structured",
                desc: "Comfortable with defined workflows and systematic processes",
              },
              {
                title: "Collaborative",
                desc: "Strong in cross-team coordination and stakeholder communication",
              },
              {
                title: "Adaptive",
                desc: "Fast learner with digital tools and emerging technologies",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-12 bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Google Workspace",
                "Wix CMS",
                "WordPress",
                "Zapier",
                "Notion",
                "Asana",
                "Slack",
                "Canva",
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <div className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Social Proof
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Others Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I had the opportunity to work closely with SOSANYA FARUQ OLAWALE during his NYSC service, and he was an outstanding asset to our team. Faruq contributed significantly to our records digitization and documentation systems, helping to streamline how information is stored, accessed, and managed. His work improved our data organization, administrative processes, and overall operational efficiency. He brings a strong mix of attention to detail, digital literacy, administrative support skills, and process coordination. What stood out most was his ability to take initiative, quickly adapt to new systems, and deliver accurate results with minimal supervision. Faruq is also a great team player—reliable, professional, and easy to work with.",
                author: "Adebayo Waliyullah Kehinde",
                role: "Educational Manager/Administrator",
              },
              {
                quote:
                  "Faruq has been instrumental in streamlining our recruitment workflow at IDA. He identified and fixed issues in our Wix application forms, remapped timestamp automations, and ensured that all applications flowed correctly into our Job Tracker. His solutions-oriented approach, technical expertise, and clear guidance made it much easier for our team to manage and act on applications efficiently. Faruq's support turned months of workflow confusion into a reliable, structured process.",
                author: "Nadia Petean",
                role: "Human Resource - Global Mobility",
              },
              {
                quote:
                  "I had the opportunity to work with Faruq while he supported website operations for the Infectious Disease Alliance. In this role, he maintained and updated CMS content related to IDA committees, ensuring that information about team members and activities remained accurate, well-organized, and easily accessible. Whenever technical issues arose, Faruq responded promptly, investigated the problem, and restored missing data, helping maintain continuity for the organisation's public profile.",
                author: "Emad Zahran",
                role: "Project & Community Manager",
              },
              {
                quote:
                  "Faruq supported website operations and CMS publishing for the Infectious Disease Alliance while also assisting the HR team with recruitment operations. He contributed to troubleshooting the job application tracking workflow between Wix and Google Sheets, organized candidate data within the recruitment pipeline, and coordinated updates across teams. Faruq demonstrated reliability, strong attention to detail, and a proactive approach in resolving operational issues while maintaining accurate documentation.",
                author: "Smita Singh",
                role: "HR Professional - Global Mobility",
              },
              {
                quote:
                  "Faruq supported website operations and CMS publishing for the Infectious Disease Alliance, helping maintain structured and accurate content across pages and campaign initiatives. In working with our committees, he helped coordinate updates, documentation, and digital assets across teams, ensuring information was published clearly and consistently. Faruq brought strong attention to detail, reliability, and a thoughtful operational approach to the digital work supporting our initiatives.",
                author: "Vasundhra",
                role: "Global Health | Public Policy",
              },
            ].map((rec, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200"
              >
                <p className="text-slate-700 mb-4 italic text-sm">
                  "{rec.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">
                    {rec.author}
                  </p>
                  <p className="text-xs text-slate-600">{rec.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO & RESOURCES SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <div className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Work Samples
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Portfolio & Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mt-4">
              Access my complete portfolio of operational systems, workflows,
              and case studies. All supporting assets, templates, and live
              trackers are organized in my Operations & Programme Support work
              folder.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/drive/folders/1fCFtW8Y27s3nJwtp6z_rCVUpyhnEGcB8?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Full Portfolio <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* COMMENDATIONS & RECOGNITION SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <div className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Official Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Commendations & Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "NYSC Anambra State Secretariat",
                recognition:
                  "Commended for discipline, diligence, and commitment during 2024 Batch C service year",
                issuer: "Pauline Ojisua (Mrs.), State Coordinator",
                date: "December 12, 2025",
              },
              {
                title: "Anambra State Polytechnic — Office of the Registrar",
                recognition:
                  "Commended for diligence, reliability, and contribution to academic record management",
                issuer: "Dr. Udalla, Edith Nkechi",
                date: "December 24, 2025",
              },
              {
                title: "Anambra State Polytechnic — Office of the Rector",
                recognition:
                  "Commended for exemplary service, initiative, and outstanding contributions including systems improvement and campus support projects",
                issuer: "Dr. Njideka Rita Chiekezie, Ag. Rector",
                date: "November 13, 2025",
              },
            ].map((award, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {award.title}
                </h3>
                <p className="text-slate-700 mb-4 text-sm">
                  {award.recognition}
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {award.issuer}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">{award.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              View all commendations and formal recognition letters
            </p>
            <a
              href="/selectedcommendation_sosanyafauq.pdf"
              download="Faruq_Sosanya_Commendations.pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Download Full Commendations PDF{" "}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Discuss?
            </h2>
            <p className="text-lg text-slate-300">
              I'm available for full-time roles and high-impact projects. Let's
              talk about how I can support your operations.
            </p>
          </div>

          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href={unbreakableEmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-sm text-slate-400">Email Me</p>
                <p className="font-semibold truncate">faruqsosanya@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349155267860"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400">WhatsApp</p>
                <p className="font-semibold">+234 915 526 7860</p>
              </div>
            </a>

            {/* LinkedIn - FIXED BOXING */}
            <a
              href="https://linkedin.com/in/faruqsosanya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                <Linkedin className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left overflow-hidden">
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="font-semibold truncate">
                  linkedin.com/in/faruqsosanya
                </p>
              </div>
            </a>
          </div>

          {/* CLEAN FOOTER - REMOVED ICON ON THE FLOOR */}
          <div className="mt-12 pt-12 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-end">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Faruq Sosanya. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
