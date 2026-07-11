import Landingnavbar from "./Landingnavbar";
import Herosection from "./Herosection";
import Standardsstrip from "./Standardsstrip";
import Featuresection from "./Featuresection";
import Howitworks from "./Howitworks";
import Pillarssection from "./Pillarssection";
import Ctasection from "./Ctasection";
import Landingfooter from "./Landingfooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-800 font-['IBM_Plex_Sans',sans-serif] antialiased">
      {/* Keyframes for the hero ledger's validation loop */}
      <style>{`
        @keyframes ledger-rail {
          0%, 20%  { background-color: #FCA5A5; }
          35%, 90% { background-color: #34D399; }
          100%     { background-color: #FCA5A5; }
        }
        @keyframes ledger-chip {
          0%, 28%  { opacity: 0; transform: translateY(3px); }
          38%, 88% { opacity: 1; transform: translateY(0); }
          100%     { opacity: 0; transform: translateY(3px); }
        }
        @keyframes ledger-check {
          0%, 30%  { opacity: 0; transform: scale(0.6); }
          40%, 88% { opacity: 1; transform: scale(1); }
          100%     { opacity: 0; transform: scale(0.6); }
        }
        @keyframes ring-tick {
          0%, 30%  { stroke-dashoffset: 52; }
          45%, 88% { stroke-dashoffset: 34; }
          100%     { stroke-dashoffset: 52; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ledger-anim { animation: none !important; }
        }
      `}</style>

      <Landingnavbar />
      <main>
        <Herosection />
        <Standardsstrip />
        <Featuresection />
        <Howitworks />
        <Pillarssection />
        <Ctasection />
      </main>
      <Landingfooter />
    </div>
  );
}