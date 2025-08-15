import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, telegram, remainingLicenses } = body

    // Валидация данных
    if (!name || !telegram) {
      return NextResponse.json(
        { success: false, message: 'Необходимо указать имя и Telegram username' },
        { status: 400 }
      )
    }

    // Здесь должна быть логика сохранения в Google Sheets
    // Пока что просто возвращаем успешный ответ
    console.log('Получена заявка:', { name, telegram, remainingLicenses })

    // Имитация обработки
    const newRemainingLicenses = Math.max(0, (remainingLicenses || 200) - 1)

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена',
      remainingLicenses: newRemainingLicenses,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Ошибка обработки заявки:', error)
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

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'API работает',
    remainingLicenses: 200,
    timestamp: new Date().toISOString()
  })
}
