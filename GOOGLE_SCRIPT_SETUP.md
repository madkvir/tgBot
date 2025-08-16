# Настройка Google Apps Script для AI TG Bot Store

## Проблема
Данные из формы не попадают в Google таблицу, счетчик лицензий не сбрасывается.

## Решение

### 1. Создание Google Apps Script

1. Перейдите на [script.google.com](https://script.google.com)
2. Создайте новый проект
3. Вставьте код из файла `google-apps-script.js`
4. Сохраните проект

### 2. Настройка Google Таблицы

1. Создайте новую Google таблицу
2. Создайте лист с названием `Form Responses`
3. Добавьте заголовки в первую строку:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Telegram`
   - D1: `RemainingLicenses`
   - E1: `IP Address`
   - F1: `User Agent`

### 3. Настройка доступа

1. В Google Apps Script нажмите **Deploy** → **New deployment**
2. Выберите тип **Web app**
3. Установите:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Нажмите **Deploy**
5. Скопируйте **Web app URL**

### 4. Обновление URL в коде

Замените URL в файле `app/api/submit/route.ts`:
```typescript
const scriptUrl = 'ВАШ_НОВЫЙ_URL_ОТ_GOOGLE_APPS_SCRIPT'
```

### 5. Проверка работы

1. Откройте консоль браузера (F12)
2. Отправьте тестовую заявку
3. Проверьте логи в консоли
4. Проверьте Google таблицу

## Возможные проблемы

### CORS ошибки
- Google Apps Script должен быть развернут как Web app
- Установите `Who has access: Anyone`

### Данные не записываются
- Проверьте ID таблицы в коде
- Убедитесь, что лист называется `Form Responses`
- Проверьте права доступа к таблице

### Счетчик не сбрасывается
- Используйте функцию `resetLicenseCounter()`
- Отправьте POST запрос с `resetCounter: true`

## Тестирование API

### Отправка заявки:
```bash
curl -X POST https://aitgbot.store/api/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","telegram":"testuser","remainingLicenses":200}'
```

### Получение лицензий:
```bash
curl https://aitgbot.store/api/submit
```

### Сброс счетчика:
```bash
curl -X POST https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec \
  -H "Content-Type: application/json" \
  -d '{"resetCounter":true}'
```

## Структура данных

### Входящие данные:
```json
{
  "name": "Имя пользователя",
  "telegram": "@username",
  "remainingLicenses": 200,
  "timestamp": "2025-01-XX...",
  "userAgent": "User-Agent браузера"
}
```

### Ответ:
```json
{
  "success": true,
  "message": "Данные успешно сохранены",
  "remainingLicenses": 199
}
```
