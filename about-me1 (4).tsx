"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback } from "react"

export default function Hero() {
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
    <section id="home" className="min-h-screen bg-bege pt-16 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-rosa mb-4">Maria Clara</h1>
            <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-8">
              Futura Profissional em Sistema de Informação
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              Precisa de um site? Transforme sua presença online com um site profissional e personalizado. Um site bem
              feito pode aumentar sua credibilidade, alcançar novos clientes e impulsionar seu negócio.
            </p>
            <button onClick={scrollToContact} className="btn-outline min-h-[44px] px-6 py-3">
              Solicite um orçamento
            </button>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden 
              border-4 border-rosa/30"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ma.jpg-q14sihJuvO8LeWPNsOA7MLOPgwcpHW.jpeg"
                alt="Foto de Maria Clara"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
