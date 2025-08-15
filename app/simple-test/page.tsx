'use client'

import { useState } from 'react'

export default function SimpleTestPage() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbw7QtPdqu30HEiTO8T93sJzw0VHjA0b2UbJZ45jfXK0TrLQ1RyLoPaJ0KS4M8F3Zg1xlw/exec'

  const testScript = async () => {
    setLoading(true)
    setResult('Тестируем...')
    
    try {
      console.log('🧪 Простой тест Google Apps Script')
      console.log('URL:', scriptUrl)
      
      const response = await fetch(scriptUrl, {
        method: 'GET',
        mode: 'cors'
      })
      
      console.log('Статус:', response.status)
      console.log('Заголовки:', Object.fromEntries(response.headers.entries()))
      
      const text = await response.text()
      console.log('Ответ:', text)
      
      setResult(`✅ УСПЕХ!\nСтатус: ${response.status}\nОтвет: ${text}`)
      
    } catch (error: any) {
      console.error('❌ Ошибка:', error)
      setResult(`❌ ОШИБКА!\n${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">🧪 Простой тест Google Apps Script</h1>
          
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>URL:</strong> {scriptUrl}
            </p>
          </div>
          
          <button 
            onClick={testScript}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 mb-4"
          >
            {loading ? 'Тестируем...' : 'Запустить тест'}
          </button>
          
          {result && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Результат:</h3>
              <pre className="text-sm whitespace-pre-wrap">{result}</pre>
            </div>
          )}
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">💡 Подсказки:</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Отключите AdBlock для script.google.com</li>
              <li>• Попробуйте режим инкогнито</li>
              <li>• Проверьте настройки браузера</li>
              <li>• Попробуйте другой браузер</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
