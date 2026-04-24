import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              ПК<span className="text-red-500">Мастер</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Ремонт компьютеров с выездом на дом в Новосибирске. Быстро, честно, с гарантией.
            </p>
            <a href="tel:+73832000000" className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-bold text-lg">
              <Icon name="Phone" size={20} />
              +7 (383) 200-00-00
            </a>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><span className="font-space-mono text-gray-400">Чистка и охлаждение</span></li>
              <li><span className="font-space-mono text-gray-400">Переустановка Windows</span></li>
              <li><span className="font-space-mono text-gray-400">Удаление вирусов</span></li>
              <li><span className="font-space-mono text-gray-400">Замена комплектующих</span></li>
              <li><span className="font-space-mono text-gray-400">Ремонт материнских плат</span></li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Почему мы
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Как работаем
                </a>
              </li>
              <li>
                <a href="#reviews" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
              <li>
                <a href="#request" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Оставить заявку
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 ПКМастер Новосибирск. Все права защищены.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-400 text-sm font-space-mono">
              <Icon name="MapPin" size={14} className="text-red-500" />
              Новосибирск, выезд по всему городу
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
