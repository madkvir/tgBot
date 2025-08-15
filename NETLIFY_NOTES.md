## Заметки для деплоя на Netlify - AI TG Bot Store

### Что сделано
- Добавлен `netlify.toml` с плагином `@netlify/plugin-nextjs`, `NODE_VERSION=20`, `NEXT_TELEMETRY_DISABLED=1`.
- Создан `next-env.d.ts` для корректной типизации Next.js.
- Обновлен `package.json`: добавлены `engines` (Node >=20) и `packageManager: pnpm@9`.
- Переименован проект в "AI TG Bot Store" во всех файлах.

### Потенциальные проблемные места
- В `next.config.mjs` включены:
  - `eslint.ignoreDuringBuilds = true`
  - `typescript.ignoreBuildErrors = true`
  Это скрывает ошибки на билде. Для продакшна лучше убрать, но оставляем на время настройки деплоя.

- Опубликование директории:
  - Плагин `@netlify/plugin-nextjs` сам обрабатывает `.next`. В `netlify.toml` указано `publish = ".next"`. Если Netlify предложит Edge Functions/SSR, оставляем поведение по умолчанию плагина.

- Tailwind CSS 4:
  - Используется `@tailwindcss/postcss` и `postcss.config.mjs`. Netlify автоматически подхватывает PostCSS. Если будут ошибки, убедиться, что `@tailwindcss/postcss` присутствует в `devDependencies` (есть) и Node 20 активен (задано).

- Отсутствие API/SSR роутов:
  - Проект — статический лендинг с клиентскими компонентами. Плагин Next.js на Netlify поддерживает это без доп. настроек.

### Следующие шаги
1. Подключить репозиторий к Netlify, выбрать команду билда: `pnpm build`.
2. Убедиться, что в настройках сайта Node.js версия = 20 (или оставить через `netlify.toml`).
3. Если Netlify попросит переменные окружения — пока не нужны.
4. После успешного билда проверить страницы и стили.

### Дальнейшие улучшения (после первого деплоя)
- Убрать игнорирование ошибок в `next.config.mjs` и почистить предупреждения TS/ESLint.
- Добавить 404/metadata локализацию, темную тему, реальную отправку формы через server actions или API route.



