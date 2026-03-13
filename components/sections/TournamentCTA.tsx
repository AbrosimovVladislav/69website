import { Tournament } from "@/lib/types";
import Button from "@/components/ui/Button";

type TournamentCTAProps = {
  tournament: Tournament;
};

export default function TournamentCTA({ tournament }: TournamentCTAProps) {
  return (
    <section className="py-20 px-6 bg-card border-t border-border relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-8 left-8 text-star text-[6rem] opacity-10 select-none">★</span>
        <span className="absolute bottom-8 right-8 text-star text-[9rem] opacity-10 select-none">★</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="border border-border text-muted text-xs uppercase tracking-widest px-4 py-2 rounded-full">
            Join The Tournament
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white text-center mb-4 leading-none">
          Присоединяйтесь
        </h2>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-accent text-center mb-4 leading-none">
          к турниру
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12" />

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {tournament.highlights.map((h) => (
            <div key={h.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-page border border-border flex items-center justify-center text-2xl">
                {h.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{h.title}</p>
                <p className="text-muted text-xs">{h.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/partnership" size="lg">Подать заявку</Button>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm font-bold uppercase tracking-widest">
            {tournament.year} · International Hockey Tournament
          </p>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">
            {tournament.location}
          </p>
        </div>
      </div>
    </section>
  );
}
