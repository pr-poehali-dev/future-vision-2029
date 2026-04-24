export function SafetySection() {
  const photos = [
    {
      src: "https://cdn.poehali.dev/projects/9e22f76f-fdb6-4c5c-87c9-83041e7636c6/files/99dd81d8-16c7-45fc-b1d7-28cd2a8abbe6.jpg",
      alt: "Мастер приезжает на дом",
      caption: "Выезд на дом",
    },
    {
      src: "https://cdn.poehali.dev/projects/9e22f76f-fdb6-4c5c-87c9-83041e7636c6/files/6953b877-439e-4321-9f13-2a22f04b2747.jpg",
      alt: "Ремонт материнской платы",
      caption: "Работа с материнской платой",
    },
    {
      src: "https://cdn.poehali.dev/projects/9e22f76f-fdb6-4c5c-87c9-83041e7636c6/files/5009eb80-2995-429f-a407-0e6e9d3352ff.jpg",
      alt: "Ремонт компьютера",
      caption: "Диагностика и замена комплектующих",
    },
  ]

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наша работа</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы работаем профессионально и аккуратно — ваш компьютер в надёжных руках
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border border-red-500/20 slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
