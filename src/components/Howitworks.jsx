import { Building2, ClipboardCheck, Scale, FileText } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Building2,
    title: "Set up the company",
    body: "Register the entity, choose its industry and reporting frameworks, define the reporting boundary and financial year, and add sites, each marked as included in or excluded from ESG reporting.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Capture with evidence",
    body: "The metric catalogue loads to match your setup across the E, S, G and Other tabs. Enter values with units and guidance, attach the source document, save, and submit when ready.",
  },
  {
    n: "03",
    icon: Scale,
    title: "Assess materiality",
    body: "Your frameworks set the basis, Financial or Double Materiality. Assess each topic with a risk level and justification, then submit for reviewer approval.",
  },
  {
    n: "04",
    icon: FileText,
    title: "Draft and finalise the report",
    body: "Write the report in-platform and tag text to approved topics. Every High Risk topic must be disclosed before review. Finalise, then export to PDF or DOCX.",
  },
];

export default function Howitworks() {
  return (
    <section id="how-it-works" className="bg-[#002B28]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-300 mb-3">
            HOW IT WORKS
          </p>
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white text-3xl sm:text-4xl tracking-tight">
            From company setup to finalised report.
          </h2>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none">
          {STEPS.map(({ n, icon: Icon, title, body }) => (
            <li
              key={n}
              className="relative bg-[#0B3F37] border border-emerald-100/10 rounded-2xl p-6 sm:p-7"
            >
              <span className="font-['IBM_Plex_Mono',monospace] text-emerald-300/60 text-sm">{n}</span>
              <span className="mt-4 inline-flex w-10 h-10 rounded-xl bg-emerald-400/10 items-center justify-center">
                <Icon className="w-5 h-5 text-emerald-300" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-white text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm text-emerald-50/70 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}