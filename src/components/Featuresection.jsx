import {
  Paperclip,
  GaugeCircle,
  ListPlus,
  CalendarRange,
  History,
  FileSpreadsheet,
  Scale,
  FileText,
} from "lucide-react";

const FEATURES = [
  {
    icon: Paperclip,
    title: "Evidence at the point of entry",
    body: "Each metric names the evidence it expects — fuel invoices, HR reports, board packs, B-BBEE certificates. Attach the document where you enter the number, so every value can be traced to its source.",
  },
  {
    icon: GaugeCircle,
    title: "Completeness you can see",
    body: "Every tab shows a live completeness indicator based on its mandatory fields. Unfilled required fields are highlighted, filled ones turn green, and nothing is auto-saved until you save.",
  },
  {
    icon: ListPlus,
    title: "Custom fields, under admin control",
    body: "Admins add company-specific fields to any section as text, number, date or yes/no, classed as informational or reporting-relevant. They never override the standard metrics.",
  },
  {
    icon: CalendarRange,
    title: "Year-versioned records",
    body: "Data is stored per company and reporting year. Prior years open read-only by default, stay exportable, and can only be unlocked by users with override permission.",
  },
  {
    icon: History,
    title: "An audit trail on every change",
    body: "Every create, update and delete is logged with the user, timestamp and previous value. Audit records can't be edited or deleted by end users, and history is viewable per metric.",
  },
  {
    icon: FileSpreadsheet,
    title: "Flexible, audit-ready exports",
    body: "Export a blank template, the full dataset or a single section as XLSX, CSV or PDF, with metric names, values, units, evidence status and data owner, filed as Company_Year_Scope_Date.",
  },
  {
    icon: Scale,
    title: "Governed materiality",
    body: "Your selected frameworks decide whether Financial or Double Materiality applies. Assess topics with a risk level and written justification, then send them to a reviewer for approval.",
  },
  {
    icon: FileText,
    title: "Tagged, reviewable reports",
    body: "Draft the report in a word-processor-style editor and tag text to your approved material topics. High Risk topics must be disclosed before review, and every version is kept.",
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
          The platform is designed to catch both before anything is submitted.
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