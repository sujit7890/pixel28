"use client";

import { motion } from "framer-motion";

export default function GameCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-4 rounded-xl cursor-pointer"
    >
      <img
        src="/game.jpg"
        alt="game"
        className="rounded-lg"
      />

      <h2 className="mt-3 text-xl font-semibold">
        Game Title
      </h2>

      <p className="text-gray-400 text-sm">
        Hyper-casual puzzle game
      </p>
    </motion.div>
  );
}