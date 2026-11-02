import { Flame, Users, Landmark, Layers } from "lucide-react";

const PILLARS = [
  {
    code: "E",
    icon: Flame,
    name: "Environmental",
    count: "34 metrics",
    topics: "Climate & GHG · Energy · Water · Waste · Biodiversity, land & rehabilitation",
    examples: ["Scope 1 GHG emissions", "Water withdrawn", "Environmental incidents"],
  },
  {
    code: "S",
    icon: Users,
    name: "Social",
    count: "39 metrics",
    topics: "Workforce · Employment equity & transformation · Skills & training · Health & safety · Communities",
    examples: ["Fatalities", "B-BBEE level", "Spend on black-owned suppliers"],
  },
  {
    code: "G",
    icon: Landmark,
    name: "Governance",
    count: "33 metrics",
    topics: "Board composition & oversight · Ethics & anti-corruption · Compliance · Procurement governance",
    examples: ["Independent non-executive directors", "Whistleblowing reports received", "Procurement deviations approved"],
  },
  {
    code: "O",
    icon: Layers,
    name: "Other",
    count: "Custom fields",
    topics: "Anything outside E, S and G. Admins add their own fields as text, number, date or yes/no, and mark each as required or optional.",
    examples: ["Informational", "Reporting-relevant"],
  },
];

export default function Pillarssection() {
  return (
    <section id="metrics" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-700 mb-3">
          THE METRIC LIBRARY
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-3xl sm:text-4xl tracking-tight">
          A structured catalogue, ready on day one.
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Every metric ships with a unit, reporting level, mandatory status, the evidence it requires, a
          data owner and a guidance note. The catalogue loads to match your frameworks and industry, and
          admins can extend any section with custom fields.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {PILLARS.map(({ code, icon: Icon, name, count, topics, examples }) => (
          <article key={code} className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                <span className="font-['IBM_Plex_Mono',monospace] text-sm font-medium text-[#0B3F37] bg-[#E9F1EC] rounded-lg px-2.5 py-1">
                  {code}
                </span>
                <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
                  {name}
                </h3>
              </span>
              <span className="flex items-center gap-2 text-xs text-slate-400">
                <Icon className="w-4 h-4 text-emerald-600" />
                {count}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{topics}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5 list-none">
              {examples.map((e) => (
                <li
                  key={e}
                  className="font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-500 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
                >
                  {e}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}