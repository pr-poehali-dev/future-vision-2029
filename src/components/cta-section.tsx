import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Icon from "@/components/ui/icon"

export function CTASection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (name && phone) {
      try {
        const func2url = await import("../../func2url.json")
        await fetch(func2url.default["send-request"], {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, description }),
        })
      } catch (_e) {
        console.error(_e)
      }
      setSubmitted(true)
    }
  }

  return (
    <section id="request" className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Оставить заявку на ремонт
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Опишите проблему, и мастер свяжется с вами в течение 15 минут. Выезд в любой район Новосибирска.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Форма заявки */}
          <div>
            {submitted ? (
              <div className="text-center py-12 bg-card rounded-2xl border border-red-500/20">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
                <p className="text-gray-300">Мастер позвонит вам в течение 15 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-2xl border border-red-500/20">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Ваше имя *</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background border-red-500/30 text-white placeholder:text-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Телефон *</label>
                  <Input
                    placeholder="+7 (383) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-background border-red-500/30 text-white placeholder:text-gray-500"
                    type="tel"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Опишите проблему</label>
                  <Textarea
                    placeholder="Например: компьютер не включается, сильно шумит, медленно работает..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-background border-red-500/30 text-white placeholder:text-gray-500 min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Фото компьютера или материнки (необязательно)
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer border-2 border-dashed border-red-500/30 rounded-lg p-4 hover:border-red-500/60 transition-colors">
                    <Icon name="Upload" size={20} className="text-red-500" />
                    <span className="text-gray-400 text-sm">
                      {photo ? photo.name : "Прикрепить фото (ПК, материнская плата, мастер за работой)"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                    />
                  </label>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-500 hover:bg-red-600 text-white border-0 text-lg py-4 pulse-button"
                >
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </form>
            )}
          </div>

          {/* Контакты */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-red-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Или позвоните нам</h3>
              <a href="tel:+79538077431" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">+7 (953) 807-74-31</p>
                  <p className="text-gray-400 text-sm">Ежедневно с 9:00 до 21:00</p>
                </div>
              </a>
            </div>

            <div className="bg-card rounded-2xl border border-red-500/20 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Мы в Новосибирске</h3>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="MapPin" size={20} className="text-red-500 flex-shrink-0" />
                <span>Выезжаем в любой район города</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="Clock" size={20} className="text-red-500 flex-shrink-0" />
                <span>Время работы: 9:00 — 21:00, без выходных</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Icon name="Zap" size={20} className="text-red-500 flex-shrink-0" />
                <span>Мастер приедет за 1-2 часа</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}