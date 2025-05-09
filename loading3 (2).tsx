"use client"

import { motion } from "framer-motion"
import { Code, FileCode, Palette } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function HabilidadesDetalhado() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rosa mb-4">Minhas Habilidades</h1>
          <p className="text-gray-700 max-w-2xl mx-auto px-4">
            Conheça as tecnologias e ferramentas que utilizo para criar experiências digitais. Estou sempre aprendendo e
            me atualizando para oferecer as melhores soluções.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <div className="flex items-center mb-2">
              <FileCode className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-rosa">HTML</h3>
              <span className="ml-auto text-gray-600">80%</span>
            </div>
            <div className="h-4 w-full bg-white rounded-full overflow-hidden group-hover:bg-gray-100 transition-colors duration-300 shadow-subtle">
              <div className="h-full bg-rosa rounded-full" style={{ width: "80%" }}></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="flex items-center mb-2">
              <Palette className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-rosa">CSS</h3>
              <span className="ml-auto text-gray-600">80%</span>
            </div>
            <div className="h-4 w-full bg-white rounded-full overflow-hidden group-hover:bg-gray-100 transition-colors duration-300 shadow-subtle">
              <div className="h-full bg-rosa rounded-full" style={{ width: "80%" }}></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group"
          >
            <div className="flex items-center mb-2">
              <Code className="w-5 h-5 text-rosa mr-2 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-rosa">JavaScript</h3>
              <span className="ml-auto text-gray-600">80%</span>
            </div>
            <div className="h-4 w-full bg-white rounded-full overflow-hidden group-hover:bg-gray-100 transition-colors duration-300 shadow-subtle">
              <div className="h-full bg-rosa rounded-full" style={{ width: "80%" }}></div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-subtle"
          >
            <h3 className="text-2xl font-semibold text-rosa mb-6">Ferramentas que uso</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-bege rounded-lg mb-2 shadow-subtle">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-rosa" fill="currentColor">
                    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">VS Code</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-bege rounded-lg mb-2 shadow-subtle">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-rosa" fill="currentColor">
                    <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664h6.664a3.334 3.334 0 0 0 0-6.664 3.333 3.333 0 0 0 0-6.665zm0-2a1.332 1.332 0 1 1 0 2.664 1.332 1.332 0 0 1 0-2.664zm-6.664 8.665a1.332 1.332 0 1 1 0-2.663 1.332 1.332 0 0 1 0 2.663zm6.664 4.001a1.332 1.332 0 1 1 0 2.664 1.332 1.332 0 0 1 0-2.664z" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">Figma</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-bege rounded-lg mb-2 shadow-subtle">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-rosa" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">GitHub</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-subtle"
          >
            <h3 className="text-2xl font-semibold text-rosa mb-6">Soft Skills</h3>
            <p className="text-gray-700">
              Além das habilidades técnicas, tenho também as habilidades interpessoais: Comunicação, Trabalho em Equipe,
              Resolução de Problemas, Organização e Criatividade.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rosa rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">Comunicação eficaz</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rosa rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">Trabalho em equipe</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rosa rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">Resolução de problemas</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rosa rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">Organização</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-rosa rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-gray-700">Criatividade</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button
            onClick={handleReturnClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary min-h-[44px]"
          >
            Voltar para a Página Inicial
          </motion.button>
        </div>
      </div>
    </main>
  )
}
