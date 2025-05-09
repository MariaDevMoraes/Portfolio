"use client"

import { motion } from "framer-motion"
import { Globe, Award, Clock, Users, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function PorQueTerUmSite() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [originSection, setOriginSection] = useState<string | null>(null)

  useEffect(() => {
    // Capturar o parâmetro de origem
    const from = searchParams.get("from")
    if (from) {
      setOriginSection(from)
    }

    // Scroll to top on page load
    try {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        })
      }
    } catch (error) {
      console.error("Erro ao rolar para o topo:", error)
    }
  }, [searchParams])

  const handleReturnClick = () => {
    if (originSection) {
      // Navegar para a página inicial
      router.push("/")

      // Usar setTimeout para garantir que o scroll aconteça após o carregamento da página
      setTimeout(() => {
        try {
          const sectionElement = document.getElementById(originSection)
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" })
          }
        } catch (error) {
          console.error("Erro ao rolar para a seção:", error)
        }
      }, 100)
    } else {
      // Se não houver seção de origem, apenas voltar para a página inicial
      router.push("/")
    }
  }

  return (
    <main id="top" className="min-h-screen bg-bege text-rosa pt-8">
      <div className="container mx-auto px-4 py-16">
        {/* Botão de voltar no topo removido */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rosa mb-4">Por que ter um site</h1>
          <p className="text-gray-700 max-w-2xl mx-auto px-4">
            Descubra como um site profissional pode transformar seu negócio e expandir seu alcance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-subtle"
          >
            <Globe className="w-10 h-10 text-rosa mb-4" />
            <h3 className="text-xl font-semibold text-rosa mb-2">Visibilidade global</h3>
            <p className="text-gray-700">
              Um site permite que seu negócio seja encontrado por pessoas de todo o mundo, expandindo seu alcance muito
              além do local físico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-subtle"
          >
            <Award className="w-10 h-10 text-rosa mb-4" />
            <h3 className="text-xl font-semibold text-rosa mb-2">Credibilidade profissional</h3>
            <p className="text-gray-700">
              Um site bem projetado transmite profissionalismo e confiança, elementos essenciais para conquistar novos
              clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-subtle"
          >
            <Clock className="w-10 h-10 text-rosa mb-4" />
            <h3 className="text-xl font-semibold text-rosa mb-2">Disponibilidade</h3>
            <p className="text-gray-700">
              Seu site trabalha por você 24 horas por dia, 7 dias por semana, fornecendo informações e atendendo
              clientes mesmo quando você não está disponível.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-subtle"
          >
            <Plus className="w-10 h-10 text-rosa mb-4" />
            <h3 className="text-xl font-semibold text-rosa mb-2">Mais benefícios</h3>
            <p className="text-gray-700">
              Análise de dados, automação de processos, integração com redes sociais e muito mais para impulsionar seu
              negócio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-subtle"
          >
            <Users className="w-10 h-10 text-rosa mb-4" />
            <h3 className="text-xl font-semibold text-rosa mb-2">Alcançar novos clientes</h3>
            <p className="text-gray-700">
              Com estratégias de SEO e marketing digital, seu site pode atrair novos clientes que estão procurando
              exatamente o que você oferece.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={handleReturnClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary min-h-[44px]"
          >
            Voltar para a Página Inicial
          </motion.button>
        </motion.div>
      </div>
    </main>
  )
}
