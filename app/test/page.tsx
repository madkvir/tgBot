'use client'

import { useState } from 'react'

// Определяем интерфейс для результатов тестов
interface TestResult {
  success: boolean
  data?: any
  error?: string
}

interface TestResults {
  [key: string]: TestResult
}

export default function TestPage() {
  const [results, setResults] = useState<TestResults>({})
  const [loading, setLoading] = useState<string | null>(null)

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbw7QtPdqu30HEiTO8T93sJzw0VHjA0b2UbJZ45jfXK0TrLQ1RyLoPaJ0KS4M8F3Zg1xlw/exec'

  const logResult = (testName: string, success: boolean, data?: any, error?: string) => {
    setResults((prev: TestResults) => ({
      ...prev,
      [testName]: { success, data, error }
    }))
  }

  const testGetRequest = async () => {
    setLoading('get')
    try {
      console.log('🔄 Тестируем GET запрос...')
      
      const response = await fetch(scriptUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors'
      })

      console.log('📡 Ответ получен:', response.status, response.statusText)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log('📦 Данные:', data)
      
      if (data.success) {
        logResult('get', true, data)
      } else {
        logResult('get', false, null, data.message || 'Ошибка от сервера')
      }
    } catch (error: any) {
      console.error('❌ Ошибка GET запроса:', error)
      logResult('get', false, null, error.message)
    } finally {
      setLoading(null)
    }
  }

  const testPostRequest = async () => {
    setLoading('post')
    try {
      console.log('🔄 Тестируем POST запрос...')
      
      const testData = {
        name: 'Тест Пользователь',
        telegram: '@test_user',
        remainingLicenses: 200,
        ip: 'test-ip',
        userAgent: 'Test Browser'
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(testData)
      })

      console.log('📡 Ответ получен:', response.status, response.statusText)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log('📦 Данные:', data)
      
      if (data.success) {
        logResult('post', true, data)
      } else {
        logResult('post', false, null, data.message || 'Ошибка от сервера')
      }
    } catch (error: any) {
      console.error('❌ Ошибка POST запроса:', error)
      logResult('post', false, null, error.message)
    } finally {
      setLoading(null)
    }
  }

  const testCORS = async () => {
    setLoading('cors')
    try {
      console.log('🔄 Тестируем CORS...')
      
      const response = await fetch(scriptUrl, {
        method: 'OPTIONS',
        mode: 'cors'
      })

      console.log('📡 CORS ответ:', response.status, response.statusText)
      
      const corsHeaders = {
        'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
        'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
        'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
      }

      console.log('📋 CORS заголовки:', corsHeaders)
      
      if (response.status === 200 || response.status === 204) {
        logResult('cors', true, corsHeaders)
      } else {
        logResult('cors', false, null, `HTTP ${response.status}: ${response.statusText}`)
      }
    } catch (error: any) {
      console.error('❌ Ошибка CORS теста:', error)
      logResult('cors', false, null, error.message)
    } finally {
      setLoading(null)
    }
  }

  const totalTests = Object.keys(results).length
  const passedTests = Object.values(results).filter((r: any) => r.success).length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🧪 Тест Google Apps Script</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">📋 Информация</h3>
            <p className="text-blue-800"><strong>URL:</strong> {scriptUrl}</p>
            <p className="text-blue-800"><strong>Цель:</strong> Проверить доступность и работоспособность Google Apps Script</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">🔍 Тест 1: GET запрос</h3>
              <button 
                onClick={testGetRequest}
                disabled={loading === 'get'}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading === 'get' ? 'Тестируем...' : 'Запустить GET тест'}
              </button>
              {results.get && (
                <div className={`mt-3 p-3 rounded ${results.get.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h4 className={`font-semibold ${results.get.success ? 'text-green-800' : 'text-red-800'}`}>
                    {results.get.success ? '✅ Успех' : '❌ Ошибка'}
                  </h4>
                  {results.get.data && (
                    <pre className="text-sm mt-2 bg-gray-100 p-2 rounded overflow-x-auto">
                      {JSON.stringify(results.get.data, null, 2)}
                    </pre>
                  )}
                  {results.get.error && (
                    <p className="text-sm mt-2 text-red-700"><strong>Ошибка:</strong> {results.get.error}</p>
                  )}
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">📤 Тест 2: POST запрос</h3>
              <button 
                onClick={testPostRequest}
                disabled={loading === 'post'}
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {loading === 'post' ? 'Тестируем...' : 'Запустить POST тест'}
              </button>
              {results.post && (
                <div className={`mt-3 p-3 rounded ${results.post.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h4 className={`font-semibold ${results.post.success ? 'text-green-800' : 'text-red-800'}`}>
                    {results.post.success ? '✅ Успех' : '❌ Ошибка'}
                  </h4>
                  {results.post.data && (
                    <pre className="text-sm mt-2 bg-gray-100 p-2 rounded overflow-x-auto">
                      {JSON.stringify(results.post.data, null, 2)}
                    </pre>
                  )}
                  {results.post.error && (
                    <p className="text-sm mt-2 text-red-700"><strong>Ошибка:</strong> {results.post.error}</p>
                  )}
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">🌐 Тест 3: CORS проверка</h3>
              <button 
                onClick={testCORS}
                disabled={loading === 'cors'}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:opacity-50"
              >
                {loading === 'cors' ? 'Тестируем...' : 'Запустить CORS тест'}
              </button>
              {results.cors && (
                <div className={`mt-3 p-3 rounded ${results.cors.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h4 className={`font-semibold ${results.cors.success ? 'text-green-800' : 'text-red-800'}`}>
                    {results.cors.success ? '✅ Успех' : '❌ Ошибка'}
                  </h4>
                  {results.cors.data && (
                    <pre className="text-sm mt-2 bg-gray-100 p-2 rounded overflow-x-auto">
                      {JSON.stringify(results.cors.data, null, 2)}
                    </pre>
                  )}
                  {results.cors.error && (
                    <p className="text-sm mt-2 text-red-700"><strong>Ошибка:</strong> {results.cors.error}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {totalTests > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">📊 Результаты</h3>
              <p className="text-blue-800 mb-2"><strong>Итого:</strong> {passedTests}/{totalTests} тестов прошли успешно</p>
              <ul className="space-y-1">
                {Object.entries(results).map(([name, result]: [string, any]) => (
                  <li key={name} className="text-blue-800">
                    {name}: {result.success ? '✅' : '❌'} {result.error || 'OK'}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
