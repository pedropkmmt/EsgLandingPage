import { Building2, ClipboardCheck, Send } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Building2,
    title: "Set up the company",
    body: "Register the entity, pick its reporting standards and industry, and set the financial year. The metric schema loads to match.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Capture with evidence",
    body: "Preparers work through coded metrics topic by topic — typed inputs, inline validation, and the source document attached to every required value.",
  },
  {
    n: "03",
    icon: Send,
    title: "Submit and export",
    body: "Submission unlocks only when every required field and its evidence are in. Export the full evidenced dataset for assurance or disclosure.",
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
            From company setup to signed-off dataset.
          </h2>
        </div>

        <ol className="mt-12 grid md:grid-cols-3 gap-5 list-none">
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