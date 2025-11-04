import { Rocket, Github, Download } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

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

      {/* Hero Content with Spline */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-5"
            style={{ backgroundColor: "#e7f0f5", color: brand.primary }}
          >
            <Rocket className="h-3.5 w-3.5" />
            Built for vibe coders in VS Code
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
          >
            Goosy — your VS Code co-pilot for clean, secure code
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-slate-600 text-lg leading-relaxed"
          >
            Find vulnerabilities, refactor with confidence, and understand complexity — all without leaving your editor. Goosy brings actionable insights into your flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#get"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-xs text-slate-500"
          >
            Free to start • Works with JavaScript, TypeScript, Python, and more
          </motion.div>
        </div>

        {/* Spline scene container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative h-[360px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden border shadow-sm"
          style={{ borderColor: "#dbe5ea", background: "#0b1020" }}
        >
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          {/* soft radial highlight to blend into light theme */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(800px circle at 10% 20%, rgba(231,240,245,0.35) 0, transparent 60%), radial-gradient(600px circle at 90% 70%, rgba(98,135,154,0.25) 0, transparent 55%)",
            }}
          />
        </motion.div>
      </section>

      {/* Soft background behind the whole hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, #e7f0f5 0, transparent 60%), radial-gradient(800px circle at 80% 40%, #f5fbff 0, transparent 60%)",
        }}
      />
    </div>
  );
}
