import { ArrowRight, CheckCircle2, Paperclip, ShieldCheck } from "lucide-react";

const STATIC_ROWS = [
  { code: "E005", name: "Scope 1 GHG Emissions", unit: "tCO2e", value: "12 480", evidence: "GHG-workbook.xlsx", done: true },
  { code: "S010", name: "Fatalities", unit: "count", value: "0", evidence: "Incident-register.pdf", done: true },
  { code: "G004", name: "Independent Non-exec Directors", unit: "%", value: "58", evidence: "Board-register.pdf", done: true },
];

function LedgerRow({ code, name, unit, value, evidence, done, animated }) {
  return (
    <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-3 pl-4 pr-4 py-2.5 border-b border-slate-100 last:border-b-0">
      <span
        className={`absolute left-0 top-0 bottom-0 w-[3px] ${
          animated ? "ledger-anim" : done ? "bg-emerald-400" : "bg-red-300"
        }`}
        style={animated ? { animation: "ledger-rail 6s ease-in-out infinite" } : undefined}
      />
      <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-medium text-slate-400 bg-slate-100 border border-slate-200 rounded px-1 py-px">
        {code}
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold text-slate-800 truncate">{name}</span>
        <span
          className={`inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 mt-0.5 ${
            animated ? "ledger-anim" : ""
          }`}
          style={animated ? { animation: "ledger-chip 6s ease-in-out infinite" } : undefined}
        >
          <Paperclip className="w-2.5 h-2.5" />
          {evidence}
        </span>
      </span>
      <span className="flex items-center gap-1.5">
        <span className="font-['IBM_Plex_Mono',monospace] text-[13px] text-slate-700 tabular-nums">
          {value}
          <span className="text-slate-400 text-[10px] ml-1">{unit}</span>
        </span>
        <CheckCircle2
          className={`w-3.5 h-3.5 text-emerald-500 ${animated ? "ledger-anim" : ""}`}
          style={animated ? { animation: "ledger-check 6s ease-in-out infinite" } : undefined}
        />
      </span>
    </div>
  );
}

function LedgerVignette() {
  const r = 8.5;
  const circumference = 2 * Math.PI * r; // ≈ 53.4

  return (
    <div className="relative">
      {/* backdrop card offset — a second sheet in the ledger */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#0B3F37]/10" aria-hidden="true" />
      <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl shadow-[#002B28]/10 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/60">
          <div>
            <p className="text-[13px] font-bold text-slate-900">Environmental Metrics</p>
            <p className="text-[10px] text-slate-400">FY 2026 · Kalahari Manganese (Pty) Ltd</p>
          </div>
          <div className="flex items-center gap-1.5" title="Section completeness">
            <svg width="22" height="22" viewBox="0 0 22 22" className="-rotate-90">
              <circle cx="11" cy="11" r={r} fill="none" strokeWidth="2.5" className="stroke-slate-100" />
              <circle
                cx="11"
                cy="11"
                r={r}
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset="52"
                className="stroke-emerald-500 ledger-anim"
                style={{ animation: "ring-tick 6s ease-in-out infinite" }}
              />
            </svg>
            <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-medium text-slate-500">
              23/27
            </span>
          </div>
        </div>

        <LedgerRow {...STATIC_ROWS[0]} />
        <LedgerRow
          code="E006"
          name="Scope 2 GHG Emissions"
          unit="tCO2e"
          value="8 940"
          evidence="Eskom-invoices-Q1-Q4.pdf"
          animated
        />
        <LedgerRow {...STATIC_ROWS[1]} />
        <LedgerRow {...STATIC_ROWS[2]} />

        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#E9F1EC]/50 border-t border-slate-100">
          <ShieldCheck className="w-3 h-3 text-[#0B3F37]" />
          <span className="text-[10px] font-medium text-[#0B3F37]">
            Every value carries its source document
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Herosection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#E9F1EC 1px, transparent 1px), linear-gradient(90deg, #E9F1EC 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-16 px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div>
          <p className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-[#0B3F37] bg-[#E9F1EC] border border-emerald-900/10 rounded-full inline-flex px-3 py-1 mb-6">
            E · S · G — one evidenced ledger
          </p>
          <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.06] tracking-tight">
            ESG reporting that stands up to audit.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Capture 100+ coded metrics across Environmental, Social and Governance — with the source
            document attached at the point of entry. Export audit-ready workbooks aligned to IFRS S1/S2,
            GRI and King&nbsp;IV.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#002B28] hover:bg-[#0B3F37] rounded-lg px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center text-sm font-semibold text-[#002B28] border border-[#002B28]/20 hover:border-[#002B28]/50 hover:bg-white rounded-lg px-6 py-3.5 transition-colors"
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-400">
            Built for South African reporters — B-BBEE, carbon tax and Employment Equity metrics included.
          </p>
        </div>

        <LedgerVignette />
      </div>
    </section>
  );
}