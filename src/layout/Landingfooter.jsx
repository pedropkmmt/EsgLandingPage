import { Leaf } from "lucide-react";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      { href: "#platform", label: "Data management" },
      { href: "#metrics", label: "Metric library" },
      { href: "#how-it-works", label: "How it works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "https://www.bespokesolutech.co.za/", label: "About Bespoke Solutech" },
      { href: "#demo", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "#", label: "Privacy (POPIA)" },
      { href: "#", label: "Terms of service" },
    ],
  },
];

export default function Landingfooter() {
  return (
    <footer className="border-t border-[#E9F1EC] bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-[1.2fr_repeat(3,0.8fr)]">
        <div>
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#002B28] flex items-center justify-center">
              <Leaf className="w-4 h-4 text-emerald-300" strokeWidth={2.5} />
            </span>
            <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#002B28] tracking-tight">
             ESG
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
            Evidence-first ESG data management for South African reporters.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
              {col.heading}
            </p>
            <ul className="space-y-2 list-none">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-600 hover:text-[#002B28] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-[#E9F1EC]">
        <p className="max-w-6xl mx-auto px-5 sm:px-8 py-5 text-xs text-slate-400">
          © {new Date().getFullYear()} Bespoke Solutech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}