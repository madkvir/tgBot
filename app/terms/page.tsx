import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Умови використання
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
                <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Вступ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ласкаво просимо до AI TG Bot Store! Ці Умови використання ("Умови") регулюють використання 
                нашого сервісу та платформи для створення інтернет-магазинів в Telegram з штучним інтелектом.
              </p>
              <p>
                Використовуючи наш сервіс, ви погоджуєтеся з цими Умовами. Якщо ви не згодні з будь-якою частиною 
                цих умов, будь ласка, не використовуйте наш сервіс.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Опис сервісу</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                AI TG Bot Store надає платформу для створення та управління інтернет-магазинами в Telegram 
                з використанням штучного інтелекту. Наш сервіс включає:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Створення Telegram ботів для електронної комерції</li>
                <li>AI-асистент для обслуговування клієнтів</li>
                <li>Система управління товарами та замовленнями</li>
                <li>Аналітика та звітність</li>
                <li>Інтеграція з платіжними системами</li>
                <li>Технічна підтримка та навчання</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Облікові записи користувачів</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Реєстрація:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ви повинні бути старше 18 років або мати дозвіл батьків</li>
                  <li>Надавати точну та актуальну інформацію</li>
                  <li>Зберігати конфіденційність облікових даних</li>
                  <li>Нести відповідальність за дії під вашим обліковим записом</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Заборонено:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Передавати облікові дані третім особам</li>
                  <li>Створювати фальшиві або дублікатні акаунти</li>
                  <li>Використовувати автоматизовані системи без дозволу</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Прийнятне використання</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Ви зобов'язуєтеся використовувати наш сервіс тільки для законних цілей:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Продаж товарів та послуг, які відповідають законодавству</li>
                <li>Дотримання прав інтелектуальної власності</li>
                <li>Повага до прав та інтересів інших користувачів</li>
                <li>Дотримання правил Telegram та інших платформ</li>
                <li>Використання відповідно до призначення сервісу</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Заборонена діяльність</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Забороняється використовувати наш сервіс для:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Продажу заборонених товарів або послуг</li>
                <li>Шахрайства, фішингу або інших злочинів</li>
                <li>Порушення прав інтелектуальної власності</li>
                <li>Спаму або надсилання небажаних повідомлень</li>
                <li>Атак на інші системи або користувачів</li>
                <li>Розповсюдження шкідливого програмного забезпечення</li>
                <li>Порушення конфіденційності інших осіб</li>
                <li>Діяльності, що порушує законодавство</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Інтелектуальна власність</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Наші права:</h4>
                <p>
                  AI TG Bot Store та його контент, включаючи, але не обмежуючись, логотипи, дизайн, 
                  програмне забезпечення та документацію, захищені авторським правом та іншими законами 
                  про інтелектуальну власність.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Ваш контент:</h4>
                <p>
                  Ви зберігаєте права на контент, який ви створюєте за допомогою нашого сервісу. 
                  Надаючи нам ліцензію на використання цього контенту для надання сервісу.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Заборона:</h4>
                <p>
                  Забороняється копіювати, модифікувати, розповсюджувати або використовувати наш 
                  контент без письмового дозволу.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Умови оплати</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Тарифи:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Тарифи вказані на нашому сайті та можуть змінюватися</li>
                  <li>Оплата здійснюється заздалегідь</li>
                  <li>Всі ціни вказані без урахування податків</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Повернення коштів:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Повернення коштів за перші 14 днів використання</li>
                  <li>Умови повернення залежать від причини</li>
                  <li>Технічні проблеми розглядаються індивідуально</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Конфіденційність та дані</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ваша конфіденційність важлива для нас. Збір, використання та захист ваших персональних даних 
                регулюється нашою Політикою конфіденційності, яка є невід'ємною частиною цих Умов.
              </p>
              <p>
                Використовуючи наш сервіс, ви погоджуєтеся з обробкою ваших даних відповідно до 
                Політики конфіденційності.
              </p>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Доступність сервісу</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ми прагнемо забезпечити високу доступність сервісу, але не гарантуємо безперервну роботу. 
                Сервіс може бути недоступним через:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Технічне обслуговування</li>
                <li>Оновлення системи</li>
                <li>Технічні неполадки</li>
                <li>Дії третіх сторін</li>
                <li>Форс-мажорні обставини</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ми повідомимо про планові простої заздалегідь, коли це можливо.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Обмеження відповідальності</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                AI TG Bot Store надається "як є" без будь-яких гарантій. Ми не несемо відповідальності за:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Прямі або непрямі збитки</li>
                <li>Втрату прибутку або даних</li>
                <li>Переривання бізнесу</li>
                <li>Дії третіх сторін</li>
                <li>Форс-мажорні обставини</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Наша відповідальність обмежена сумою, сплаченою за послуги за останні 12 місяців.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Припинення використання</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Ваше право:</h4>
                <p>Ви можете припинити використання сервісу в будь-який час.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Наше право:</h4>
                <p>Ми можемо припинити або призупинити доступ до сервісу у випадках:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Порушення цих Умов</li>
                  <li>Неоплата послуг</li>
                  <li>Правопорушення</li>
                  <li>Технічні проблеми</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Наслідки:</h4>
                <p>
                  При припиненні використання ваші дані можуть бути видалені відповідно до 
                  Політики конфіденційності.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Зміни до умов</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ми залишаємо за собою право змінювати ці Умови в будь-який час. Про зміни ми повідомимо:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Через наш веб-сайт</li>
                <li>Електронною поштою</li>
                <li>Через Telegram бота</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Продовження використання сервісу після змін означає вашу згоду з новими умовами.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Придатне право</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ці Умови регулюються законодавством України. Будь-які спори вирішуються в судах України, 
                якщо інше не передбачено законом.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Якщо будь-яка частина цих Умов визнана недійсною, інші частини залишаються в силі.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Контактна інформація</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Якщо у вас є питання щодо цих Умов використання, зв'яжіться з нами:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@aitgstore.com</p>
                <p><strong>Telegram:</strong> @aitgstore_support</p>
                <p><strong>Веб-сайт:</strong> https://aitgstore.com</p>
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
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Політика конфіденційності
              </Link>
              <Link href="/terms" className="text-green-400 hover:text-green-300 text-sm transition-colors">
                Умови використання
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
