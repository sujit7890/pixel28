"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-3xl opacity-20 rounded-full"></div>

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold"
      >
        Pixel28 🎮
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400 text-lg"
      >
        We Build Addictive Mobile Games
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
      >
        Explore Games
      </motion.button>
    </section>
  );
}