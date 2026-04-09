import { notFound } from "next/navigation";
import { games, getGameById } from "@/lib/games";
import GameDetailClient from "@/app/games/GameDetailClient";
import type { Metadata } from "next";

interface Props {
  params: { id: string };
}

// ✅ Static generation
export async function generateStaticParams() {
  return games.map((g) => ({ id: g.id }));
}

// ✅ Production SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameById(params.id);

  if (!game) {
    return {
      title: "Game Not Found — Pixel28",
      description: "This game does not exist.",
      robots: { index: false },
    };
  }

  // Fallback for coverImage if it doesn't exist
  const imageUrl = (game as any).coverImage || game.image;

  return {
    title: `${game.title} — Pixel28`,
    description: game.description,
    keywords: ["game", game.title, "Pixel28"],
    openGraph: {
      title: `${game.title} — Pixel28`,
      description: game.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: game.title,
      description: game.description,
      images: [imageUrl],
    },
  };
}

// ✅ Page
export default function GamePage({ params }: Props) {
  const game = getGameById(params.id);

  if (!game) {
    console.error("Game not found:", params.id); // ✅ logging
    notFound();
  }

  return <GameDetailClient game={game} />;
}
