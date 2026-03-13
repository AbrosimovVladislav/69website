import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end">
      {/* Background */}
      <Image
        src="/turkey-hero.jpg"
        alt="69hockey — хоккейный турнир"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay — полностью скрывает текст из слайда */}
      <div className="absolute inset-0 bg-page/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-transparent" />

      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-20 right-20 text-star text-[8rem] opacity-10 select-none">★</span>
        <span className="absolute bottom-40 right-40 text-star text-[5rem] opacity-10 select-none">★</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
          69hockey
        </p>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white mb-6 max-w-3xl">
          Международный<br />
          <span className="text-accent">хоккей</span><br />
          нового уровня
        </h1>
        <p className="text-muted text-lg max-w-lg mb-8">
          Турниры и кэмпы для любительских команд со всего мира. Профессиональная организация, незабываемые эмоции.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/tournaments" size="lg">Смотреть турниры</Button>
          <Button href="/partnership" variant="outline" size="lg">Стать партнёром</Button>
        </div>
      </div>
    </section>
  );
}
