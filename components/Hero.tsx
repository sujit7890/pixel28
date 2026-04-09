"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Zap, Globe, Star } from "lucide-react";

const stats = [
  { icon: Globe, value: "12M+", label: "Players Worldwide" },
  { icon: Zap, value: "6", label: "Published Games" },
  { icon: Star, value: "8.9", label: "Avg. Review Score" },
];

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 12,
  size: 1 + Math.random() * 3,
  color: i % 3 === 0 ? "#00F5FF" : i % 3 === 1 ? "#8B5CF6" : "#FF2D78",
}));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Canvas star field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      alpha: Math.random(),
      speed: 0.002 + Math.random() * 0.005,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha = Math.abs(Math.sin(Date.now() * s.speed));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${s.alpha * 0.6})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const titleWords = ["CRAFTING", "WORLDS", "WORTH", "PLAYING"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Starfield canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Grid bg */}
      <div className="absolute inset-0 z-0 grid-bg opacity-60" />

      {/* Radial gradient blobs */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-pink-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
            animate={{ y: [0, -window?.innerHeight || -800] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          Independent Game Studio · Est. 2016
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-6 mb-4">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none ${i === 1
                  ? "gradient-text-cyan-purple"
                  : i === 3
                    ? "text-neon-magenta"
                    : "text-white"
                  }`}
                style={{ fontFamily: "Orbitron, monospace" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mt-6 mb-10"
        >
          We are <span className="text-white font-semibold">Pixel28</span> — a team of 28 obsessed
          creators building the games we always wanted to play. Every pixel. Every frame. Every moment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="#games"
            className="group relative px-8 py-4 font-bold text-dark-900 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl text-base overflow-hidden hover:shadow-neon-purple transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Games
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="#studio"
            className="px-8 py-4 font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/30 rounded-xl text-base transition-all duration-300 backdrop-blur-sm"
          >
            Our Story
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-lg bg-dark-600 border border-white/5 flex items-center justify-center mb-1 group-hover:border-brand-cyan/30 group-hover:shadow-neon-cyan transition-all duration-300">
                <Icon className="w-5 h-5 text-brand-cyan" />
              </div>
              <span
                className="text-3xl lg:text-4xl font-black text-white"
                style={{ fontFamily: "Orbitron, monospace" }}
              >
                {value}
              </span>
              <span className="text-xs text-slate-500 tracking-widest uppercase font-medium">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}