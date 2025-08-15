import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database, Users, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Назад</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Політика конфіденційності
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Вступ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                AI TG Bot Store ("ми", "наш", "нас") зобов'язується захищати конфіденційність наших користувачів. 
                Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо вашу особисту інформацію 
                при використанні нашого сервісу.
              </p>
              <p>
                Використовуючи наш сервіс, ви погоджуєтеся зі збором та використанням інформації відповідно до цієї політики.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Інформація, яку ми збираємо</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Особиста інформація:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ім'я та прізвище</li>
                  <li>Telegram username</li>
                  <li>Email адреса (якщо надана)</li>
                  <li>Номер телефону (якщо наданий)</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Технічна інформація:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP адреса</li>
                  <li>Тип браузера та операційна система</li>
                  <li>Дата та час відвідування</li>
                  <li>Сторінки, які ви відвідували</li>
                  <li>Джерело переходу на наш сайт</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Як ми використовуємо інформацію</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Ми використовуємо зібрану інформацію для:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Надання та покращення наших послуг</li>
                <li>Зв'язку з вами щодо вашого запиту</li>
                <li>Надсилання важливих оновлень та повідомлень</li>
                <li>Аналізу використання сервісу для покращення</li>
                <li>Захисту від шахрайства та зловживань</li>
                <li>Дотримання юридичних зобов'язань</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <span>Поширення інформації</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім особам, за винятком:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Довірених партнерів, які допомагають нам працювати</li>
                <li>Виконання юридичних зобов'язань</li>
                <li>Захисту наших прав та безпеки</li>
                <li>З вашої явної згоди</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Всі треті сторони зобов'язуються захищати вашу інформацію з такою ж ретельністю, як і ми.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span>Безпека даних</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Ми впроваджуємо відповідні технічні та організаційні заходи для захисту вашої особистої інформації:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Шифрування даних при передачі та зберіганні</li>
                <li>Регулярні оновлення безпеки</li>
                <li>Обмежений доступ до особистої інформації</li>
                <li>Моніторинг та логування доступу</li>
                <li>Регулярні аудити безпеки</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Однак жоден метод передачі через інтернет або електронного зберігання не є 100% безпечним.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Файли cookie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ми використовуємо файли cookie для покращення вашого досвіду на нашому сайті. 
                Файли cookie - це невеликі текстові файли, які зберігаються на вашому пристрої.
              </p>
              <p>Типи файлів cookie, які ми використовуємо:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Необхідні:</strong> для роботи сайту</li>
                <li><strong>Аналітичні:</strong> для аналізу використання</li>
                <li><strong>Функціональні:</strong> для покращення функціональності</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ви можете керувати налаштуваннями файлів cookie у вашому браузері.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Ваші права</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Ви маєте право:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Отримати доступ до своєї особистої інформації</li>
                <li>Виправити неточну інформацію</li>
                <li>Видалити свою інформацію</li>
                <li>Обмежити обробку інформації</li>
                <li>Перенести інформацію до іншого сервісу</li>
                <li>Відкликати згоду на обробку</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Для реалізації цих прав звертайтеся до нас за адресою, вказаною нижче.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Конфіденційність дітей</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Наш сервіс не призначений для дітей віком до 13 років. Ми не збираємо свідомо особисту інформацію 
                від дітей до 13 років. Якщо ви є батьком або опікуном і знаєте, що ваша дитина надала нам особисту інформацію, 
                будь ласка, зв'яжіться з нами.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Зміни до політики</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ми можемо оновлювати цю Політику конфіденційності час від часу. Ми повідомимо вас про будь-які зміни, 
                розмістивши нову Політику на цій сторінці та оновивши дату "Останнє оновлення".
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Рекомендуємо періодично переглядати цю Політику для інформування про наші практики.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Контактна інформація</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Якщо у вас є питання щодо цієї Політики конфіденційності, зв'яжіться з нами:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@aitgstore.com</p>
                <p><strong>Telegram:</strong> https://t.me/aitgbotstore</p>
                <p><strong>Веб-сайт:</strong> https://aitgbot.store</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 AI TG Bot Store. Всі права захищені.
            </p>
            <div className="mt-4 space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Головна
              </Link>
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                Політика конфіденційності
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Умови використання
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
