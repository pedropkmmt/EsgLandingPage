import { Building2, Settings2, MapPinned, Lock, Network } from "lucide-react";

const STEPS = [
  {
    n: "Step 1",
    icon: Building2,
    title: "Company identity",
    items: [
      "Company name, registration number (must be unique) and company type",
      "Industry in three levels: sector, industry group and optional sub-industry",
      "Classification basis: GRI-aligned, IFRS-aligned, Internal or Other",
      "Nature of operations, business description and country (default South Africa)",
    ],
  },
  {
    n: "Step 2",
    icon: Settings2,
    title: "Reporting configuration",
    items: [
      "Reporting period start and end dates; the end can't fall before the start",
      "Annual reporting, with currency defaulting to ZAR",
      "Frameworks, multi-select: IFRS S1, IFRS S2, GRI, TCFD, TNFD, Integrated Reporting",
      "Reporting boundary approach and description, plus a value chain description",
    ],
  },
  {
    n: "Step 3",
    icon: MapPinned,
    title: "Sites and operations",
    items: [
      "Repeatable site records: name (unique per company), type, country and operational status",
      "Mark each site as included in or excluded from ESG reporting; exclusions need a reason",
      "Optional ESG risk indicator, description, province, site code and dates",
      "Sites are set to Inactive rather than deleted, so history is kept",
    ],
  },
];

const STATUSES = [
  { name: "Draft", body: "Saved but incomplete. You can keep editing, with limited access to downstream modules." },
  { name: "Completed", body: "Reporting configuration is complete, at least one framework is selected and the boundary is defined." },
  { name: "Active", body: "Confirmed for operational use: full access to data capture, materiality and reporting." },
];

const SITE_TYPES = [
  "Mine",
  "Processing Plant",
  "Corporate Office",
  "Regional Office",
  "Logistics Site",
  "Smelter / Refinery",
  "Exploration Site",
  "Other",
];

export default function Setupsection() {
  return (
    <section id="setup" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-700 mb-3">
          COMPANY SETUP
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-3xl sm:text-4xl tracking-tight">
          A guided setup that shapes everything downstream.
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Setup is a three-step onboarding flow. Required fields must be completed before you can move on,
          and you can save as a draft at any point. What you choose here decides which metrics load, which
          materiality basis applies and which sites feed your data.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {STEPS.map(({ n, icon: Icon, title, items }) => (
          <article key={n} className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
                <Icon className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-slate-400">{n}</span>
            </div>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">{title}</h3>
            <ul className="mt-3 space-y-2 list-none">
              {items.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-5 grid lg:grid-cols-[1.2fr_0.8fr] gap-5">
        <article className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
          <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
            Setup status you can trust
          </h3>
          <ol className="mt-4 grid sm:grid-cols-3 gap-3 list-none">
            {STATUSES.map((s, idx) => (
              <li key={s.name} className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-medium text-[#0B3F37] bg-[#E9F1EC] rounded px-1.5 py-0.5">
                  {idx + 1} · {s.name}
                </span>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">Site types</p>
          <ul className="mt-2 flex flex-wrap gap-1.5 list-none">
            {SITE_TYPES.map((t) => (
              <li
                key={t}
                className="font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
              >
                {t}
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-5">
          <article className="bg-[#002B28] rounded-2xl p-6 sm:p-7">
            <span className="inline-flex w-10 h-10 rounded-xl bg-emerald-400/10 items-center justify-center">
              <Lock className="w-5 h-5 text-emerald-300" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-white text-lg">
              Masterfile protection
            </h3>
            <p className="mt-2 text-sm text-emerald-50/70 leading-relaxed">
              Industry, classification basis, frameworks, boundary and value chain are masterfile fields.
              Only admins can edit them, a confirmation is required, and every change is logged.
            </p>
          </article>
          <article className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
            <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
              <Network className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
              Multi-company, with a full record
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Switch companies from the header and the whole workspace reloads in that context. Company and
              site records are never permanently deleted, and created and updated by/date are tracked.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}