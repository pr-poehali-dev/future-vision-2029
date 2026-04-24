import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

const testimonials = [
  {
    name: "Алексей М.",
    role: "Клиент, Новосибирск",
    avatar: "",
    content:
      "Мастер приехал через час после звонка. Быстро нашёл проблему с материнской платой, сделал всё аккуратно. Компьютер работает отлично уже 3 месяца!",
  },
  {
    name: "Светлана К.",
    role: "Клиент, Новосибирск",
    avatar: "",
    content:
      "Очень довольна! Установили Windows, почистили от вирусов и настроили всё заново. Всё объяснили понятно, не обманули с ценой.",
  },
  {
    name: "Дмитрий П.",
    role: "Клиент, Новосибирск",
    avatar: "",
    content:
      "Обращался уже дважды. Профессионалы своего дела — грамотно, быстро и по честной цене. Рекомендую всем знакомым.",
  },
]

export function TestimonialsSection() {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && comment) {
      setSubmitted(true)
    }
  }

  return (
    <section id="reviews" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят жители Новосибирска о нашем сервисе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-red-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500 text-white font-bold">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Форма отзыва */}
        <div className="max-w-2xl mx-auto">
          <Card className="glow-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Оставить отзыв</h3>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🙏</div>
                  <p className="text-xl text-white font-bold">Спасибо за ваш отзыв!</p>
                  <p className="text-muted-foreground mt-2">Мы ценим каждое мнение клиента</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background border-red-500/30 text-white placeholder:text-gray-500"
                    required
                  />
                  <Textarea
                    placeholder="Напишите ваш отзыв..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-background border-red-500/30 text-white placeholder:text-gray-500 min-h-[120px]"
                    required
                  />
                  <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white border-0 py-3">
                    Отправить отзыв
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
