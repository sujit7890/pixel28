"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";

const openings = [
  { role: "Senior Game Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { role: "Lead VFX Artist", dept: "Art", location: "Berlin / Remote", type: "Full-time" },
  { role: "Narrative Designer", dept: "Design", location: "Remote", type: "Full-time" },
  { role: "Sound Designer", dept: "Audio", location: "Remote", type: "Contract" },
];

const deptColors: Record<string, string> = {
  Engineering: "#00F5FF",
  Art: "#FF2D78",
  Design: "#8B5CF6",
  Audio: "#FFE600",
};

export default function CareersSection() {
  return (
    <section id="careers" className="relative py-28 bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-magenta/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 text-brand-yellow text-xs font-semibold tracking-widest uppercase">
              <Briefcase className="w-3.5 h-3.5" />
              Join the Team
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              BUILD THE
              <br />
              <span className="gradient-text-cyan-purple">NEXT BIG</span>
              <br />
              THING WITH US.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We're always looking for extraordinary people who love games and craft their work with
              obsessive care. Remote-first, async-friendly, humans-first.
            </p>
            <div className="flex flex-col gap-3">
              {["Competitive salary + equity", "100% remote flexibility", "Game dev budget", "Annual studio retreat", "Zero crunch culture"].map((perk, i) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                  {perk}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {openings.map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between p-5 rounded-xl border border-white/5 bg-dark-700 hover:border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{
                        color: deptColors[job.dept],
                        background: `${deptColors[job.dept]}15`,
                      }}
                    >
                      {job.dept}
                    </span>
                    <span className="text-xs text-slate-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {job.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-white">{job.role}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> {job.location}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-brand-cyan group-hover:rotate-12 transition-all duration-300" />
              </motion.div>
            ))}

            <div className="text-center mt-4">
              <p className="text-sm text-slate-500">
                Don't see a fit?{" "}
                <a href="mailto:jobs@pixel28.studio" className="text-brand-cyan hover:underline">
                  Send us a speculative application.
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}