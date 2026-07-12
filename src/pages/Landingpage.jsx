import Landingnavbar from "../layout/Landingnavbar";
import Herosection from "../components/Herosection";
import Standardsstrip from "../components/Standardsstrip";
import Featuresection from "../components/Featuresection";
import Howitworks from "../components/Howitworks";
import Pillarssection from "../components/Pillarssection";
import Ctasection from "../components/Ctasection";
import Landingfooter from "../layout/Landingfooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-800 font-['IBM_Plex_Sans',sans-serif] antialiased">
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