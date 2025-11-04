import { Shield, Wand2, Gauge, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Vulnerability Scan",
    desc: "Spot insecure patterns, risky dependencies, and common pitfalls early.",
  },
  {
    icon: Wand2,
    title: "Smart Refactors",
    desc: "Actionable refactor suggestions with diff-ready snippets.",
  },
  {
    icon: Gauge,
    title: "Complexity Insights",
    desc: "Understand cyclomatic complexity and hotspots across your codebase.",
  },
  {
    icon: CheckCircle2,
    title: "Inline Guidance",
    desc: "Get tips right next to your code — no context switching.",
  },
];

const brand = {
  primary: "#62879a",
};

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need to ship quality code</h2>
        <p className="mt-3 text-slate-600">
          Goosy blends static analysis with thoughtful UX to keep you in flow.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border bg-white/70 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition" style={{ borderColor: "#e5edf2" }}>
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: brand.primary }}
            >
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
