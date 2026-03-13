"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Турниры", href: "/tournaments" },
  { label: "Кэмпы", href: "/camps" },
  { label: "Партнёрство", href: "/partnership" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-header border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-black text-xl uppercase tracking-wider">
          69<span className="text-accent">hockey</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              {i > 0 && <span className="text-accent text-xs">★</span>}
              <Link
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-white border-b-2 border-accent pb-0.5"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/tournaments"
          className="bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase px-5 py-2 rounded-lg transition-colors"
        >
          Записаться
        </Link>
      </div>
    </header>
  );
}
