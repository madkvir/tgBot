import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, telegram, remainingLicenses, resetCounter } = body

    // Проверяем, нужно ли сбросить счетчик
    if (resetCounter === true) {
      console.log('🔄 Запрос на сброс счетчика лицензий')
      return await resetLicenseCounter()
    }

    // Валидация данных для заявки
    if (!name || !telegram) {
      return NextResponse.json(
        { success: false, message: 'Необходимо указать имя и Telegram username' },
        { status: 400 }
      )
    }

    console.log('📝 Получена заявка:', { name, telegram, remainingLicenses })

    // Отправляем данные в Google Apps Script
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw7QtPdqu30HEiTO8T93sJzw0VHjA0b2UbJZ45jfXK0TrLQ1RyLoPaJ0KS4M8F3Zg1xlw/exec'
    
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          telegram,
          remainingLicenses: remainingLicenses || 200,
          timestamp: new Date().toISOString(),
          userAgent: request.headers.get('user-agent') || 'Unknown'
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('✅ Ответ от Google Apps Script:', result)

      if (result.success) {
        return NextResponse.json({
          success: true,
          message: 'Заявка успешно отправлена',
          remainingLicenses: result.remainingLicenses,
          timestamp: new Date().toISOString()
        })
      } else {
        throw new Error(result.message || 'Ошибка от Google Apps Script')
      }

    } catch (fetchError) {
      console.error('❌ Ошибка при отправке в Google Apps Script:', fetchError)
      
      // Возвращаем ошибку для отладки
      return NextResponse.json(
        { 
          success: false, 
          message: 'Ошибка при отправке в Google Sheets',
          error: fetchError instanceof Error ? fetchError.message : 'Неизвестная ошибка',
          details: 'Проверьте настройки Google Apps Script и доступность таблицы'
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('❌ Ошибка обработки заявки:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Ошибка при обработке заявки',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      },
      { status: 500 }
    )
  }
}

// Функция для сброса счетчика лицензий
async function resetLicenseCounter() {
  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw7QtPdqu30HEiTO8T93sJzw0VHjA0b2UbJZ45jfXK0TrLQ1RyLoPaJ0KS4M8F3Zg1xlw/exec'
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resetCounter: true
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log('✅ Счетчик лицензий сброшен:', result)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Счетчик лицензий успешно сброшен',
        remainingLicenses: result.remainingLicenses
      })
    } else {
      throw new Error(result.message || 'Ошибка при сбросе счетчика')
    }

  } catch (error) {
    console.error('❌ Ошибка при сбросе счетчика:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Ошибка при сбросе счетчика лицензий',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      },
      { status: 500 }
    )
  }
}

// Функция для получения количества оставшихся лицензий
export async function GET() {
  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw7QtPdqu30HEiTO8T93sJzw0VHjA0b2UbJZ45jfXK0TrLQ1RyLoPaJ0KS4M8F3Zg1xlw/exec'
    
    const response = await fetch(scriptUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log('📊 Получены данные о лицензиях:', result)

    if (result.success) {
      return NextResponse.json({
        success: true,
        remainingLicenses: result.remainingLicenses,
        usedLicenses: result.usedLicenses
      })
    } else {
      throw new Error(result.message || 'Ошибка получения данных')
    }

  } catch (error) {
    console.error('❌ Ошибка получения лицензий:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Ошибка при получении данных о лицензиях',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      },
      { status: 500 }
    )
  }
}
