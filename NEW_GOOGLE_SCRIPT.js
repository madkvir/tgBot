// Новый упрощенный Google Apps Script
// Создайте новый проект в Google Apps Script и вставьте этот код

// ID вашей Google Таблицы
const SPREADSHEET_ID = '1uQSvP9A8Yx-MujxvA_S4E4ajZD9tI-sdsr0y6QseAy0';

function doGet(e) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Form Responses');
    
    const lastRow = sheet.getLastRow();
    const usedLicenses = lastRow > 1 ? lastRow - 1 : 0;
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
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, telegram, remainingLicenses } = data;
    
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Form Responses');
    
    const rowData = [
      new Date(),
      name,
      telegram,
      remainingLicenses,
      e.parameter.ip || 'Unknown',
      e.parameter.userAgent || 'Unknown'
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Данные успешно сохранены',
        remainingLicenses: remainingLicenses - 1
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}
