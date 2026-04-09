"use client";

import type { Game } from "@/lib/games";

interface Props {
  game: Game;
}

export default function GameDetailClient({ game }: Props) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        {game.title}
      </h1>
      
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 border border-white/10">
        <img 
          src={game.image || "/placeholder.png"} 
          alt={game.title}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="flex items-center gap-4 mb-8">
        <span className="px-3 py-1 rounded bg-brand-cyan/20 text-brand-cyan text-sm font-semibold">
          {game.status}
        </span>
        <span className="px-3 py-1 rounded bg-white/10 text-white text-sm">
          {game.genre}
        </span>
      </div>
      
      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
        {game.description}
      </p>
    </div>
  );
}
