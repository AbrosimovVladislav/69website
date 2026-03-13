import { Tournament } from "@/lib/types";
import SectionTitle from "@/components/ui/SectionTitle";

type TournamentPackagesProps = {
  tournament: Tournament;
};

export default function TournamentPackages({ tournament }: TournamentPackagesProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle className="mb-12">Пакеты участия</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic */}
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="mb-6">
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Базовый</p>
              <h3 className="text-white text-2xl font-black uppercase">Базовый пакет</h3>
              <div className="w-12 h-0.5 bg-border mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tournament.basicPackage.map((item) => (
                <div key={item.title} className="flex gap-3 items-start bg-page rounded-lg border border-border p-3">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
                    <p className="text-muted text-xs mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium */}
          <div className="bg-card rounded-xl border border-accent/40 p-8 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-6">
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Premium Experience</p>
              <h3 className="text-white text-2xl font-black uppercase">Расширенный пакет</h3>
              <div className="w-12 h-0.5 bg-accent mt-3" />
            </div>
            <p className="text-muted text-sm mb-6">
              Всё из базового пакета + премиальные опции для комфортного пребывания
            </p>
            <div className="flex flex-col gap-3">
              {tournament.premiumPackage.map((item) => (
                <div key={item.title} className="flex gap-3 items-start bg-page rounded-lg border border-border p-4">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold leading-tight">{item.title}</p>
                    <p className="text-muted text-sm mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stars rating */}
            <div className="mt-6 flex items-center justify-between bg-page rounded-lg border border-border px-4 py-3">
              <span className="text-muted text-sm">Уровень сервиса</span>
              <span className="text-accent">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
