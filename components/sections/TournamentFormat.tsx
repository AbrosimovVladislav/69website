import { Tournament } from "@/lib/types";
import SectionTitle from "@/components/ui/SectionTitle";

type TournamentFormatProps = {
  tournament: Tournament;
};

export default function TournamentFormat({ tournament }: TournamentFormatProps) {
  return (
    <section className="py-20 px-6 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionTitle className="mb-12">Формат турнира</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tournament.format.map((item) => (
            <div
              key={item.title}
              className="bg-page rounded-xl border border-border p-5 flex gap-4 items-start"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm leading-tight mb-1">{item.title}</p>
                <p className="text-muted text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted text-sm mt-8 max-w-lg">{tournament.description}</p>
      </div>
    </section>
  );
}
