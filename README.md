# AI TG Bot Store

Создавайте интернет-магазины в Telegram с помощью искусственного интеллекта.

## 🚀 Деплой на Netlify

### Автоматический деплой через Git:

1. **Подключите репозиторий к Netlify:**
   - Зайдите на [netlify.com](https://netlify.com)
   - Нажмите "New site from Git"
   - Выберите ваш репозиторий

2. **Настройки сборки:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 20

3. **Переменные окружения (если нужны):**
   - `NEXT_TELEMETRY_DISABLED=1`

### Ручной деплой:

1. **Соберите проект:**
   ```bash
   npm install
   npm run build
   ```

2. **Загрузите папку `.next` на Netlify**

## 📁 Структура проекта

```
├── app/
│   ├── page.tsx          # Главная страница
│   ├── admin/            # Админ панель
│   ├── test/             # Тестовая страница
│   └── layout.tsx        # Корневой layout
├── components/           # React компоненты
├── public/              # Статические файлы
├── netlify.toml         # Конфигурация Netlify
└── next.config.mjs      # Конфигурация Next.js
```

## 🔧 Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - Типизация
- **Tailwind CSS** - Стили
- **Google Apps Script** - Backend API
- **Netlify** - Хостинг

## 🌐 Ссылки

- **Главная страница:** `/`
- **Тест API:** `/test`

## 📝 Примечания

- Сайт использует прямые запросы к Google Apps Script
- Fallback режим при недоступности API
- Кэширование в localStorage
- Адаптивный дизайн