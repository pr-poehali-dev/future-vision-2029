import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const prices = [
  {
    category: "Диагностика",
    icon: "Search",
    items: [
      { name: "Диагностика ПК / ноутбука", price: "Бесплатно", highlight: true },
      { name: "Выявление причины поломки", price: "Бесплатно", highlight: true },
    ],
  },
  {
    category: "Чистка и обслуживание",
    icon: "Wind",
    items: [
      { name: "Чистка от пыли (системный блок)", price: "от 500 ₽" },
      { name: "Чистка ноутбука + термопаста", price: "от 800 ₽" },
      { name: "Замена термопасты", price: "от 300 ₽" },
    ],
  },
  {
    category: "Программное обеспечение",
    icon: "Monitor",
    items: [
      { name: "Установка Windows 10 / 11", price: "от 1 000 ₽" },
      { name: "Установка драйверов и программ", price: "от 500 ₽" },
      { name: "Удаление вирусов", price: "от 700 ₽" },
      { name: "Настройка интернета / Wi-Fi", price: "от 400 ₽" },
    ],
  },
  {
    category: "Замена комплектующих",
    icon: "Cpu",
    items: [
      { name: "Замена HDD / SSD", price: "от 500 ₽" },
      { name: "Добавление оперативной памяти", price: "от 400 ₽" },
      { name: "Замена блока питания", price: "от 600 ₽" },
      { name: "Замена видеокарты", price: "от 500 ₽" },
    ],
  },
  {
    category: "Ремонт материнской платы",
    icon: "Zap",
    items: [
      { name: "Диагностика материнской платы", price: "от 500 ₽" },
      { name: "Пайка / замена элементов", price: "от 1 500 ₽" },
      { name: "Ремонт после скачка напряжения", price: "от 1 500 ₽" },
    ],
  },
  {
    category: "Восстановление данных",
    icon: "Database",
    items: [
      { name: "Восстановление удалённых файлов", price: "от 1 000 ₽" },
      { name: "Перенос данных на новый диск", price: "от 700 ₽" },
    ],
  },
]

export function PriceSection() {
  return (
    <section id="price" className="py-12 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 font-orbitron">Прайс на услуги</h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
            Ориентировочные цены на ремонт компьютеров с выездом в Новосибирске
          </p>
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 sm:px-6 py-3 text-red-400 text-sm sm:text-base font-medium max-w-xl text-center">
            <Icon name="Info" size={18} className="flex-shrink-0 text-red-500" />
            Окончательная стоимость работ будет озвучена мастером после диагностики
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {prices.map((group, gi) => (
            <Card key={gi} className="glow-border bg-card border-red-500/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-white text-base sm:text-lg">
                  <div className="w-9 h-9 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={group.icon} size={18} className="text-red-500" />
                  </div>
                  {group.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-center justify-between gap-2 py-2 border-b border-red-500/10 last:border-0">
                      <span className="text-gray-300 text-sm leading-snug">{item.name}</span>
                      <Badge
                        className={
                          item.highlight
                            ? "bg-red-500 text-white whitespace-nowrap flex-shrink-0"
                            : "bg-red-500/10 text-red-400 whitespace-nowrap flex-shrink-0"
                        }
                      >
                        {item.price}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          * Цены указаны без учёта стоимости запчастей. Стоимость деталей согласовывается отдельно.
        </p>
      </div>
    </section>
  )
}
