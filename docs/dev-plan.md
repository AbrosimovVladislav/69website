# 69hockey — План разработки

## Общая картина

Сайт состоит из 5 страниц. Данные о турнирах хранятся статически в `/lib/data/tournaments.ts` — без базы данных на первом этапе. Добавить БД можно позже без переписывания компонентов.

Визуальный референс: leningradets.ru — тёмно-синий фон, красные акценты, жирная заглавная типографика.

---

## Структура файлов (итог)

```
/app
  layout.tsx                        ← корневой layout (Header + Footer)
  page.tsx                          ← главная страница
  /tournaments
    page.tsx                        ← список турниров
    /[slug]
      page.tsx                      ← лендинг турнира
  /camps
    page.tsx                        ← заглушка "скоро"
  /partnership
    page.tsx                        ← страница партнёрства

/components
  /layout
    Header.tsx
    Footer.tsx
  /ui
    Button.tsx                      ← варианты: primary (red) | outline (white)
    Badge.tsx                       ← даты, статусы
    SectionTitle.tsx                ← заголовок секции + красная черта
  /sections
    HeroSection.tsx                 ← hero главной
    TournamentsPreview.tsx          ← 3 карточки на главной
    TournamentCard.tsx              ← карточка турнира
    TournamentHero.tsx              ← hero страницы турнира
    TournamentFormat.tsx            ← формат / что включено
    TournamentPackages.tsx          ← базовый и расширенный пакеты
    TournamentCTA.tsx               ← блок "присоединяйтесь"

/lib
  /data
    tournaments.ts                  ← массив турниров (статические данные)
  types.ts                          ← Tournament, Package, etc.
```

---

## Типы данных (`/lib/types.ts`)

```ts
type Tournament = {
  slug: string
  title: string
  location: string
  dates: string
  year: number
  season: string
  description: string
  heroImage: string
  format: FormatItem[]
  basicPackage: PackageItem[]
  premiumPackage: PackageItem[]
  highlights: Highlight[]         // 4 иконки на CTA-блоке
}

type FormatItem = { icon: string; title: string; description: string }
type PackageItem = { icon: string; title: string; description: string }
type Highlight = { icon: string; title: string; subtitle: string }
```

---

## Фазы разработки

### Фаза 1 — Фундамент
**Цель:** работающий layout, шрифты, цвета

- [ ] Настроить кастомные цвета в Tailwind (через CSS-переменные или `tailwind.config`)
- [ ] Подключить шрифт Inter (Google Fonts через `next/font`)
- [ ] Создать `Header.tsx` — лого, навигация со звёздами, кнопка CTA
- [ ] Создать `Footer.tsx` — минималистичный, тёмный
- [ ] Обернуть в `app/layout.tsx`

### Фаза 2 — Главная страница (`/`)
**Цель:** первый экран сайта

- [ ] `HeroSection.tsx` — фото фон + градиент + заголовок + CTA кнопка
- [ ] `TournamentsPreview.tsx` — секция "Наши турниры" с 3 карточками
- [ ] `TournamentCard.tsx` — переиспользуемая карточка
- [ ] Подключить всё в `app/page.tsx`

### Фаза 3 — Список турниров (`/tournaments`)
**Цель:** страница каталога

- [ ] Создать данные первого турнира в `/lib/data/tournaments.ts` (Turkey 2026)
- [ ] Верстка страницы: заголовок + сетка карточек
- [ ] Переиспользовать `TournamentCard.tsx`

### Фаза 4 — Лендинг турнира (`/tournaments/[slug]`)
**Цель:** полноценная страница Turkey 2026

- [ ] `TournamentHero.tsx` — название, локация, год, фото
- [ ] `TournamentFormat.tsx` — 7 пунктов формата (иконки + текст)
- [ ] `TournamentPackages.tsx` — базовый и расширенный пакеты (сетка карточек)
- [ ] `TournamentCTA.tsx` — "Присоединяйтесь к турниру" + 4 кита + кнопка
- [ ] `generateStaticParams` для статической генерации

### Фаза 5 — Остальные страницы
- [ ] `/camps` — заглушка "Скоро" в стиле сайта
- [ ] `/partnership` — описание форматов партнёрства + контакт

---

## Контент первого турнира (Turkey 2026 — из презентации)

**slug:** `turkey-2026-summer`
**Название:** 69 Games Turkey 2026 — Summer
**Локация:** Гебзе, Турция (рядом со Стамбулом, 25–30 км от Sabiha Gökçen)
**Год:** 2026, Лето

**Формат (слайд 2):**
- Международные команды — любительские коллективы со всего мира
- Профессиональное судейство — квалифицированные арбитры
- Турнирная таблица — статистика игроков и команд
- Несколько игровых дней — насыщенная программа
- Онлайн-расписание — актуальное расписание матчей
- Трансляции и записи — прямые эфиры и видеоархив
- Финальная церемония и награждение — торжественное закрытие

**Базовый пакет (слайд 3):**
Игры турнира (лёд + судейство), сайт (таблица, расписание, статистика), трансляции, турнирный мерч, welcome-вечеринка, финальная вечеринка, вода на матчах, призы и медали, фотографии, рекомендации по ресторанам, скидки от партнёров

**Расширенный пакет — Premium Experience (слайд 4):**
Всё из базового + проживание в отеле с завтраком, трансфер аэропорт↔отель, персональный контент-пак (фотосессия + видео/рилсы), Beer Pack (пиво для команды каждый день)

**CTA-блок (слайд 5):**
Заголовок: "Присоединяйтесь к турниру"
4 кита: Международный уровень / Отличная локация рядом со Стамбулом / Несколько дней хоккея и активностей / Профессиональная организация

---

## UI-компоненты — спецификация

### Button
```tsx
// variant: "primary" | "outline"
// size: "md" | "lg"
```
- Primary: `bg-[#c8102e] hover:bg-[#a50d26] text-white font-bold uppercase px-6 py-3 rounded-lg`
- Outline: `border border-white text-white hover:bg-white hover:text-[#0f1b2d] font-bold uppercase px-6 py-3 rounded-lg`

### SectionTitle
```tsx
// Заголовок секции + красная линия под ним
<h2>ЗАГОЛОВОК</h2>
<div className="w-16 h-1 bg-[#c8102e] mt-2" />
```

### TournamentCard
- Фото 16:9
- Бейдж с датами (красный)
- Название (bold uppercase)
- Локация (muted)
- Ссылка "Подробнее →" (красная)
- Hover: `border-[#c8102e] scale-[1.02]`

---

## Порядок задач (практический)

1. Tailwind цвета + шрифт Inter
2. Header + Footer → проверить в браузере
3. Данные турнира в `/lib`
4. Главная страница
5. Список турниров
6. Лендинг Turkey 2026
7. Camps + Partnership (заглушки)
