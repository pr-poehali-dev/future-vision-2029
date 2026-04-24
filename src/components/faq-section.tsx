import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит выезд мастера?",
      answer:
        "Выезд мастера и диагностика — бесплатно. Вы платите только за ремонт и запчасти, если они нужны. Стоимость называем заранее, до начала работ.",
    },
    {
      question: "Как быстро приедет мастер?",
      answer:
        "В большинстве случаев мастер приезжает в течение 1-2 часов после звонка. В часы пик — до 3-4 часов. Работаем ежедневно с 9:00 до 21:00.",
    },
    {
      question: "Какие виды ремонта вы делаете?",
      answer:
        "Чистка и замена термопасты, переустановка Windows, удаление вирусов, замена жёсткого диска или SSD, ремонт материнской платы, замена блока питания, настройка сети и Wi-Fi, восстановление данных.",
    },
    {
      question: "Есть ли гарантия на ремонт?",
      answer:
        "Да, мы даём гарантию на все выполненные работы — от 1 до 6 месяцев в зависимости от типа ремонта. При наличии гарантийного случая мастер приедет повторно бесплатно.",
    },
    {
      question: "Нужно ли везти компьютер к вам?",
      answer:
        "Нет! Мы специализируемся на выезде на дом или в офис. Вам не нужно никуда везти технику — всё сделаем прямо у вас.",
    },
    {
      question: "Как оплатить услуги?",
      answer:
        "Принимаем наличные и безналичную оплату. Оплата производится после выполнения работы — сначала убедитесь, что всё работает, потом платите.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на самые популярные вопросы о нашем сервисе по ремонту ПК с выездом в Новосибирске.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
