import { motion } from "framer-motion";

const brand = {
  primary: "#62879a",
};

const codeSample = String.raw`// before\nfunction fetchUser(id){return api.get('/user/'+id).then(r=>r.data)}\n\n// after (Goosy refactor)\nasync function fetchUser(id) {\n  if (!id) throw new Error('Missing id');\n  const res = await api.get(\`/user/\${id}\`);\n  return res.data;\n}`;

export default function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-slate-900"
        >
          See issues and fixes, side‑by‑side
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="mt-3 text-slate-600"
        >
          Goosy annotates your code, proposes safe refactors, and explains the trade‑offs. You approve and apply in seconds.
        </motion.p>
        <ul className="mt-6 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: brand.primary }}></span> Inline diagnostics with quick‑fixes</li>
          <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: brand.primary }}></span> One‑click refactor previews</li>
          <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: brand.primary }}></span> Complexity badges and hotspots</li>
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e7f0f5] via-white to-transparent" />
        <div className="relative rounded-2xl overflow-hidden border bg-white shadow-sm" style={{ borderColor: "#dbe5ea" }}>
          <div className="flex items-center justify-between px-4 py-2 border-b text-xs text-slate-500" style={{ borderColor: "#eef3f6" }}>
            <span>Refactor Preview</span>
            <span className="rounded-md px-2 py-1" style={{ backgroundColor: "#e7f0f5", color: brand.primary }}>Goosy</span>
          </div>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "#eef3f6" }}>
            <pre className="p-4 text-sm bg-white text-slate-800 whitespace-pre-wrap">{codeSample.split("\n\n")[0]}</pre>
            <pre className="p-4 text-sm bg-white text-slate-800 whitespace-pre-wrap">{codeSample.split("\n\n")[1]}</pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
