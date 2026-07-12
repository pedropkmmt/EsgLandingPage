import { ArrowRight } from "lucide-react";

export default function Ctasection() {
  return (
    <section id="demo" className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[#002B28] px-6 sm:px-12 py-14 sm:py-16 text-center">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9A441] to-transparent"
        />
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white text-3xl sm:text-4xl tracking-tight">
          Your next ESG report, evidenced end to end.
        </h2>
        <p className="mt-4 text-emerald-50/70 max-w-xl mx-auto leading-relaxed">
          See the platform on your own metric list — we'll walk through capture, completeness and
          export with your reporting team in 30 minutes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:hello@wyt.co.za?subject=ESG%20platform%20demo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#002B28] bg-white hover:bg-emerald-50 rounded-lg px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#platform"
            className="inline-flex items-center text-sm font-semibold text-emerald-50 border border-emerald-100/30 hover:border-emerald-100/60 rounded-lg px-6 py-3.5 transition-colors"
          >
            Explore the platform
          </a>
        </div>
      </div>
    </section>
  );
}