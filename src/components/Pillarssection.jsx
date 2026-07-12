import { Flame, Users, Landmark, Layers } from "lucide-react";

const PILLARS = [
  {
    code: "E",
    icon: Flame,
    name: "Environmental",
    count: "38 metrics",
    topics: "Climate & GHG · Energy · Water · Waste · Air emissions · Biodiversity & land",
    examples: ["E005 Scope 1 GHG", "E011 Water withdrawn", "E027 Environmental penalties"],
  },
  {
    code: "S",
    icon: Users,
    name: "Social",
    count: "45 metrics",
    topics: "Workforce · Employment equity · Skills · Health & safety · Communities",
    examples: ["S010 Fatalities", "S008 Training hours", "S021 Black-owned supplier spend"],
  },
  {
    code: "G",
    icon: Landmark,
    name: "Governance",
    count: "40 metrics",
    topics: "Board · Ethics & anti-corruption · Strategy, risk & assurance · Compliance",
    examples: ["G004 Board independence", "G010 Whistleblowing reports", "G018 Assurance level"],
  },
  {
    code: "M/F",
    icon: Layers,
    name: "Cross-cutting",
    count: "12 metrics",
    topics: "Sites & maintenance · Financial denominators — plus your own custom fields",
    examples: ["M003 Downtime ratio", "F001 Total revenue", "F003 Carbon tax liability"],
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
          A coded catalogue, ready on day one.
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Every metric ships with a code, unit, reporting level and the evidence it requires — and
          you can extend any section with custom fields.
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