import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-header border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="text-white font-black text-lg uppercase tracking-wider">
          69<span className="text-accent">hockey</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="/tournaments" className="hover:text-white transition-colors">Турниры</Link>
          <span className="text-accent text-xs">★</span>
          <Link href="/camps" className="hover:text-white transition-colors">Кэмпы</Link>
          <span className="text-accent text-xs">★</span>
          <Link href="/partnership" className="hover:text-white transition-colors">Партнёрство</Link>
        </nav>

        <p className="text-muted text-sm">© 2026 69hockey</p>
      </div>
    </footer>
  );
}
