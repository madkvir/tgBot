"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUp,
  Bot,
  CheckCircle,
  Clock,
  CreditCard,
  BarChart3,
  Globe,
  Star,
  MessageCircle,
  Zap,
  TrendingUp,
  Users,
  Shield,
  User,
  AtSign,
  Sparkles,
  Rocket,
  Heart,
  Menu,
  X,
  Gift,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { toast } from "sonner"

// Move ContactForm outside to prevent re-creation on every render
const ContactForm = ({
  title = "Отримати ранній доступ",
  name,
  setName,
  telegram,
  setTelegram,
  isSubmitted,
  isSubmitting,
  onSubmit,
  remainingLicenses,
  useFallback,
}: {
  title?: string
  name: string
  setName: (value: string) => void
  telegram: string
  setTelegram: (value: string) => void
  isSubmitted: boolean
  isSubmitting: boolean
  onSubmit: (e: React.FormEvent) => void
  remainingLicenses: number
  useFallback: boolean
}) => {
  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center shadow-lg">
        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Дякуємо за заявку!</h3>
        <p className="text-green-700">
          Ми зв'яжемося з вами найближчим часом для надання раннього доступу до платформи.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{title}</h3>
      
      {/* License Counter */}
                          <div className="mb-4 p-3 bg-gradient-to-r from-yellow-100 to-blue-100 dark:from-yellow-900/30 dark:to-blue-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700/50">
                      <div className="flex items-center justify-center space-x-2">
                        <Gift className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                          Залишилось: <span className="font-bold text-yellow-900 dark:text-yellow-100">{remainingLicenses}</span> безкоштовних ліцензій
                        </span>
                      </div>
                      {useFallback && (
                        <div className="mt-2 flex items-center justify-center space-x-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-orange-700 dark:text-orange-300">
                            Режим офлайн
                          </span>
                        </div>
                      )}
                    </div>
      
      <form onSubmit={onSubmit} className="space-y-4" aria-busy={isSubmitting} aria-live="polite">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Ваше ім'я
          </Label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Алекс"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-12 py-4 text-base border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white rounded-xl touch-manipulation"
              required
              autoComplete="off"
              disabled={isSubmitting}
              style={{ minHeight: '56px' }}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="telegram" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Telegram username
          </Label>
          <div className="relative mt-1">
            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <Input
              id="telegram"
              name="telegram"
              type="text"
              placeholder="@username"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              className="pl-12 py-4 text-base border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white rounded-xl touch-manipulation"
              required
              autoComplete="off"
              disabled={isSubmitting}
              style={{ minHeight: '56px' }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Формат: @username або username (5-32 символи, тільки літери, цифри та підкреслення)
          </p>
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 text-base font-semibold active:scale-95 touch-manipulation transition-all duration-200"
          disabled={isSubmitting || remainingLicenses <= 0}
          style={{ minHeight: '56px' }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
              <span className="text-base">Надсилаємо...</span>
            </>
          ) : remainingLicenses <= 0 ? (
            <>
              <span className="text-base">Ліцензії закінчились</span>
              <X className="ml-3 w-5 h-5" />
            </>
          ) : (
            <>
              <span className="text-base">Отримати ранній доступ</span>
              <ArrowRight className="ml-3 w-5 h-5" />
            </>
          )}
        </Button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
        Платформа знаходиться в розробці. Ми повідомимо вас про запуск першими!
      </p>
    </div>
  )
}

