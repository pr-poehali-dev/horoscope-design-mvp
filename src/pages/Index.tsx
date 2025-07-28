import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import ZodiacIcon from '@/components/ZodiacIcon'
import Icon from '@/components/ui/icon'

const zodiacSigns = [
  { name: 'Овен', dates: '21 марта • 19 апреля' },
  { name: 'Телец', dates: '20 апреля • 20 мая' },
  { name: 'Близнецы', dates: '21 мая • 20 июня' },
  { name: 'Рак', dates: '21 июня • 22 июля' },
  { name: 'Лев', dates: '23 июля • 22 августа' },
  { name: 'Дева', dates: '23 августа • 22 сентября' },
  { name: 'Весы', dates: '23 сентября • 22 октября' },
  { name: 'Скорпион', dates: '23 октября • 21 ноября' },
  { name: 'Стрелец', dates: '22 ноября • 21 декабря' },
  { name: 'Козерог', dates: '22 декабря • 19 января' },
  { name: 'Водолей', dates: '20 января • 18 февраля' },
  { name: 'Рыбы', dates: '19 февраля • 20 марта' }
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

function StarryBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      ))}
    </div>
  )
}

export default function Index() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null)

  const selectedSignData = zodiacSigns.find(sign => sign.name === selectedSign)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#1e3a8a] to-[#0f172a] relative">
      <StarryBackground />
      
      <div className="relative z-10">
        {!selectedSign ? (
          <>
            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-20 pb-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-inter font-light text-white mb-6 leading-tight">
                  Найди свою<br />
                  астрологическую опору
                </h1>
                <p className="text-xl text-gray-300 mb-12 font-light">
                  Узнай, что готовит тебе Вселенная сегодня
                </p>
                <Button
                  size="lg"
                  className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-4 rounded-full text-lg font-medium border-0"
                  onClick={() => document.getElementById('signs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать знак зодиака
                </Button>
              </div>
            </section>

            {/* Zodiac Signs Grid */}
            <section id="signs" className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {zodiacSigns.map((sign, index) => (
                  <div
                    key={sign.name}
                    className="flex flex-col items-center text-center group cursor-pointer"
                    onClick={() => setSelectedSign(sign.name)}
                  >
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <ZodiacIcon 
                        sign={sign.name} 
                        size={80} 
                        className="text-gray-300 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-inter font-medium text-white mb-2">
                      {sign.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 font-light">
                      {sign.dates}
                    </p>
                    <button className="text-sm text-[#7c3aed] hover:text-[#6d28d9] transition-colors duration-300 font-medium">
                      Смотреть гороскоп
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">© 2024 Гороскопы</p>
            </footer>
          </>
        ) : (
          /* Horoscope Display */
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button
                variant="ghost"
                onClick={() => setSelectedSign(null)}
                className="mb-8 text-gray-300 hover:text-white"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад к знакам
              </Button>

              {/* Sign Header */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <ZodiacIcon 
                    sign={selectedSign} 
                    size={120} 
                    className="text-white mx-auto"
                  />
                </div>
                <h1 className="text-4xl font-inter font-light text-white mb-2">
                  {selectedSign}
                </h1>
                <p className="text-gray-400">
                  {selectedSignData?.dates}
                </p>
              </div>

              {/* Horoscope Tabs */}
              <Tabs defaultValue="today" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm border-white/20 mb-8">
                  <TabsTrigger
                    value="today"
                    className="data-[state=active]:bg-[#7c3aed] data-[state=active]:text-white text-gray-300"
                  >
                    Сегодня
                  </TabsTrigger>
                  <TabsTrigger
                    value="week"
                    className="data-[state=active]:bg-[#7c3aed] data-[state=active]:text-white text-gray-300"
                  >
                    Неделя
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="today">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Heart" size={24} className="text-pink-400" />
                            <h4 className="font-medium text-white">Любовь</h4>
                          </div>
                          <StarRating rating={dailyHoroscope.love.rating} />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{dailyHoroscope.love.text}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Briefcase" size={24} className="text-blue-400" />
                            <h4 className="font-medium text-white">Карьера</h4>
                          </div>
                          <StarRating rating={dailyHoroscope.career.rating} />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{dailyHoroscope.career.text}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Activity" size={24} className="text-green-400" />
                            <h4 className="font-medium text-white">Здоровье</h4>
                          </div>
                          <StarRating rating={dailyHoroscope.health.rating} />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{dailyHoroscope.health.text}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="week">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Heart" size={24} className="text-pink-400" />
                            <h4 className="font-medium text-white">Любовь</h4>
                          </div>
                          <StarRating rating={weeklyHoroscope.love.rating} />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{weeklyHoroscope.love.text}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Briefcase" size={24} className="text-blue-400" />
                            <h4 className="font-medium text-white">Карьера</h4>
                          </div>
                          <StarRating rating={weeklyHoroscope.career.rating} />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{weeklyHoroscope.career.text}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Activity" size={24} className="text-green-400" />
                            <h4 className="font-medium text-white">Здоровье</h4>
                          </div>
                          <StarRating rating={weeklyHoroscope.health.rating} />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{weeklyHoroscope.health.text}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}