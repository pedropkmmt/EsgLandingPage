import { Database, FileCheck2, ListChecks, MessageSquareText } from "lucide-react";

const ANATOMY = [
  ["Pillar and topic", "Environmental, Social, Governance or Other, grouped by topic"],
  ["Definition and unit", "Plain-language meaning and the unit, such as tCO₂e, kWh, ML, % or ZAR"],
  ["Data level and frequency", "Company, site or department level; monthly, quarterly or annual"],
  ["Mandatory status", "Required, Optional or Conditional"],
  ["Data owner", "ESG, HR, Finance, Operations, HSE or Company Secretary"],
  ["Evidence", "Whether evidence is required, and what kind: invoice, register, board pack, policy"],
  ["Guidance note", "Short help text shown beneath the field"],
  ["Framework", "Which of your selected frameworks the metric applies to"],
];

const TIERS = [
  {
    name: "Mandatory for every company",
    body: "Total employees, energy consumption, water withdrawal, waste generated, board composition, ethics, anti-corruption and whistleblowing status, regulatory fines, a data owner per metric, and evidence for material metrics.",
  },
  {
    name: "Mandatory where applicable",
    body: "Scope 3 emissions, land disturbance, rehabilitation liability, LTIFR/TRIFR, contractor workforce, B-BBEE and Employment Equity metrics, Social and Ethics Committee, community complaints, procurement deviations and supplier due diligence.",
  },
  {
    name: "Optional but recommended",
    body: "NDVI score, employee engagement, cybersecurity incidents, supplier ethics breaches, women-owned supplier spend, youth employment and stakeholder engagement meetings.",
  },
];

const EVIDENCE = [
  ["Energy", "Utility bills, meter readings"],
  ["Fuel", "Fuel slips, supplier invoices, fleet logs"],
  ["Emissions", "Calculation workbook, emission factor reference"],
  ["Water", "Municipal bills, meter readings, water balance"],
  ["Waste", "Contractor reports, disposal certificates"],
  ["Biodiversity & land", "GIS maps, rehabilitation reports"],
  ["Workforce", "Payroll and HR reports"],
  ["Employment equity", "EE report, HR demographic report"],
  ["B-BBEE", "B-BBEE certificate, scorecard"],
  ["Training", "Attendance registers, SETA submissions"],
  ["Health & safety", "Incident registers, HSE reports"],
  ["Community", "CSI reports, beneficiary registers"],
  ["Governance", "Board packs, minutes, policies, charters"],
  ["Ethics", "Whistleblowing register, investigation reports"],
  ["Compliance", "Legal register, penalty notices"],
];

const RULES = [
  "Field types: text, number, percentage, date, dropdown, yes/no and file upload",
  "Percentages must be zero or more, with no upper limit",
  "Dropdowns accept listed values only; no free text",
  "Board composition uses a category dropdown, and sub-totals must equal the declared board size",
  "Mandatory fields are highlighted until filled, then turn green and count toward completeness",
  "Optional fields never affect completeness; inapplicable fields are shown greyed out",
];

export default function Evidencesection() {
  return (
    <section id="evidence" className="bg-[#E9F1EC]/40 border-y border-[#E9F1EC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-700 mb-3">
            DATA MANAGEMENT
          </p>
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-3xl sm:text-4xl tracking-tight">
            Every metric is a record, not a text box.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            The platform works as a structured metric catalogue. Each metric is predefined with everything a
            preparer and an auditor need to know, and the catalogue loads from your frameworks, industry,
            site type and reporting boundary. New metrics and frameworks are added through data, not code.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          <article className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
            <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
              <Database className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
              What each metric carries
            </h3>
            <dl className="mt-3 divide-y divide-slate-100">
              {ANATOMY.map(([k, v]) => (
                <div key={k} className="py-2.5 grid sm:grid-cols-[9rem_1fr] gap-x-4">
                  <dt className="text-sm font-semibold text-slate-800">{k}</dt>
                  <dd className="text-sm text-slate-600 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
            <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
              <ListChecks className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
              Mandatory logic that adapts to you
            </h3>
            <ul className="mt-3 space-y-4 list-none">
              {TIERS.map((t) => (
                <li key={t.name}>
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{t.body}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-5 bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
              <FileCheck2 className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
            </span>
            <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
              The evidence each metric expects
            </h3>
          </div>
          <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 list-none">
            {EVIDENCE.map(([type, docs]) => (
              <li key={type} className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2">
                <span className="block font-['IBM_Plex_Mono',monospace] text-[11px] font-medium text-[#0B3F37]">{type}</span>
                <span className="block text-xs text-slate-600 mt-0.5">{docs}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-5 grid lg:grid-cols-2 gap-5">
          <article className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
            <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
              Validation built into the fields
            </h3>
            <ul className="mt-3 space-y-2 list-none">
              {RULES.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </article>
          <article className="bg-[#002B28] rounded-2xl p-6 sm:p-7">
            <span className="inline-flex w-10 h-10 rounded-xl bg-emerald-400/10 items-center justify-center">
              <MessageSquareText className="w-5 h-5 text-emerald-300" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-white text-lg">
              Guidance where preparers need it
            </h3>
            <p className="mt-2 text-sm text-emerald-50/70 leading-relaxed">
              Short notes sit under the fields that cause the most mistakes. For Scope 2, preparers are told
              to enter emissions from purchased electricity and support consumption with bills or meter
              readings. For B-BBEE, they enter the verified level from the latest valid certificate. For
              procurement deviations, they count transactions approved outside the normal process.
            </p>
            <p className="mt-3 text-sm text-emerald-50/70 leading-relaxed">
              Data is saved by company, year, site and metric. Nothing is auto-saved when it is incomplete or
              invalid, partial saves are allowed, and saved data persists across sessions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}