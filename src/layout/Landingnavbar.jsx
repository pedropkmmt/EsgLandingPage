import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#metrics", label: "Metric library" },
];

export default function Landingnavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur border-b border-[#E9F1EC]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-[#002B28] flex items-center justify-center">
            <Leaf className="w-4 h-4 text-emerald-300" strokeWidth={2.5} />
          </span>
          <span className="font-['Space_Grotesk',sans-serif] font-700 font-bold text-[#002B28] tracking-tight">
            ESG
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-[#002B28] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#demo"
            className="text-sm font-semibold text-white bg-[#002B28] hover:bg-[#0B3F37] rounded-lg px-4 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Book a demo
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-slate-600 hover:text-[#002B28]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[#E9F1EC] bg-[#FAFAF8] px-5 py-4 flex flex-col gap-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-700 py-1.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="mt-1 text-sm font-semibold text-white bg-[#002B28] rounded-lg px-4 py-2.5 text-center"
          >
            Book a demo
          </a>
        </nav>
      )}
    </header>
  );
}