import { Paperclip, GaugeCircle, CalendarRange, FileSpreadsheet } from "lucide-react";

const FEATURES = [
  {
    icon: Paperclip,
    title: "Evidence at the point of entry",
    body: "Each metric names the document that proves it — fuel invoices, HR registers, board minutes. Attach it where you type the number, and the row won't validate without it.",
  },
  {
    icon: GaugeCircle,
    title: "Completeness you can see",
    body: "Section rings and per-topic counters show exactly which required fields still block submission. A one-click jump takes preparers to the next outstanding item.",
  },
  {
    icon: CalendarRange,
    title: "Year-versioned records",
    body: "Data is stored per company, per reporting year. Prior years lock automatically as read-only — reviewable and exportable, but never silently edited.",
  },
  {
    icon: FileSpreadsheet,
    title: "Audit-ready exports",
    body: "One click produces XLSX, CSV or PDF with metric codes, values, evidence status and data owner — filed as Company_Year_Scope_Date, the way your auditors expect it.",
  },
];

export default function Featuresection() {
  return (
    <section id="platform" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-700 mb-3">
          THE PLATFORM
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-3xl sm:text-4xl tracking-tight">
          Built like a ledger, not a form.
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Sustainability data fails audits for two reasons: missing evidence and untraceable numbers.
          The platform is designed so neither can happen.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="group bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7 transition-shadow hover:shadow-lg hover:shadow-[#002B28]/5"
          >
            <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
              <Icon className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}