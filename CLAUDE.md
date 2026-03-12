# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## О проекте

Сайт о хоккейных продуктах и турнирах (69hockey).

## Команды

```bash
npm run dev      # Dev сервер (http://localhost:3000)
npm run build    # Продакшн сборка
npm run lint     # ESLint
```

## Стек

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (через `@tailwindcss/postcss`)

## Архитектура

App Router — все роуты в `app/`. Нет папки `src/`. Алиас `@/*` — корень проекта.

Планируемая структура:
- `/app` — страницы и роуты
- `/components` — переиспользуемые компоненты (PascalCase)
- `/lib` — утилиты и хелперы
- `/public` — статика

## Соглашения

- Компоненты — PascalCase, файлы тоже
- Стили только через Tailwind, без отдельных CSS файлов (кроме `globals.css`)
- Server Components по умолчанию, `"use client"` только если нужны хуки/события
- Не писать `any` в TypeScript
- Не использовать Pages Router
- Не создавать inline стили

## Турниры

- Список: `/tournaments`
- Отдельный турнир: `/tournaments/[slug]`
- У каждого турнира свой лендинг с уникальным дизайном
