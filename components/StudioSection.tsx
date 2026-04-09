"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Music, Award, Heart, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Player First",
    description:
      "Every decision — from mechanics to monetization — is filtered through one question: does this make the game better for the player?",
    color: "#FF2D78",
  },
  {
    icon: Palette,
    title: "Art With Purpose",
    description:
      "We treat visual design as storytelling. Every shader, palette, and animation serves the emotional truth of the game.",
    color: "#00F5FF",
  },
  {
    icon: Code2,
    title: "Technical Excellence",
    description:
      "We engineer for performance, moddability, and longevity. Our games are built to run great for a decade, not just launch day.",
    color: "#8B5CF6",
  },
  {
    icon: Music,
    title: "Sound as Language",
    description:
      "Our in-house audio team scores original soundtracks that have topped game music charts globally.",
    color: "#FFE600",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Dev",
    description:
      "We pioneered the use of generative AI in game asset pipelines — cutting production time without cutting corners.",
    color: "#00F5FF",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description:
      "14 industry awards including 3 BAFTA nominations, Best Indie Studio (GameDev Awards 2023), and two IGF Finalists.",
    color: "#FF2D78",
  },
];

export default function StudioSection() {
  return (
    <section id="studio" className="relative py-28 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-brand-magenta/20 bg-brand-magenta/5 text-brand-magenta text-xs font-semibold tracking-widest uppercase">
              Our Story
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              WE STARTED WITH
              <br />
              <span className="gradient-text-magenta-purple">28 PIXELS.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              In 2016, four friends — two engineers, a composer, and a concept artist — quit their
              AAA jobs and rented a single room. The studio name? A nod to the 28-pixel sprite that
              started it all.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Today we're a team of 60+ across three continents, but our ethos hasn't changed:{" "}
              <span className="text-white font-semibold">small team energy, massive game ambition.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col">
                <span
                  className="text-4xl font-black text-neon-cyan"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  2016
                </span>
                <span className="text-xs text-slate-500 tracking-widest uppercase">Founded</span>
              </div>
              <div className="w-px bg-white/10" />
              <div className="flex flex-col">
                <span
                  className="text-4xl font-black text-neon-purple"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  60+
                </span>
                <span className="text-xs text-slate-500 tracking-widest uppercase">Team Members</span>
              </div>
              <div className="w-px bg-white/10" />
              <div className="flex flex-col">
                <span
                  className="text-4xl font-black text-neon-magenta"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  14
                </span>
                <span className="text-xs text-slate-500 tracking-widest uppercase">Awards Won</span>
              </div>
            </div>
          </motion.div>

          {/* Right: animated card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="animated-border rounded-2xl p-px">
              <div className="bg-dark-700 rounded-2xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-slate-600 ml-2 font-mono">pixel28_manifesto.txt</span>
                </div>
                {[
                  "We make games, not engagement traps.",
                  "We ship when it's ready, not when it's deadline.",
                  "We pay our team well. Period.",
                  "We never add a mechanic we wouldn't love.",
                  "We build communities, not just audiences.",
                  "We are Pixel28.",
                ].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className={`font-mono text-sm mb-3 last:mb-0 ${
                      i === 5 ? "text-neon-cyan font-bold text-base" : "text-slate-400"
                    }`}
                  >
                    <span className="text-brand-purple mr-2">{`>`}</span> {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-xl border border-white/5 bg-dark-700/50 hover:border-opacity-30 transition-all duration-300"
              style={{
                ["--hover-color" as string]: pillar.color,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}
              >
                <pillar.icon
                  className="w-5 h-5 transition-all duration-300"
                  style={{ color: pillar.color }}
                />
              </div>
              <h3
                className="text-base font-bold text-white mb-2"
                style={{ fontFamily: "Orbitron, monospace" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}