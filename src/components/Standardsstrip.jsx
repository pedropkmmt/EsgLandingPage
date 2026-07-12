import { ShieldCheck } from "lucide-react";

const STANDARDS = [
  "ISSB IFRS S1",
  "ISSB IFRS S2",
  "GRI Standards",
  "King IV",
  "CDP",
  "GHG Protocol",
  "TNFD",
];

export default function Standardsstrip() {
  return (
    <section aria-label="Supported reporting standards" className="border-y border-[#E9F1EC] bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 sm:px-8 py-6">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Aligned to
        </span>
        {STANDARDS.map((s) => (
          <span key={s} className="flex items-center gap-1.5 text-sm font-medium text-[#0B3F37]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}