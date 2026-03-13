import { notFound } from "next/navigation";
import { tournaments, getTournamentBySlug } from "@/lib/data/tournaments";
import TournamentHero from "@/components/sections/TournamentHero";
import TournamentFormat from "@/components/sections/TournamentFormat";
import TournamentPackages from "@/components/sections/TournamentPackages";
import TournamentCTA from "@/components/sections/TournamentCTA";

export function generateStaticParams() {
  return tournaments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tournament = getTournamentBySlug(slug);
  if (!tournament) return {};
  return {
    title: `${tournament.title} — 69hockey`,
    description: tournament.description,
  };
}

export default async function TournamentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tournament = getTournamentBySlug(slug);

  if (!tournament) notFound();

  return (
    <>
      <TournamentHero tournament={tournament} />
      <TournamentFormat tournament={tournament} />
      <TournamentPackages tournament={tournament} />
      <TournamentCTA tournament={tournament} />
    </>
  );
}
