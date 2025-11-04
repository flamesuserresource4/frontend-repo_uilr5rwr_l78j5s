import { Rocket, Github, Download } from "lucide-react";

const brand = {
  primary: "#62879a",
};

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Nav */}
      <header className="mx-auto max-w-7xl px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="h-9 w-9 rounded-lg flex items-center justify-center text-white shadow-md"
            style={{ backgroundColor: brand.primary }}
          >
            G
          </div>
          <span className="font-semibold text-slate-800 text-lg">Goosy</span>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="#features"
            className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md"
          >
            Features
          </a>
          <a
            href="#showcase"
            className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md"
          >
            Showcase
          </a>
          <a
            href="#get"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-slate-700 hover:text-slate-900 hover:bg-white/60"
            style={{ borderColor: brand.primary }}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#get"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white shadow-md"
            style={{ backgroundColor: brand.primary }}
          >
            <Download className="h-4 w-4" />
            Get the Extension
          </a>
        </nav>
      </header>

      {/* Hero Content */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-5" style={{ backgroundColor: "#e7f0f5", color: brand.primary }}>
            <Rocket className="h-3.5 w-3.5" />
            Built for vibe coders in VS Code
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Goosy — your VS Code co-pilot for clean, secure code
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Find vulnerabilities, refactor with confidence, and understand complexity — all without leaving your editor. Goosy brings actionable insights into your flow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white font-medium shadow-lg"
              style={{ backgroundColor: brand.primary }}
            >
              <Download className="h-5 w-5" />
              Install in VS Code
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border font-medium text-slate-700 hover:bg-white"
              style={{ borderColor: brand.primary }}
            >
              Learn more
            </a>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            Free to start • Works with JavaScript, TypeScript, Python, and more
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e7f0f5] via-white to-transparent rounded-3xl" />
          <div className="relative rounded-2xl border shadow-sm bg-white overflow-hidden" style={{ borderColor: "#dbe5ea" }}>
            <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: "#eef3f6" }}>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#f43f5e" }}></span>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#f59e0b" }}></span>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#10b981" }}></span>
              <span className="ml-2 text-xs text-slate-500">Goosy Analysis</span>
            </div>
            <pre className="p-4 text-sm leading-relaxed overflow-auto bg-white text-slate-800">
{`function transfer(amount, to) {
  if (!to) throw new Error('no recipient');
  // FIXME: Missing input validation
  db.save({ to, amount });
}

// Goosy Suggestion:
// - Validate amount is positive number
// - Sanitize 'to' identifier
// - Extract DB call into service for testability
`}
            </pre>
          </div>
        </div>
      </section>

      {/* Soft background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, #e7f0f5 0, transparent 60%), radial-gradient(800px circle at 80% 40%, #f5fbff 0, transparent 60%)",
        }}
      />
    </div>
  );
}
