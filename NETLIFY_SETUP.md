# Настройка Netlify для AI TG Bot Store

## Проблема
Сайт не загружается с главной страницы лендинга, а показывает тестовую страницу.

## Решение

### 1. Настройки в Netlify Dashboard

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

### 2. Environment Variables

В **Site settings** → **Environment variables** добавьте:

- `NODE_VERSION`: `20`
- `NEXT_TELEMETRY_DISABLED`: `1`
- `NPM_FLAGS`: `--legacy-peer-deps`

### 3. Build Settings

- **Deploy log visibility**: Public logs
- **Build status**: Active builds

### 4. Проверьте плагин

Убедитесь, что в **Site settings** → **Build & deploy** → **Build plugins** установлен:
- `@netlify/plugin-nextjs`

### 5. Пересоберите сайт

1. Перейдите в **Deploys**
2. Нажмите **Trigger deploy** → **Deploy site**
3. Дождитесь завершения сборки

## Что должно работать после настройки:

✅ Главная страница загружается с лендингом  
✅ Навигация работает  
✅ Форма отправки работает  
✅ API endpoints работают  
✅ Стили применяются корректно  

## Возможные проблемы:

### Если сайт все еще не загружается:
1. Проверьте логи сборки в **Deploys**
2. Убедитесь, что все зависимости установлены
3. Проверьте, что Node.js версия 20

### Если стили не применяются:
1. Проверьте, что Tailwind CSS настроен
2. Убедитесь, что `globals.css` импортируется

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
