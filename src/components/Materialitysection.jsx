import { BookOpen, GitBranch, ListChecks, ClipboardSignature } from "lucide-react";

const TABS = [
  {
    n: "1",
    icon: BookOpen,
    title: "Quick user guide",
    body: "A read-only landing page that explains the process, defines what “material” means and shows the supported frameworks, then takes you on to the methodology.",
  },
  {
    n: "2",
    icon: GitBranch,
    title: "Materiality methodology",
    body: "Your frameworks are pulled through from setup and the system works out the basis. GRI, EU CSRD (ESRS) or King V means Double Materiality; ISSB-only or SASB means Financial Materiality.",
  },
  {
    n: "3",
    icon: ListChecks,
    title: "Materiality assessment",
    body: "Environmental, Social and Governance sub-tabs list suggested topics. For each one you tick Financial and, where enabled, Impact materiality, pick a Low, Medium or High risk level and write a justification.",
  },
  {
    n: "4",
    icon: ClipboardSignature,
    title: "Review and approval",
    body: "A consolidated table of every topic goes to a reviewer. Submitting locks the earlier tabs, and the reviewer approves or rejects with comments.",
  },
];

const RULES = [
  "Financial-only companies can voluntarily elect Double Materiality, with a written justification and reviewer approval. Until approved, Impact controls stay disabled.",
  "Justifications are mandatory for included and excluded topics, with a live character counter against a 100-character minimum that admins can configure.",
  "Add your own topics from a searchable list; custom topics carry a badge and can be removed before submission.",
  "Tabs unlock in order, and progress shows as counts such as “8 of 12 topics assessed”.",
  "If rejected, tabs 2 and 3 reopen with the reviewer's comments. Resubmitting increments the version, and reviewers can see what changed between versions.",
  "Each financial year is a separate assessment. Prior approved years are read-only, and nothing carries forward automatically.",
];

export default function Materialitysection() {
  return (
    <section id="materiality" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-700 mb-3">
          MATERIALITY ASSESSMENT
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-3xl sm:text-4xl tracking-tight">
          Decide what matters, and prove why.
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Materiality is a governed workflow, not a checklist. Every topic decision has a written reason, a
          risk level and a named approver, so the register that feeds your report is defensible.
        </p>
      </div>

      <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none">
        {TABS.map(({ n, icon: Icon, title, body }) => (
          <li key={n} className="bg-white border border-[#E9F1EC] rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
                <Icon className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-slate-400">Tab {n}</span>
            </div>
            <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-base">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
        <article className="bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
          <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">How the workflow is governed</h3>
          <ul className="mt-3 space-y-2.5 list-none">
            {RULES.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-[#002B28] rounded-2xl p-6 sm:p-7">
          <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-white text-lg">What the reviewer sees</h3>
          <div className="mt-4 rounded-xl border border-emerald-100/10 bg-[#0B3F37] overflow-hidden text-xs">
            <div className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.7fr] gap-2 px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[10px] text-emerald-300/70 border-b border-emerald-100/10">
              <span>Topic</span><span>Fin.</span><span>Impact</span><span>Risk</span>
            </div>
            {[
              ["Climate change (GHG)", "Yes", "Yes", "High"],
              ["Water", "Yes", "No", "Medium"],
              ["Local communities", "No", "No", "Low"],
            ].map((r) => (
              <div key={r[0]} className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.7fr] gap-2 px-3 py-2 text-emerald-50/80 border-b border-emerald-100/5 last:border-b-0">
                {r.map((c, i) => <span key={i}>{c}</span>)}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-emerald-50/70 leading-relaxed">
            Reviewers also see justification summaries and any Double Materiality override reasoning. They
            can approve all, or reject the assessment or individual rows with a mandatory comment. Approved
            Included topics pass to Reporting as active topics, and Excluded topics pass as context. Every
            event is written to an append-only audit trail, with in-platform notifications at each step.
          </p>
        </article>
      </div>
    </section>
  );
}