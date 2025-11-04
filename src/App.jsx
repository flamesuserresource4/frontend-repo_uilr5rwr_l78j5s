import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#e7f0f5] selection:text-slate-900">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
    </div>
  );
}

export default App;
