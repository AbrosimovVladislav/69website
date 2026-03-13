import Link from "next/link";
import { Tournament } from "@/lib/types";
import Badge from "@/components/ui/Badge";

type TournamentCardProps = {
  tournament: Tournament;
};

export default function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <Link
      href={`/tournaments/${tournament.slug}`}
      className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-accent hover:scale-[1.02] transition-all duration-200"
    >
      {/* Card header — gradient placeholder до появления реальных фото */}
      <div className="relative w-full aspect-video bg-linear-to-br from-header via-card to-page flex items-end p-4">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center text-[8rem] text-accent">
          ★
        </div>
        <div className="absolute top-3 left-3">
          <Badge>{tournament.dates}</Badge>
        </div>
        <div className="relative">
          <p className="text-white/40 text-xs uppercase tracking-widest">{tournament.year} · {tournament.season}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-muted text-xs uppercase tracking-wide mb-1">{tournament.location}</p>
        <h3 className="text-white font-bold uppercase text-lg leading-tight mb-3">
          {tournament.shortTitle}
        </h3>
        <p className="text-muted text-sm line-clamp-2 mb-4">{tournament.description}</p>
        <span className="text-accent text-sm font-semibold group-hover:underline">
          Подробнее →
        </span>
      </div>
    </Link>
  );
}
