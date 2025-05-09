"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"
import { useCallback } from "react"

export default function Services() {
  // Safe scroll function
  const scrollToContact = useCallback(() => {
    try {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error("Erro ao rolar para a seção de contato:", error)
    }
  }, [])

  return (
    <section id="services" className="py-16 sm:py-20 bg-bege">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Meus Serviços</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-semibold text-rosa mb-4">Criação de Site</h3>
            <p className="text-gray-700 mb-6">
              Desenvolvo sites personalizados e responsivos que se adaptam a qualquer dispositivo. Seu site será único,
              moderno e otimizado para mecanismos de busca.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
                <span className="text-gray-700">Design moderno e atraente</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
                <span className="text-gray-700">Responsivo para todos os dispositivos</span>
              </div>
            </div>

            <button onClick={scrollToContact} className="btn-primary min-h-[44px] w-full sm:w-auto px-6 py-3">
              Solicite seu Orçamento
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-semibold text-rosa mb-4">Benefícios de ter um site</h3>
            <p className="text-gray-700 mb-6">
              Um site profissional pode transformar o seu negócio, aumentando sua visibilidade e credibilidade online.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
                <span className="text-gray-700">Aumenta sua visibilidade online</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
                <span className="text-gray-700">Conquista novos clientes</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
                <span className="text-gray-700">Fica disponível 24 horas por dia</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
                <span className="text-gray-700">Fortalece a sua marca</span>
              </div>
            </div>

            <Link href="/por-que-ter-um-site?from=services#top" className="inline-block w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary min-h-[44px] w-full sm:w-auto px-6 py-3"
              >
                Saiba Mais
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
