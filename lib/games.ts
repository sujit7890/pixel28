export interface Game {
  id: string | number;
  title: string;
  description: string;
  image: string;
  status: "Live" | "Beta" | "Coming Soon";
  genre: string;
  tags: string[];
  players: string | number;
  rating: number;
  platforms: string[];
  glowColor: string;
  accentColor: string;
}

export const games: Game[] = [
  {
    id: "neon-drift",
    title: "Neon Drift",
    description: "A fast-paced cyberpunk racing game with futuristic vehicles and neon-lit tracks.",
    image: "/images/neon-drift.jpg",
    status: "Live",
    genre: "Racing",
    tags: ["Cyberpunk", "Multiplayer", "Fast"],
    players: "2M+",
    rating: 9.2,
    platforms: ["PC", "PS5", "Xbox"],
    glowColor: "#00F5FF",
    accentColor: "#00F5FF"
  },
  {
    id: "stellar-forge",
    title: "Stellar Forge",
    description: "Build and manage your own space station in this deeply strategic sci-fi simulation.",
    image: "/images/stellar-forge.jpg",
    status: "Beta",
    genre: "Simulation",
    tags: ["Strategy", "Sci-Fi", "Management"],
    players: "500K+",
    rating: 8.8,
    platforms: ["PC"],
    glowColor: "#FFE600",
    accentColor: "#FFE600"
  },
  {
    id: "void-walkers",
    title: "Void Walkers",
    description: "Explore the abyss in this atmospheric action RPG where every choice matters.",
    image: "/images/void-walkers.jpg",
    status: "Coming Soon",
    genre: "RPG",
    tags: ["Action", "Atmospheric", "Story-Rich"],
    players: 0,
    rating: 0,
    platforms: ["PC", "PS5"],
    glowColor: "#8B5CF6",
    accentColor: "#8B5CF6"
  }
];

export function getGameById(id: string | number) {
  return games.find((g) => g.id === id) || null;
}
