# Устранение неполадок с Google Apps Script

## 🚨 Текущие проблемы

### 1. Ошибка "Failed to fetch"
**Причина**: CORS ошибки или неправильная настройка Google Apps Script

**Решение**:
1. Обновите код Google Apps Script с новыми CORS заголовками
2. Переопубликуйте веб-приложение
3. Проверьте настройки доступа

### 2. Ошибка "setHeaders is not a function"
**Причина**: В Google Apps Script нет метода `.setHeaders()`, нужно использовать `.setHeader()` для каждого заголовка

**Решение**:
1. Замените `.setHeaders(headers)` на отдельные вызовы `.setHeader()`
2. Обновите код в Google Apps Script Editor
3. Переопубликуйте веб-приложение

### 3. Ошибка "setHeader is not a function"
**Причина**: В Google Apps Script метод `.setHeader()` не работает с `ContentService.createTextOutput()`

**Решение**:
1. Уберите все `.setHeader()` вызовы из кода
2. CORS заголовки устанавливаются автоматически при публикации веб-приложения
3. Обновите код в Google Apps Script Editor
4. Переопубликуйте веб-приложение

### 2. Временное решение для тестирования

Если Google Apps Script не работает, используйте временное решение:

```javascript
// Временно закомментируйте реальные запросы и используйте имитацию
const handleSubmit = useCallback(async (e: React.FormEvent) => {
  e.preventDefault()
  
  if (remainingLicenses <= 0) {
    toast.error("На жаль, безкоштовні ліцензії закінчились!")
    return
  }
  
  setIsSubmitting(true)
  setIsSubmitted(false)

  try {
    // Имитация запроса к Google Apps Script
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Имитация успешного ответа
    const mockResult = {
      success: true,
      remainingLicenses: remainingLicenses - 1
    }

    if (mockResult.success) {
      setIsSubmitted(true)
      setRemainingLicenses(mockResult.remainingLicenses)
      toast.success(`Дякуємо, ${name}! Ваша заявка успішно відправлена.`)
    } else {
      throw new Error('Ошибка отправки')
    }
  } catch (error) {
    console.error('Ошибка отправки формы:', error)
    toast.error("Виникла помилка при відправці заявки. Спробуйте ще раз.")
  } finally {
    setIsSubmitting(false)
  }
}, [name, remainingLicenses])
```

## 🔧 Пошаговая настройка Google Apps Script

### Шаг 1: Проверьте Google Apps Script
1. Откройте [script.google.com](https://script.google.com)
2. Найдите ваш проект "AI TG Bot Store Form Handler"
3. Убедитесь, что код обновлен с новыми CORS заголовками

### Шаг 2: Переопубликуйте веб-приложение
1. Нажмите "Deploy" → "Manage deployments"
2. Нажмите "Edit" на существующем деплойменте
3. Выберите "New version"
4. Нажмите "Deploy"
5. Скопируйте новый URL

### Шаг 3: Проверьте настройки доступа
1. В настройках деплоймента должно быть:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"

### Шаг 4: Обновите URL в коде
Замените URL в `app/page.tsx` на новый URL из шага 2.

## 🧪 Тестирование

### Тест 1: Проверка GET запроса
Откройте в браузере URL вашего Google Apps Script. Должен вернуться JSON:
```json
{
  "success": true,
  "remainingLicenses": 200,
  "usedLicenses": 0
}
```

### Тест 2: Проверка POST запроса
Используйте Postman или curl для тестирования:
```bash
curl -X POST "YOUR_SCRIPT_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","telegram":"@test","remainingLicenses":200}'
```

## 🔍 Диагностика ошибок

### Ошибка CORS
```
Access to fetch at 'https://script.google.com/...' from origin 'http://localhost:3000' has been blocked by CORS policy
```
**Решение**: Убедитесь, что в Google Apps Script добавлены CORS заголовки.

### Ошибка 403 Forbidden
```
HTTP error! status: 403
```
**Решение**: Проверьте настройки доступа к веб-приложению.

### Ошибка 500 Internal Server Error
```
HTTP error! status: 500
```
**Решение**: Проверьте логи Google Apps Script на наличие ошибок в коде.

## 📞 Альтернативные решения

### 1. Firebase Firestore
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firestore = getFirestore();
const formData = { name, telegram, timestamp: new Date() };
await addDoc(collection(firestore, 'applications'), formData);
```

### 2. Supabase
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_URL', 'YOUR_KEY');
const { data, error } = await supabase
  .from('applications')
  .insert([{ name, telegram }]);
```

### 3. Vercel KV (Redis)
```javascript
import { kv } from '@vercel/kv';

await kv.set(`application:${Date.now()}`, {
  name,
  telegram,
  timestamp: new Date()
});
```

## 🎯 Рекомендации

1. **Для разработки**: Используйте временное решение с имитацией
2. **Для тестирования**: Настройте Google Apps Script правильно
3. **Для продакшена**: Рассмотрите Firebase или Supabase
