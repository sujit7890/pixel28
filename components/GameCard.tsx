"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, Users, ChevronRight, Zap } from "lucide-react";
import type { Game } from "@/lib/games";

interface Props {
  game: Game;
  index: number;
}

const statusConfig = {
  Live: { color: "#00F5FF", bg: "rgba(0,245,255,0.1)", dot: "bg-brand-cyan" },
  Beta: { color: "#FFE600", bg: "rgba(255,230,0,0.1)", dot: "bg-yellow-400" },
  "Coming Soon": { color: "#8B5CF6", bg: "rgba(139,92,246,0.1)", dot: "bg-brand-purple" },
};

export default function GameCard({ game, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 200, damping: 25 });
  const glowX = useTransform(mouseX, [-150, 150], [0, 100]);
  const glowY = useTransform(mouseY, [-150, 150], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const status = statusConfig[game.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* Animated glow follow */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, ${game.glowColor} 0%, transparent 60%)`
            ),
          }}
        />

        {/* Border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{ boxShadow: `0 0 30px ${game.glowColor}, inset 0 0 30px ${game.glowColor}20` }}
        />
        <div
          className="absolute inset-0 rounded-2xl z-0"
          style={{ border: `1px solid ${game.accentColor}22` }}
        />

        {/* Card inner */}
        <div className="relative z-10 bg-gradient-to-b from-dark-700 to-dark-800 rounded-2xl overflow-hidden">
          {/* Thumbnail */}
          <div className="relative h-52 overflow-hidden">
            <Image
              src={game.image}
              alt={game.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-transparent to-transparent" />

            {/* Status badge */}
            <div
              className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider"
              style={{ color: status.color, background: status.bg }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
              {game.status}
            </div>

            {/* Genre */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium text-slate-300 bg-black/40 backdrop-blur-sm border border-white/10">
              {game.genre}
            </div>

            {/* Tags */}
            <div className="absolute bottom-3 left-3 flex gap-1.5">
              {game.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded bg-black/60 text-slate-400 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            <h3
              className="text-lg font-black text-white mb-1.5 tracking-wide group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
              style={{
                fontFamily: "Orbitron, monospace",
                backgroundImage: `linear-gradient(135deg, ${game.accentColor}, #8B5CF6)`,
                WebkitBackgroundClip: "text",
              }}
            >
              {game.title}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
              {game.description}
            </p>

            {/* Metrics */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5 text-sm">
                <Users className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400 font-medium">{game.players}</span>
                {typeof game.players === "string" && game.players.includes("M") && (
                  <span className="text-slate-600">players</span>
                )}
              </div>

              {game.rating > 0 && (
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-bold">{game.rating}</span>
                  <span className="text-slate-600">/10</span>
                </div>
              )}
            </div>

            {/* Platform pills */}
            <div className="flex gap-1.5 mb-4 flex-wrap">
              {game.platforms.map((p) => (
                <span
                  key={p}
                  className="px-2 py-0.5 text-xs rounded border border-white/5 text-slate-500"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link href={`/games/${game.id}`}>
              <motion.div
                whileHover={{ x: 2 }}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group/btn"
                style={{
                  background: `linear-gradient(135deg, ${game.accentColor}15, ${game.glowColor})`,
                  border: `1px solid ${game.accentColor}30`,
                  color: game.accentColor,
                }}
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {game.status === "Coming Soon" ? "Add to Wishlist" : "View Details"}
                </span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}