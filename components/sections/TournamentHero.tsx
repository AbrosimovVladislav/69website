import Image from "next/image";
import { Tournament } from "@/lib/types";
import Badge from "@/components/ui/Badge";

type TournamentHeroProps = {
  tournament: Tournament;
};

export default function TournamentHero({ tournament }: TournamentHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end">
      <Image
        src={tournament.heroImage}
        alt={tournament.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-page/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-transparent" />

      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-16 right-16 text-star text-[10rem] opacity-10 select-none">★</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <div className="mb-4">
          <Badge>{tournament.dates}</Badge>
        </div>
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          {tournament.location}
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white mb-4 max-w-4xl">
          {tournament.title}
        </h1>
        <p className="text-muted text-base max-w-xl">{tournament.locationDetail}</p>
      </div>
    </section>
  );
}
