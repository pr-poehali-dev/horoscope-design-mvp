import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const zodiacSigns = [
  { name: 'Овен', dates: '21 марта — 19 апреля', icon: '♈', element: 'Огонь', color: '#FF6B6B' },
  { name: 'Телец', dates: '20 апреля — 20 мая', icon: '♉', element: 'Земля', color: '#4ECDC4' },
  { name: 'Близнецы', dates: '21 мая — 20 июня', icon: '♊', element: 'Воздух', color: '#45B7D1' },
  { name: 'Рак', dates: '21 июня — 22 июля', icon: '♋', element: 'Вода', color: '#96CEB4' },
  { name: 'Лев', dates: '23 июля — 22 августа', icon: '♌', element: 'Огонь', color: '#FFEAA7' },
  { name: 'Дева', dates: '23 августа — 22 сентября', icon: '♍', element: 'Земля', color: '#DDA0DD' },
  { name: 'Весы', dates: '23 сентября — 22 октября', icon: '♎', element: 'Воздух', color: '#98D8C8' },
  { name: 'Скорпион', dates: '23 октября — 21 ноября', icon: '♏', element: 'Вода', color: '#F7DC6F' },
  { name: 'Стрелец', dates: '22 ноября — 21 декабря', icon: '♐', element: 'Огонь', color: '#BB8FCE' },
  { name: 'Козерог', dates: '22 декабря — 19 января', icon: '♑', element: 'Земля', color: '#85C1E9' },
  { name: 'Водолей', dates: '20 января — 18 февраля', icon: '♒', element: 'Воздух', color: '#F8C471' },
  { name: 'Рыбы', dates: '19 февраля — 20 марта', icon: '♓', element: 'Вода', color: '#82E0AA' }
]

const dailyHoroscope = {
  love: { rating: 4, text: "Сегодня звезды располагают к новым знакомствам. Откройте сердце для неожиданных встреч." },
  career: { rating: 3, text: "Благоприятный день для творческих проектов. Доверьтесь интуиции в принятии решений." },
  health: { rating: 5, text: "Отличное время для физической активности. Ваша энергия на пике." }
}

const weeklyHoroscope = {
  love: { rating: 5, text: "Неделя обещает быть романтичной. Возможны судьбоносные встречи и развитие отношений." },
  career: { rating: 4, text: "Профессиональный рост ждет вас. Новые возможности откроются к середине недели." },
  health: { rating: 3, text: "Уделите внимание отдыху. Не перегружайте себя в первой половине недели." }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          name="Star"
          size={16}
          className={`${i < rating ? 'text-golden-star fill-current' : 'text-gray-400'}`}
        />
      ))}
    </div>
  )
}

