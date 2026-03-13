import Button from "@/components/ui/Button";

export default function CampsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Скоро</p>
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-none">
          Кэмпы
        </h1>
        <div className="w-16 h-1 bg-accent mx-auto mb-6" />
        <p className="text-muted text-lg mb-8">
          Хоккейные кэмпы для игроков всех уровней. Раздел в разработке — следите за обновлениями.
        </p>
        <Button href="/">На главную</Button>
      </div>
    </div>
  );
}
