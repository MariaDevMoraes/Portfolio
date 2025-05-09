"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Página Inicial", href: "#home" },
  { name: "Sobre Mim", href: "#about" },
  { name: "Minhas Habilidades", href: "#skills" },
  { name: "Meus Serviços", href: "#services" },
  { name: "Meus Projetos", href: "#projects" },
  { name: "Faça um Orçamento", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Safe scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error(`Erro ao rolar para a seção ${sectionId}:`, error)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 10)
      }
    }

    // Add event listener only on client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClick = useCallback(
    (href: string) => {
      setIsOpen(false)

      try {
        // Extract section ID from href
        const sectionId = href.replace("#", "")
        scrollToSection(sectionId)
      } catch (error) {
        console.error("Erro na navegação:", error)
      }
    },
    [scrollToSection],
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bege/90 backdrop-blur-md" : "bg-bege"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-rosa font-bold text-xl">Portfólio</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className="group relative px-3 py-2 text-rosa hover:text-white transition-colors duration-300"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-rosa rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-rosa hover:text-white hover:bg-rosa/20 focus:outline-none"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              <span className="sr-only">{isOpen ? "Fechar menu principal" : "Abrir menu principal"}</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bege shadow-subtle">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="group relative block w-full text-left px-3 py-4 text-rosa hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 bg-rosa rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
