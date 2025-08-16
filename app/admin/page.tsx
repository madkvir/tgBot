'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export default function AdminPage() {
  const [loading, setLoading] = useState(false)
  const [remainingLicenses, setRemainingLicenses] = useState<number | null>(null)

  const resetCounter = async () => {
    if (!confirm('Вы уверены, что хотите сбросить счетчик лицензий? Это удалит все данные из таблицы.')) {
      return
    }

    setLoading(true)
    try {
      // Используем наш API endpoint для сброса счетчика
      const response = await fetch('/api/submit', {
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

      const data = await response.json()

      if (data.success) {
        toast.success('Счетчик лицензий сброшен!')
        setRemainingLicenses(data.remainingLicenses)
        
        // Очищаем localStorage кэш
        localStorage.removeItem('remainingLicenses')
        localStorage.removeItem('licensesTimestamp')
        
        // Принудительно обновляем страницу через 2 секунды
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        toast.error(`Ошибка при сбросе счетчика: ${data.message}`)
      }
    } catch (error) {
      console.error('Ошибка:', error)
      toast.error('Ошибка при сбросе счетчика. Проверьте консоль для деталей.')
    } finally {
      setLoading(false)
    }
  }

  const checkLicenses = async () => {
    setLoading(true)
    try {
      // Используем наш API endpoint для проверки лицензий
      const response = await fetch('/api/submit', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setRemainingLicenses(data.remainingLicenses)
        toast.success(`Осталось лицензий: ${data.remainingLicenses}`)
      } else {
        toast.error(`Ошибка при получении данных: ${data.message}`)
      }
    } catch (error) {
      console.error('Ошибка:', error)
      toast.error('Ошибка при получении данных. Проверьте консоль для деталей.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🔧 Панель администратора</h1>
          
          <div className="space-y-6">
            {/* Статус лицензий */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">📊 Статус лицензий</h3>
              {remainingLicenses !== null && (
                <p className="text-blue-800">
                  <strong>Осталось лицензий:</strong> {remainingLicenses}
                </p>
              )}
              <button
                onClick={checkLicenses}
                disabled={loading}
                className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Проверяем...' : 'Проверить лицензии'}
              </button>
            </div>

            {/* Сброс счетчика */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-900 mb-2">⚠️ Сброс счетчика</h3>
              <p className="text-red-800 mb-3">
                Это действие удалит все данные из таблицы и сбросит счетчик лицензий на 200.
              </p>
              <button
                onClick={resetCounter}
                disabled={loading}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? 'Сбрасываем...' : 'Сбросить счетчик'}
              </button>
            </div>

            {/* Информация */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ℹ️ Информация</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Сброс удалит все записи из таблицы</li>
                <li>• Счетчик вернется к 200 лицензиям</li>
                <li>• Действие нельзя отменить</li>
              </ul>
            </div>

            {/* Отладочная информация */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">🐛 Отладка</h3>
              <p className="text-yellow-800 text-sm">
                Если возникают ошибки, проверьте консоль браузера (F12) для детальной информации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
