import GamesGrid from "@/components/GamesGrid";

export const metadata = {
  title: "Games | Pixel28 Studio",
  description: "Explore the game portfolio of Pixel28 Studio.",
};

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-dark-900 pt-20">
      <GamesGrid />
    </main>
  );
}