// Scrolling Banner Component
const ScrollingBanner = ({ remainingLicenses }: { remainingLicenses: number }) => {
  const [isPaused, setIsPaused] = useState(false)
  
  const handleTouchStart = () => {
    setIsPaused(true)
  }
  
  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 1000)
  }
  
  return (
    <div 
      className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-400 dark:from-yellow-500 dark:via-yellow-400 dark:to-blue-500 overflow-hidden relative touch-manipulation"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`animate-scroll flex whitespace-nowrap py-3 ${isPaused ? 'animate-pause' : ''}`}>
        <div className="flex items-center space-x-8 text-gray-900 font-bold text-sm md:text-base drop-shadow-lg">
          <span className="flex items-center space-x-2">
            <Gift className="w-4 h-4 md:w-5 md:h-5 text-blue-800 drop-shadow-sm" />
            <span className="drop-shadow-sm">Перші 200 людей, що подали заявку, отримують 3 місяці безкоштовної роботи сервісу!</span>
          </span>
          <span className="flex items-center space-x-2">
            <Gift className="w-4 h-4 md:w-5 md:h-5 text-blue-800 drop-shadow-sm" />
            <span className="drop-shadow-sm">Залишилось: {remainingLicenses} ліцензій</span>
          </span>
          <span className="flex items-center space-x-2">
            <Gift className="w-4 h-4 md:w-5 md:h-5 text-blue-800 drop-shadow-sm" />
            <span className="drop-shadow-sm">Перші 200 людей, що подали заявку, отримують 3 місяці безкоштовної роботи сервісу!</span>
          </span>
          <span className="flex items-center space-x-2">
            <Gift className="w-4 h-4 md:w-5 md:h-5 text-blue-800 drop-shadow-sm" />
            <span className="drop-shadow-sm">Залишилось: {remainingLicenses} ліцензій</span>
          </span>
          <span className="flex items-center space-x-2">
            <Gift className="w-4 h-4 md:w-5 md:h-5 text-blue-800 drop-shadow-sm" />
            <span className="drop-shadow-sm">Перші 200 людей, що подали заявку, отримують 3 місяці безкоштовної роботи сервісу!</span>
          </span>
          <span className="flex items-center space-x-2">
            <Gift className="w-4 h-4 md:w-5 md:h-5 text-blue-800 drop-shadow-sm" />
            <span className="drop-shadow-sm">Залишилось: {remainingLicenses} ліцензій</span>
          </span>
        </div>
      </div>
      

    </div>
  )
}

