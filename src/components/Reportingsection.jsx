import { PenLine, Tags, ShieldAlert, History, FileOutput, Unlock } from "lucide-react";

const CARDS = [
  {
    icon: PenLine,
    title: "A word-processor-style editor",
    body: "Headings, bold, italic, underline, lists, tables and images, with a live word count (also for a selection) and advisory spell check that never blocks you. Prior-year reports open read-only.",
  },
  {
    icon: Tags,
    title: "Inline topic tagging",
    body: "Select any phrase or passage and tag it to an approved material topic. A span can carry several topics. If tagged text is edited or deleted, the tag is flagged as orphaned for you to fix, and doesn't count.",
  },
  {
    icon: ShieldAlert,
    title: "Risk-proportional disclosure",
    body: "Default minimums are 1 tag for Low, 2 for Medium and 3 for High risk topics, and admins can adjust them as long as they rise with risk. Every High Risk topic needs at least one tag.",
  },
  {
    icon: Unlock,
    title: "Unlocks when the groundwork is done",
    body: "Reporting opens for a year once at least one metric has been submitted and every material topic has its justification recorded. Otherwise you're told what's outstanding, with a link to fix it.",
  },
  {
    icon: History,
    title: "Review cycle and version history",
    body: "Send to a reviewer, who comments on specific paragraphs in threads and can return the report to draft. Every send, return and finalisation saves an immutable version you can open read-only.",
  },
  {
    icon: FileOutput,
    title: "Finalise and export",
    body: "Finalised reports are locked. Export to PDF or DOCX with the version number and an auto-generated Topic Coverage Summary appended. Drafts can be exported too, labelled with their status.",
  },
];

const COVERAGE = [
  ["Climate change (GHG)", "High", "4", "3", "Met"],
  ["Water", "Medium", "1", "2", "Below minimum"],
  ["Waste", "High", "0", "3", "Undisclosed"],
];

const STATE_STYLE = {
  Met: "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Below minimum": "text-amber-700 bg-amber-50 border-amber-200",
  Undisclosed: "text-red-700 bg-red-50 border-red-200",
};

export default function Reportingsection() {
  return (
    <section id="reporting" className="bg-[#E9F1EC]/40 border-y border-[#E9F1EC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-emerald-700 mb-3">
            ESG REPORT BUILDER
          </p>
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-3xl sm:text-4xl tracking-tight">
            Write the report where the evidence lives.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Draft your disclosure inside the platform and tie each passage to the topics you approved in
            materiality. Coverage is counted from live tags, so you always see what is disclosed, what is
            thin and what is missing before a reviewer opens it.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map(({ icon: Icon, title, body }) => (
            <article key={title} className="bg-white border border-[#E9F1EC] rounded-2xl p-6">
              <span className="inline-flex w-10 h-10 rounded-xl bg-[#E9F1EC] items-center justify-center">
                <Icon className="w-5 h-5 text-[#0B3F37]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-base">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>

        <article className="mt-5 bg-white border border-[#E9F1EC] rounded-2xl p-6 sm:p-7">
          <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#002B28] text-lg">
            Topic coverage, live in the sidebar
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl">
            An undisclosed High Risk topic blocks both Send for Review and Finalise, and the message names
            the topics still missing. Below-minimum Medium and Low topics are advisory only. Example:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="text-left font-['IBM_Plex_Mono',monospace] text-[11px] text-slate-400 border-b border-slate-100">
                  <th className="py-2 pr-3 font-medium">Topic</th>
                  <th className="py-2 pr-3 font-medium">Risk</th>
                  <th className="py-2 pr-3 font-medium">Tags</th>
                  <th className="py-2 pr-3 font-medium">Required</th>
                  <th className="py-2 font-medium">State</th>
                </tr>
              </thead>
              <tbody>
                {COVERAGE.map(([t, r, c, m, s]) => (
                  <tr key={t} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-2.5 pr-3 font-semibold text-slate-800">{t}</td>
                    <td className="py-2.5 pr-3 text-slate-600">{r}</td>
                    <td className="py-2.5 pr-3 font-['IBM_Plex_Mono',monospace] text-slate-700">{c}</td>
                    <td className="py-2.5 pr-3 font-['IBM_Plex_Mono',monospace] text-slate-700">{m}</td>
                    <td className="py-2.5">
                      <span className={`text-[11px] font-medium border rounded-full px-2 py-0.5 ${STATE_STYLE[s]}`}>{s}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  );
}