# My Shop App

Современное frontend-приложение интернет-магазина, реализованное на **Next.js 15 (App Router)** с использованием **React 19**, **TypeScript** и модульной архитектуры компонентов.

Проект демонстрирует:
- работу с Server Components и API routes
- продуманную UI-архитектуру
- анимации, состояния и формы
- подход к масштабируемому frontend-коду

---

## Демо-функциональность

- Главная страница
- Каталог товаров
- Карточка товара
- Избранное
- Страница «О нас»
- Поиск
- Оценка и рейтинг товаров
- Анимации и модальные окна
- Loading-состояния

---

## Технологический стек

### Core
- **Next.js 15 (App Router)**
- **React 19**
- **TypeScript (strict mode)**

### UI / UX
- **CSS Modules**
- **Framer Motion** — анимации и переходы
- **Headless UI** — доступные UI-примитивы
- **SVGR** — SVG как React-компоненты

### Forms & Logic
- **react-hook-form**
- Клиентская валидация
- Server-side data fetching

### Code Quality
- ESLint
- Prettier
- Strict TypeScript config

---

## Архитектура проекта

Проект построен по **component / domain oriented** подходу с чётким разделением ответственности.

```text
app/
├── (site)/
│   ├── about/
│   ├── cart/
│   ├── catalog/
│   ├── favorite/
│   └── product/
│
├── api/
│   └── *.ts                # API routes
│
├── layout.tsx              # Root layout
├── page.tsx                # Главная страница
├── globals.css
├── page.module.css
│
components/
├── features/
│   ├── FavoriteContext
│   ├── Filters
│   └── ReviewForm
│
├── Layout/
│   ├── Header
│   ├── Footer
│   ├── Menu
│   └── SectionNav
│
├── Product/
│   ├── ProductCard
│   ├── ProductGallery
│   ├── ProductInfo
│   ├── ProductPrice
│   ├── ProductTags
│   ├── ProductActions
│   └── RelatedProducts
│
├── Sections/
│   ├── HeroSlider
│   ├── TopCatalog
│   ├── AboutUs
│   └── SectionAbout
│
├── UI/
│   ├── Button
│   ├── Input
│   ├── Checkbox
│   ├── Rating
│   ├── Pagination
│   ├── QuantitySelector
│   ├── SearchInput
│   └── Notification
│
└── index.ts                # Public exports
