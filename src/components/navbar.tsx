import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              ПК<span className="text-red-500">Мастер</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#services"
                className="font-geist text-white hover:text-red-500 transition-colors duration-200"
              >
                Услуги
              </a>
              <a href="#how-it-works" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Как работаем
              </a>
              <a href="#price" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Цены
              </a>
              <a href="#reviews" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Отзывы
              </a>
              <a href="#faq" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="tel:+79538077431">
              <Button className="bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                <Icon name="Phone" size={16} />
                Позвонить
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-red-500/20">
              <a
                href="#services"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Как работаем
              </a>
              <a
                href="#price"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Цены
              </a>
              <a
                href="#reviews"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Отзывы
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <a href="tel:+79538077431">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                    <Icon name="Phone" size={16} />
                    Позвонить
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}