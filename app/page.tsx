import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Games 🎮
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </section>

    </main>
  );
}