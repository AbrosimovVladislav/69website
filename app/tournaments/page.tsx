import { tournaments } from "@/lib/data/tournaments";
import TournamentCard from "@/components/sections/TournamentCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TournamentsPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-card border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Decorative stars */}
          <div className="flex gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-star text-sm select-none">★</span>
            ))}
          </div>
          <SectionTitle>Турниры</SectionTitle>
          <p className="text-muted mt-4 max-w-xl">
            Международные хоккейные турниры для любительских команд. Выбери турнир и присоединяйся.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((t) => (
            <TournamentCard key={t.slug} tournament={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