export default function Index() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const selectedSignData = zodiacSigns.find(sign => sign.name === selectedSign)

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-dark-slate to-deep-space">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl animate-float">✨</div>
            <h1 className="text-2xl md:text-3xl font-inter font-bold text-starlight">
              Космический Гороскоп
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#signs" className="text-starlight hover:text-golden-star transition-colors">Гороскопы</a>
            <a href="#about" className="text-starlight hover:text-golden-star transition-colors">О нас</a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-starlight hover:text-golden-star"
            >
              <Icon name={isDarkMode ? "Sun" : "Moon"} size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-16 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-inter font-bold text-starlight mb-6">
            Найди свою астрологическую
            <span className="bg-gradient-to-r from-cosmic-purple to-golden-star bg-clip-text text-transparent block">
              опору
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Узнай, что готовит тебе Вселенная сегодня. Персональные прогнозы от звезд для каждого знака зодиака.
          </p>
          <Button
            size="lg"
            className="bg-cosmic-purple hover:bg-cosmic-purple/80 text-white px-8 py-3 rounded-full text-lg"
            onClick={() => document.getElementById('signs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Sparkles" size={20} className="mr-2" />
            Выбрать знак зодиака
          </Button>
        </div>
      </section>

      {/* Zodiac Signs Grid */}
      <section id="signs" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-inter font-bold text-center text-starlight mb-12">
          Знаки Зодиака
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {zodiacSigns.map((sign, index) => (
            <Card
              key={sign.name}
              className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cosmic-purple/20 animate-scale-in group ${
                selectedSign === sign.name ? 'ring-2 ring-cosmic-purple bg-white/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedSign(sign.name)}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div
                  className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: sign.color }}
                >
                  {sign.icon}
                </div>
                <h4 className="font-inter font-semibold text-starlight text-lg mb-2">
                  {sign.name}
                </h4>
                <p className="text-gray-400 text-sm mb-2">{sign.dates}</p>
                <p className="text-xs text-gray-500">{sign.element}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Horoscope Display */}
      {selectedSign && selectedSignData && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <div
                className="text-6xl mb-4 animate-float"
                style={{ color: selectedSignData.color }}
              >
                {selectedSignData.icon}
              </div>
              <h3 className="text-3xl font-inter font-bold text-starlight mb-2">
                {selectedSignData.name}
              </h3>
              <p className="text-gray-400">{selectedSignData.dates} • {selectedSignData.element}</p>
            </div>

            <Tabs defaultValue="today" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm border-white/20">
                <TabsTrigger
                  value="today"
                  className="data-[state=active]:bg-cosmic-purple data-[state=active]:text-white"
                >
                  Сегодня
                </TabsTrigger>
                <TabsTrigger
                  value="week"
                  className="data-[state=active]:bg-cosmic-purple data-[state=active]:text-white"
                >
                  Неделя
                </TabsTrigger>
              </TabsList>

              <TabsContent value="today" className="mt-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Heart" size={24} className="text-pink-400" />
                          <h4 className="font-semibold text-starlight">Любовь</h4>
                        </div>
                        <StarRating rating={dailyHoroscope.love.rating} />
                      </div>
                      <p className="text-gray-300 text-sm">{dailyHoroscope.love.text}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Briefcase" size={24} className="text-blue-400" />
                          <h4 className="font-semibold text-starlight">Карьера</h4>
                        </div>
                        <StarRating rating={dailyHoroscope.career.rating} />
                      </div>
                      <p className="text-gray-300 text-sm">{dailyHoroscope.career.text}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Heart" size={24} className="text-green-400" />
                          <h4 className="font-semibold text-starlight">Здоровье</h4>
                        </div>
                        <StarRating rating={dailyHoroscope.health.rating} />
                      </div>
                      <p className="text-gray-300 text-sm">{dailyHoroscope.health.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="week" className="mt-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Heart" size={24} className="text-pink-400" />
                          <h4 className="font-semibold text-starlight">Любовь</h4>
                        </div>
                        <StarRating rating={weeklyHoroscope.love.rating} />
                      </div>
                      <p className="text-gray-300 text-sm">{weeklyHoroscope.love.text}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Briefcase" size={24} className="text-blue-400" />
                          <h4 className="font-semibold text-starlight">Карьера</h4>
                        </div>
                        <StarRating rating={weeklyHoroscope.career.rating} />
                      </div>
                      <p className="text-gray-300 text-sm">{weeklyHoroscope.career.text}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="Heart" size={24} className="text-green-400" />
                          <h4 className="font-semibold text-starlight">Здоровье</h4>
                        </div>
                        <StarRating rating={weeklyHoroscope.health.rating} />
                      </div>
                      <p className="text-gray-300 text-sm">{weeklyHoroscope.health.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setSelectedSign(null)}
                className="border-white/20 text-starlight hover:bg-white/10"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Выбрать другой знак
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-inter font-bold text-starlight mb-6">
            О проекте
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Наш сервис объединяет древнюю мудрость астрологии с современными технологиями,
            чтобы предоставить вам точные и вдохновляющие прогнозы. Мы помогаем людям
            лучше понять себя и найти гармонию с космическими ритмами.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="font-semibold text-starlight mb-2">Точные прогнозы</h4>
              <p className="text-gray-400 text-sm">Основанные на положении планет</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="font-semibold text-starlight mb-2">Персональный подход</h4>
              <p className="text-gray-400 text-sm">Индивидуальные рекомендации</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌙</div>
              <h4 className="font-semibold text-starlight mb-2">Ежедневные обновления</h4>
              <p className="text-gray-400 text-sm">Свежие прогнозы каждый день</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-xl">✨</div>
              <span className="text-starlight font-semibold">Космический Гороскоп</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-starlight transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-starlight transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-starlight transition-colors">
                <Icon name="Star" size={20} />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-4">
            © 2024 Космический Гороскоп. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}