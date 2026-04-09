"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameCard from "./GameCard";
import { games } from "@/lib/games";
import { Gamepad2, Filter } from "lucide-react";

const filters = ["All", "Live", "Beta", "Coming Soon"];

export default function GamesGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = games.filter(
    (g) => activeFilter === "All" || g.status === activeFilter
  );

  return (
    <section id="games" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-xs font-semibold tracking-widest uppercase"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            Our Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            THE{" "}
            <span className="gradient-text-cyan-purple">LINEUP</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            From gritty cyber-thrillers to galaxy-spanning strategy — every game we make
            is a love letter to players.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          <div className="flex items-center gap-1 mr-2 text-slate-500">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter:</span>
          </div>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === f
                  ? "text-dark-900"
                  : "text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {activeFilter === f && (
                <motion.div
                  layoutId="filter-bg"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple"
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filtered.map((game, i) => (
              <GameCard key={game.id} game={game} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <Gamepad2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No games found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}