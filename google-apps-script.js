// Google Apps Script для обработки формы регистрации
// Разместите этот код в Google Apps Script Editor

function doPost(e) {
  try {
    // Получаем данные из запроса
    const data = JSON.parse(e.postData.contents);
    const { name, telegram, remainingLicenses, resetCounter } = data;
    
    // Проверяем, нужно ли сбросить счетчик
    if (resetCounter === true) {
      return resetLicenseCounter();
    }
    
    // Получаем информацию о пользователе
    const timestamp = new Date();
    const ipAddress = e.parameter.ip || 'Unknown';
    const userAgent = e.parameter.userAgent || 'Unknown';
    
    // ID вашей Google Таблицы
    const spreadsheetId = '1uQSvP9A8Yx-MujxvA_S4E4ajZD9tI-sdsr0y6QseAy0';
    const sheetName = 'Form Responses';
    
    // Получаем лист
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(sheetName);
    
    // Подготавливаем данные для записи
    const rowData = [
      timestamp,
      name,
      telegram,
      remainingLicenses,
      ipAddress,
      userAgent
    ];
    
    // Записываем данные в таблицу
    sheet.appendRow(rowData);
    
    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Данные успешно сохранены',
        remainingLicenses: remainingLicenses - 1
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Возвращаем ошибку
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Ошибка при сохранении данных: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для сброса счетчика лицензий
function resetLicenseCounter() {
  try {
    const spreadsheetId = '1uQSvP9A8Yx-MujxvA_S4E4ajZD9tI-sdsr0y6QseAy0';
    const sheetName = 'Form Responses';
    
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(sheetName);
    
    // Очищаем все данные кроме заголовка
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).clear();
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Счетчик лицензий сброшен',
        remainingLicenses: 200
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Ошибка при сбросе счетчика: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для получения количества оставшихся лицензий
function doGet(e) {
  try {
    const spreadsheetId = '1uQSvP9A8Yx-MujxvA_S4E4ajZD9tI-sdsr0y6QseAy0';
    const sheetName = 'Form Responses';
    
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(sheetName);
    
    // Подсчитываем количество записей
    const lastRow = sheet.getLastRow();
    const usedLicenses = lastRow > 1 ? lastRow - 1 : 0; // Вычитаем заголовок
    const remainingLicenses = Math.max(0, 200 - usedLicenses);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        remainingLicenses: remainingLicenses,
        usedLicenses: usedLicenses
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Ошибка при получении данных: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для настройки CORS (важно для веб-приложений)
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}
