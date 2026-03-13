import { Tournament } from "@/lib/types";

export const tournaments: Tournament[] = [
  {
    slug: "turkey-2026-summer",
    title: "69 Games Turkey 2026 — Summer",
    shortTitle: "Turkey 2026",
    location: "Гебзе, Турция",
    locationDetail: "Рядом со Стамбулом · 25–30 км от аэропорта Sabiha Gökçen",
    dates: "Лето 2026",
    year: 2026,
    season: "Summer",
    description:
      "Международный хоккейный турнир для любительских команд со всего мира. Профессиональная организация, насыщенная программа и незабываемая атмосфера в сердце Турции.",
    heroImage: "/turkey-hero.jpg",
    format: [
      {
        icon: "🌐",
        title: "Международные команды",
        description: "Любительские коллективы со всего мира",
      },
      {
        icon: "⚖️",
        title: "Профессиональное судейство",
        description: "Квалифицированные арбитры",
      },
      {
        icon: "📊",
        title: "Турнирная таблица",
        description: "Статистика игроков и команд",
      },
      {
        icon: "📅",
        title: "Несколько игровых дней",
        description: "Насыщенная турнирная программа",
      },
      {
        icon: "🕐",
        title: "Онлайн-расписание",
        description: "Актуальное расписание матчей",
      },
      {
        icon: "🎥",
        title: "Трансляции и записи",
        description: "Прямые эфиры и видеоархив",
      },
      {
        icon: "🏆",
        title: "Финальная церемония и награждение",
        description: "Торжественное закрытие с вручением призов",
      },
    ],
    basicPackage: [
      { icon: "🏒", title: "Игры турнира", description: "Лёд и судейство" },
      { icon: "🌐", title: "Сайт турнира", description: "Таблица, расписание, статистика" },
      { icon: "🎥", title: "Трансляции", description: "Записи всех матчей" },
      { icon: "👕", title: "Турнирный мерч", description: "Эксклюзивная продукция" },
      { icon: "🎉", title: "Welcome-вечеринка", description: "Для всех команд" },
      { icon: "⭐", title: "Финальная вечеринка", description: "Торжественное закрытие" },
      { icon: "💧", title: "Вода для игроков", description: "На всех матчах" },
      { icon: "🥇", title: "Призы и медали", description: "Для победителей" },
      { icon: "📸", title: "Фотографии", description: "Общий доступ к альбомам" },
      { icon: "🍽️", title: "Рекомендации", description: "Рестораны и развлечения" },
      { icon: "%", title: "Скидки", description: "От партнёров турнира" },
    ],
    premiumPackage: [
      { icon: "🏨", title: "Проживание в отеле", description: "С завтраками включительно" },
      { icon: "🚌", title: "Трансфер", description: "Аэропорт ↔ Отель ↔ Аэропорт" },
      { icon: "📷", title: "Персональный контент-пак", description: "Фотосессия команды + видео / рилсы" },
      { icon: "🍺", title: "Beer Pack", description: "Набор пива для команды каждый день" },
    ],
    highlights: [
      { icon: "🌐", title: "Международный", subtitle: "уровень" },
      { icon: "📍", title: "Отличная локация", subtitle: "рядом со Стамбулом" },
      { icon: "🏒", title: "Несколько дней", subtitle: "хоккея и активностей" },
      { icon: "🎖️", title: "Профессиональная", subtitle: "организация" },
    ],
  },
];

export function getTournamentBySlug(slug: string): Tournament | undefined {
  return tournaments.find((t) => t.slug === slug);
}