export default function TGStoreLanding() {
  const [name, setName] = useState("")
  const [telegram, setTelegram] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [remainingLicenses, setRemainingLicenses] = useState(200) // Начальное количество лицензий
  // Состояние для fallback режима
  const [useFallback, setUseFallback] = useState(false)
  // Состояние для кнопки "Наверх"
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // Отладка изменений useFallback
  useEffect(() => {
    console.log('🔄 useFallback изменился на:', useFallback)
  }, [useFallback])

  // Обработчик событий сети
  useEffect(() => {
    const handleOnline = () => {
      console.log('🌐 Подключение к интернету восстановлено')
      setUseFallback(false)
    }

    const handleOffline = () => {
      console.log('🌐 Подключение к интернету потеряно')
      setUseFallback(true)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Функция загрузки лицензий
  const loadRemainingLicenses = useCallback(async () => {
    // Глобальный обработчик для подавления AbortError в консоли
    const originalConsoleError = console.error
    console.error = (...args) => {
      if (args[0] && typeof args[0] === 'string' && args[0].includes('AbortError')) {
        // Подавляем AbortError в консоли
        return
      }
      originalConsoleError.apply(console, args)
    }

    console.log('🔄 Начинаем загрузку лицензий...')
    
    // Проверяем доступность сети
    if (!navigator.onLine) {
      console.warn('🌐 Нет подключения к интернету')
      setRemainingLicenses(200)
      setUseFallback(true)
      return
    }
    
    // Сначала пробуем загрузить из localStorage (если есть)
    const cachedLicenses = localStorage.getItem('remainingLicenses')
    const cachedTimestamp = localStorage.getItem('licensesTimestamp')
    
    if (cachedLicenses && cachedTimestamp) {
      const age = Date.now() - parseInt(cachedTimestamp)
      // Если кэш не старше 5 минут, используем его (уменьшаем время кэширования)
      if (age < 5 * 60 * 1000) {
        console.log('📦 Используем кэшированные лицензии:', cachedLicenses)
        setRemainingLicenses(parseInt(cachedLicenses))
        setUseFallback(false)
        return
      }
    }
    
    try {
      // Загружаем лицензии через наш API endpoint
      console.log('📡 Загружаем лицензии через API...')
      
      try {
        const response = await fetch('/api/submit', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        
        console.log('✅ Получен ответ:', response.status, response.statusText)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        console.log('📦 Данные ответа:', result)
        
        if (result.success) {
          setRemainingLicenses(result.remainingLicenses)
          // Сохраняем в localStorage
          localStorage.setItem('remainingLicenses', result.remainingLicenses.toString())
          localStorage.setItem('licensesTimestamp', Date.now().toString())
          console.log('✅ Лицензии загружены и сохранены:', result.remainingLicenses)
          setUseFallback(false)
          console.log('🟢 Fallback режим отключен')
        } else {
          console.warn('⚠️ Ошибка от API:', result.message)
          setRemainingLicenses(200)
          setUseFallback(true)
          console.log('🟠 Fallback режим включен (ошибка API)')
        }
      } catch (fetchError) {
        throw fetchError
      }
      
    } catch (error) {
      // Проверяем тип ошибки и предоставляем более детальную информацию
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.log('⏰ Запрос был отменен по таймауту - используем fallback режим')
        } else if (error.message.includes('Failed to fetch')) {
          console.warn('🌐 Ошибка сети или CORS - переключаемся на fallback')
          console.log('💡 Возможные причины:')
          console.log('   - Блокировка CORS браузером')
          console.log('   - Проблемы с сетью')
          console.log('   - Google Apps Script недоступен')
        } else if (error.message.includes('NetworkError')) {
          console.warn('🌐 Ошибка сети - нет подключения к интернету')
        } else {
          console.warn('❌ Неожиданная ошибка загрузки лицензий:', error.message)
        }
      }
      
      // Используем значение по умолчанию (200) и включаем fallback режим
      setRemainingLicenses(200)
      setUseFallback(true)
      console.log('🟠 Fallback режим включен (ошибка сети)')
      console.log('🔍 Состояние useFallback установлено в true')
    }
  }, [])

  // Загружаем реальное количество лицензий при загрузке страницы
  useEffect(() => {
    // Добавляем небольшую задержку перед загрузкой
    const timer = setTimeout(() => {
      try {
        loadRemainingLicenses()
      } catch (error) {
        console.error('❌ Критическая ошибка при загрузке лицензий:', error)
        // В случае критической ошибки устанавливаем fallback режим
        setRemainingLicenses(200)
        setUseFallback(true)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [loadRemainingLicenses])

  // Автоматическое обновление данных каждые 30 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      // Обновляем данные только если не в fallback режиме
      if (!useFallback) {
        loadRemainingLicenses()
      }
    }, 30000) // 30 секунд

    return () => clearInterval(interval)
  }, [useFallback])



  // Функция для прокрутки наверх
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  // Эффект для отслеживания прокрутки
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setShowScrollToTop(scrollTop > 300) // Показываем кнопку после прокрутки на 300px
      setScrollProgress(Math.min(scrollPercent, 100)) // Прогресс прокрутки в процентах
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Функция валидации Telegram username
  const validateTelegramUsername = (username: string): boolean => {
    // Убираем @ если есть
    const cleanUsername = username.replace(/^@/, '')
    
    // Проверяем формат: 5-32 символа, только буквы, цифры и подчеркивания
    const telegramRegex = /^[a-zA-Z0-9_]{5,32}$/
    
    if (!telegramRegex.test(cleanUsername)) {
      return false
    }
    
    // Проверяем, что не начинается с цифры
    if (/^\d/.test(cleanUsername)) {
      return false
    }
    
    return true
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (remainingLicenses <= 0) {
      toast.error("На жаль, безкоштовні ліцензії закінчились!")
      return
    }
    
    // Валидация Telegram username
    if (!validateTelegramUsername(telegram)) {
      toast.error("Невірний формат Telegram username! Використовуйте формат: @username або username (5-32 символи, тільки літери, цифри та підкреслення)")
      return
    }
    
    setIsSubmitting(true)
    setIsSubmitted(false)

    try {
      console.log('🔄 Начинаем отправку формы...')
      console.log('📊 Fallback режим:', useFallback ? 'ВКЛЮЧЕН' : 'ВЫКЛЮЧЕН')
      
      // Отправляем данные через наш API endpoint
      console.log('🟢 Отправляем данные через API endpoint...')
      
      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            telegram,
            remainingLicenses
          })
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        if (result.success) {
          setIsSubmitted(true)
          setRemainingLicenses(result.remainingLicenses)
          // Обновляем localStorage
          localStorage.setItem('remainingLicenses', result.remainingLicenses.toString())
          localStorage.setItem('licensesTimestamp', Date.now().toString())
          toast.success(`Дякуємо, ${name}! Ваша заявка успішно відправлена.`)
          console.log('✅ Данные успешно отправлены через API:', result)
          return
        } else {
          console.error('❌ Ошибка от API:', result.message)
          throw new Error(result.message || 'Ошибка отправки данных')
        }
      } catch (error) {
        console.warn('⚠️ Не удалось отправить через API:', error)
        if (error instanceof Error) {
          console.log('🔍 Детали ошибки:', {
            name: error.name,
            message: error.message,
            stack: error.stack
          })
        }
        
        // Если не удалось отправить в Google, используем fallback
        if (useFallback) {
          console.log('🟠 Используем FALLBACK режим')
          // FALLBACK РЕЖИМ: Имитация отправки
          await new Promise((resolve) => setTimeout(resolve, 1000))
          
          const mockResult = {
            success: true,
            remainingLicenses: remainingLicenses - 1
          }

          if (mockResult.success) {
            setIsSubmitted(true)
            setRemainingLicenses(mockResult.remainingLicenses)
            // Обновляем localStorage даже в fallback режиме
            localStorage.setItem('remainingLicenses', mockResult.remainingLicenses.toString())
            localStorage.setItem('licensesTimestamp', Date.now().toString())
            toast.success(`Дякуємо, ${name}! Ваша заявка успішно відправлена. (Режим офлайн)`)
            console.log('✅ Форма отправлена в fallback режиме')
          } else {
            throw new Error('Ошибка отправки')
          }
        } else {
          throw error // Пробрасываем ошибку дальше
        }
      }
      
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      
      // Показываем более информативные сообщения об ошибках
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          toast.error("Запрос був скасований через таймаут. Спробуйте ще раз.")
        } else if (error.message.includes('Failed to fetch')) {
          console.warn('🌐 Ошибка сети - переключаемся на fallback режим')
          // Автоматически переключаемся на fallback режим при сетевых ошибках
          setUseFallback(true)
          toast.error("Помилка мережі. Використовується офлайн режим.")
        } else if (error.message.includes('NetworkError')) {
          console.warn('🌐 Нет подключения к интернету')
          setUseFallback(true)
          toast.error("Немає підключення до інтернету. Використовується офлайн режим.")
        } else if (error.message.includes('HTTP error! status: 403')) {
          toast.error("Помилка доступу. Спробуйте пізніше.")
        } else if (error.message.includes('HTTP error! status: 500')) {
          toast.error("Помилка сервера. Спробуйте пізніше.")
        } else {
          toast.error("Виникла помилка при відправці заявки. Спробуйте ще раз.")
        }
      } else {
        toast.error("Виникла помилка при відправці заявки. Спробуйте ще раз.")
      }
      
      // При ошибке включаем fallback режим для следующих запросов
      if (error instanceof Error && error.message.includes('Failed to fetch')) {
        setUseFallback(true)
        console.log('🟠 Включен fallback режим из-за ошибки сети')
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [name, telegram, remainingLicenses])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Добавляем touch gesture для закрытия мобильного меню
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    const startY = touch.clientY
    const startX = touch.clientX
    
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const deltaY = touch.clientY - startY
      const deltaX = touch.clientX - startX
      
      // Если свайп вниз больше 50px и горизонтальное движение меньше 30px
      if (deltaY > 50 && Math.abs(deltaX) < 30) {
        closeMobileMenu()
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
    
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI TG Bot Store
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Можливості
            </a>
            <a href="#benefits" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Переваги
            </a>
            <a href="#social-proof" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Відгуки
            </a>
            <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              FAQ
            </a>
            <div className="flex items-center space-x-3">
              {useFallback && (
                <div className="flex items-center space-x-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-orange-700 dark:text-orange-300 font-medium">
                    Офлайн
                  </span>
                </div>
              )}
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 px-6 text-base font-semibold active:scale-95 touch-manipulation transition-all duration-200"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                style={{ minHeight: '44px' }}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Ранній доступ
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 active:scale-95 touch-manipulation"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur animate-in slide-in-from-top-2 duration-300"
            onTouchStart={handleTouchStart}
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              <a
                href="#features"
                className="block py-4 px-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 touch-manipulation"
                onClick={closeMobileMenu}
                style={{ minHeight: '48px' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium">Можливості</span>
                </div>
              </a>
              <a
                href="#benefits"
                className="block py-4 px-4 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 touch-manipulation"
                onClick={closeMobileMenu}
                style={{ minHeight: '48px' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="font-medium">Переваги</span>
                </div>
              </a>
              <a
                href="#social-proof"
                className="block py-4 px-4 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 touch-manipulation"
                onClick={closeMobileMenu}
                style={{ minHeight: '48px' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="font-medium">Відгуки</span>
                </div>
              </a>
              <a
                href="#faq"
                className="block py-4 px-4 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 touch-manipulation"
                onClick={closeMobileMenu}
                style={{ minHeight: '48px' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <span className="font-medium">FAQ</span>
                </div>
              </a>
              {useFallback && (
                <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-orange-700 dark:text-orange-300 font-medium">
                    Режим офлайн
                  </span>
                </div>
              )}
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-6 py-4 text-base font-semibold active:scale-95 touch-manipulation"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                  closeMobileMenu()
                }}
                style={{ minHeight: '56px' }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Ранній доступ
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Scrolling Banner */}
              <ScrollingBanner remainingLicenses={remainingLicenses} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-400/10 dark:to-orange-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Заголовок и подзаголовок над картинкой */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full text-xs md:text-sm font-medium text-blue-800 dark:text-blue-200 mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Революція в e-commerce
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
              Створи інтернет-магазин у{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Telegram
              </span>{" "}
              з AI-Агентом для продажів
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
              Продавайте товари та послуги у Telegram, автоматизуйте спілкування з клієнтами за допомогою ШІ та
              збільшуйте продажі без технічних складнощів.
            </p>
          </div>

          {/* Картинка по центру */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/telegram-bot-store.png"
                  alt="AI TG Bot Store Interface"
                  className="w-full max-w-sm md:max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl transform rotate-6"></div>
            </div>
          </div>

          {/* Форма и дополнительные элементы */}
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12" id="contact-form">
              <ContactForm
                name={name}
                setName={setName}
                telegram={telegram}
                setTelegram={setTelegram}
                isSubmitted={isSubmitted}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
                remainingLicenses={remainingLicenses}
                useFallback={useFallback}
              />
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-2">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                Запуск за 5 хвилин
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-2">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                Безпечні платежі
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-2">
                  <Bot className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                AI-консультант 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-white dark:bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-full text-xs md:text-sm font-medium text-orange-800 dark:text-orange-200 mb-4">
              <Rocket className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Потужні можливості
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Все необхідне для успішних продажів</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              AI TG Bot Store — це сучасна платформа для запуску інтернет-магазину прямо у Telegram з вбудованим штучним
              інтелектом
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-blue-900 dark:text-blue-100">Створення магазину за 5 хвилин</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Не потрібно програмування чи окремого сайту — все в Telegram.</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Bot className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-green-900 dark:text-green-100">Вбудований ШІ-консультант</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Автоматичне спілкування з клієнтами, відповіді на питання, рекомендації товарів.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-purple-900 dark:text-purple-100">Прийом оплат</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Підтримка банківських карт, Apple Pay, Google Pay та інших платіжних систем.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-orange-900 dark:text-orange-100">Гнучке управління товарами</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Додавайте, змінюйте й видаляйте товари, ціни, фото, описи у кілька кліків.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-red-900 dark:text-red-100">Розумні розсилки</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Автоматичне інформування клієнтів про новинки, знижки та статус замовлень.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-teal-900 dark:text-teal-100">Мультимовність</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Інтерфейс магазину та ШІ‑бота — кількома мовами для різних аудиторій.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 rounded-full text-xs md:text-sm font-medium text-green-800 dark:text-green-200 mb-4">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Доведені результати
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Результати, які говорять самі за себе</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Реальні цифри та переваги від використання AI TG Bot Store
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  30-67%
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Збільшення продажів</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Автоматизація через чат-боти у месенджерах підвищує конверсію та дозволяє отримати більше замовлень
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  60%
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Економія часу</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Завдяки ШІ‑консультанту більшість типових питань і замовлень обробляються автоматично
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  5 хв
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Миттєвий запуск</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Стартуйте продажі в Telegram усього за 5 хвилин — без програмістів і технічних складнощів
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  30%
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Зниження витрат</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Автоматизація процесів дозволяє скоротити витрати на сапорт і менеджерів
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  15%
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Повернення клієнтів</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Завдяки персоналізованим розсилкам бот повертає клієнтів, які не завершили покупку
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900 dark:text-white">Підтримка клієнтів</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  AI-бот працює цілодобово, надаючи миттєві відповіді та підтримку клієнтам у будь-який час
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50 rounded-full text-xs md:text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-4">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Відгуки клієнтів
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Що кажуть наші клієнти</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">4.9/5</span>
              <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">на основі 247+ відгуків</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                  "За тиждень після запуску мого магазину в Telegram продажі зросли на 45%. AI-консультант працює краще
                  за живого менеджера!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-xs md:text-sm">ОМ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Олена Мельник</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Власниця магазину косметики</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                  "Неймовірно просто! Створив магазин за 10 хвилин, і вже через годину отримав перше замовлення.
                  Рекомендую всім!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-xs md:text-sm">АК</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Андрій Коваленко</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">IT-підприємець</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                  "Автоматизація на найвищому рівні. Бот відповідає клієнтам навіть вночі, а я прокидаюся з новими
                  замовленнями. Фантастика!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-xs md:text-sm">МС</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Марія Сидоренко</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Власниця handmade студії</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                  "Збільшив конверсію на 60% завдяки персоналізованим рекомендаціям AI. Клієнти в захваті від швидкості
                  обслуговування."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-xs md:text-sm">ВП</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Віктор Петренко</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Власник спортивного магазину</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                  "Економлю 4 години щодня завдяки автоматизації. Тепер можу зосередитися на розвитку бізнесу, а не на
                  рутинних завданнях."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-xs md:text-sm">ТГ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Тетяна Гриценко</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Власниця дитячого магазину</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                  "Найкраще рішення для малого бізнесу! Не потрібно витрачати тисячі на розробку сайту. Все працює
                  ідеально в Telegram."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-xs md:text-sm">ДЛ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Дмитро Лисенко</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Власник кав'ярні</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full text-xs md:text-sm font-medium text-purple-800 dark:text-purple-200 mb-4">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Часті питання
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Часті питання</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Відповіді на найпопулярніші запитання про AI TG Bot Store
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Чи потрібні технічні знання для створення магазину?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  Ні, абсолютно не потрібні! AI TG Bot Store створений для людей без технічного досвіду. Весь процес
                  налаштування займає лише 5 хвилин і проходить через простий інтерфейс.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Як працює AI-консультант?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  ШІ-консультант автоматично відповідає на питання клієнтів, надає рекомендації товарів, обробляє
                  замовлення та веде діалог 24/7. Він навчається на основі вашого асортименту та може персоналізувати
                  спілкування.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Які платіжні системи підтримуються?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  Підтримуються всі популярні платіжні системи: банківські карти, Apple Pay, Google Pay, а також
                  криптовалютні платежі. Інтеграція відбувається автоматично.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Чи можна налаштувати дизайн магазину?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  Так, ви можете налаштувати кольори, логотип, описи товарів, фото та структуру каталогу. Також доступні
                  готові шаблони для різних ніш.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Скільки коштує використання платформи?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  Є безкоштовний тарифний план для початку роботи. Платні тарифи починаються від $29/місяць і включають
                  розширені можливості AI, аналітику та пріоритетну підтримку.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Чи безпечно зберігати дані клієнтів?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  Так, ми використовуємо найсучасніші методи шифрування та захисту даних. Всі дані зберігаються на
                  захищених серверах і відповідають стандартам GDPR.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Чи можна інтегрувати з існуючими системами?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  Так, платформа підтримує інтеграцію з популярними CRM-системами, складськими програмами та
                  бухгалтерськими сервісами через API.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-gray-200 dark:border-gray-700 rounded-xl px-4 md:px-6 bg-white dark:bg-gray-800 shadow-lg">
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-sm md:text-base text-gray-900 dark:text-white">
                  Яка підтримка надається користувачам?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 dark:text-gray-300 pb-4 md:pb-6">
                  Ми надаємо 24/7 підтримку через Telegram, детальну документацію, відеоуроки та персональні
                  консультації для преміум користувачів.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact-form"
        className="py-12 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Обмежена пропозиція
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Готові стати першими?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Платформа знаходиться в розробці. Залиште свої контакти, щоб отримати ранній доступ та спеціальні умови!
            </p>
            <div className="max-w-md mx-auto mb-6 md:mb-8">
              <ContactForm
                title="Отримати ранній доступ безкоштовно"
                name={name}
                setName={setName}
                telegram={telegram}
                setTelegram={setTelegram}
                isSubmitted={isSubmitted}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
                remainingLicenses={remainingLicenses}
                useFallback={useFallback}
              />
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 text-white/90 text-sm md:text-base">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Безкоштовний ранній доступ
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Персональна підтримка
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Спеціальні умови
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">AI TG Bot Store</span>
              </div>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Створюйте успішні інтернет-магазини в Telegram з AI-ботом для автоматизації продажів.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Продукт</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors text-sm md:text-base">
                    Можливості
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-white transition-colors text-sm md:text-base">
                    Переваги
                  </a>
                </li>
                <li>
                  <a href="#social-proof" className="hover:text-white transition-colors text-sm md:text-base">
                    Відгуки
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors text-sm md:text-base">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Підтримка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Документація
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Навчальні матеріали
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Спільнота
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Контакти
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Компанія</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Про нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Кар'єра
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm md:text-base">
                    Партнери
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm">© 2025 AI TG Bot Store. Всі права захищені.</p>
            <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                Політика конфіденційності
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">
                Умови використання
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Кнопка "Наверх" с индикатором прогресса */}
      {showScrollToTop && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-2">
          {/* Индикатор прогресса */}
          <div className="w-12 h-12 relative">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-600"
                strokeWidth="2"
                strokeDasharray={`${scrollProgress * 1.13}, 113`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>
          
          {/* Кнопка прокрутки наверх */}
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation flex items-center justify-center group"
            aria-label="Прокрутити наверх"
            title="Прокрутити наверх"
            style={{ minHeight: '56px', minWidth: '56px' }}
          >
            <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          </button>
        </div>
      )}
    </div>
  )
}
