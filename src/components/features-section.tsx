import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Выезд на дом",
    description: "Мастер приедет к вам домой или в офис в удобное время. Не нужно никуда везти технику.",
    icon: "car",
    badge: "Удобно",
  },
  {
    title: "Диагностика бесплатно",
    description: "Определяем причину поломки без предоплаты. Платите только за реальный ремонт.",
    icon: "search",
    badge: "Бесплатно",
  },
  {
    title: "Гарантия на работы",
    description: "Даём гарантию на все выполненные работы и установленные запчасти до 6 месяцев.",
    icon: "shield",
    badge: "Гарантия",
  },
  {
    title: "Быстрое решение",
    description: "Большинство проблем решаем за 1-2 часа прямо на месте. Без лишних ожиданий.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Опытные мастера",
    description: "Более 5 лет опыта в ремонте ПК, ноутбуков, материнских плат и переустановке Windows.",
    icon: "user",
    badge: "Профи",
  },
  {
    title: "Честные цены",
    description: "Называем стоимость до начала работ. Без скрытых платежей и накруток за срочность.",
    icon: "tag",
    badge: "Выгодно",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-12 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ремонт компьютеров в Новосибирске с выездом на дом — быстро, профессионально и с гарантией
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "car" && "🚗"}
                    {feature.icon === "search" && "🔍"}
                    {feature.icon === "shield" && "🛡️"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "user" && "👨‍🔧"}
                    {feature.icon === "tag" && "💰"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}