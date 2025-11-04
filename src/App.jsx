import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
    </div>
  );
}

export default App;
