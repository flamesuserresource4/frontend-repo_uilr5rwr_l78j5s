import { Download, Github } from "lucide-react";
import { motion } from "framer-motion";

const brand = {
  primary: "#62879a",
};

export default function CTA() {
  return (
    <section id="get" className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border bg-white p-8 md:p-12 text-center shadow-sm"
        style={{ borderColor: "#e5edf2" }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to vibe with cleaner code?</h3>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Install Goosy in VS Code and start catching vulnerabilities, simplifying functions, and reducing complexity.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <motion.a
            whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(98,135,154,0.35)" }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white font-medium shadow-lg"
            style={{ backgroundColor: brand.primary }}
          >
            <Download className="h-5 w-5" />
            Install from Marketplace
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border font-medium text-slate-700 hover:bg-white"
            style={{ borderColor: brand.primary }}
          >
            <Github className="h-5 w-5" />
            Star on GitHub
          </motion.a>
        </div>
        <p className="mt-6 text-xs text-slate-500">No sign‑up required • Works on macOS, Windows, and Linux</p>
      </motion.div>

      <footer className="mt-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Goosy. Built for vibe coders.
      </footer>
    </section>
  );
}
