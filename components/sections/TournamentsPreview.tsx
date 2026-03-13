import Link from "next/link";
import { tournaments } from "@/lib/data/tournaments";
import TournamentCard from "@/components/sections/TournamentCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TournamentsPreview() {
  const preview = tournaments.slice(0, 3);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <SectionTitle>Наши турниры</SectionTitle>
          <Link
            href="/tournaments"
            className="text-accent text-sm font-semibold hover:underline hidden md:block"
          >
            Все турниры →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((t) => (
            <TournamentCard key={t.slug} tournament={t} />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/tournaments" className="text-accent text-sm font-semibold hover:underline">
            Все турниры →
          </Link>
        </div>
      </div>
    </section>
  );
}
