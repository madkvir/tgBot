# Настройка Netlify для AI TG Bot Store

## Проблема
Сайт загружает тестовую страницу вместо основного лендинга.

## Причина
Netlify загружал статический файл `public/index.html` вместо Next.js приложения.

## Решение

### ✅ Что уже исправлено:
1. **Удален** `public/index.html` - статическая тестовая страница
2. **Настроен** `netlify.toml` для работы с Next.js
3. **Создан** API endpoint для формы

### 🔧 Настройки в Netlify Dashboard

Перейдите в **Site settings** → **Build & deploy** → **Build settings** и установите:

#### Build command:
```
npm run build
```

#### Publish directory:
```
.next
```

#### Base directory:
```
/
```

#### Functions directory:
```
netlify/functions
```

### 🌍 Environment Variables

В **Site settings** → **Environment variables** добавьте:

- `NODE_VERSION`: `20`
- `NEXT_TELEMETRY_DISABLED`: `1`
- `NPM_FLAGS`: `--legacy-peer-deps`

### 🔌 Проверьте плагин

Убедитесь, что в **Site settings** → **Build & deploy** → **Build plugins** установлен:
- `@netlify/plugin-nextjs`

### 🚀 Пересоберите сайт

1. Перейдите в **Deploys**
2. Нажмите **Trigger deploy** → **Deploy site**
3. Дождитесь завершения сборки

## Что должно работать после настройки:

✅ Главная страница загружается с лендингом (как на скриншоте)  
✅ Навигация работает  
✅ Форма отправки работает  
✅ API endpoints работают  
✅ Стили применяются корректно  

## Возможные проблемы:

### Если сайт все еще показывает тестовую страницу:
1. Очистите кэш браузера (Ctrl+F5)
2. Проверьте, что деплой завершился успешно
3. Убедитесь, что `public/index.html` удален

### Если API не работает:
1. Проверьте, что Netlify Functions настроены
2. Убедитесь, что CORS настроен правильно

## Команды для локального тестирования:

```bash
# Установка зависимостей
npm install

# Локальная разработка
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm run start
```
