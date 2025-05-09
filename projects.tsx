"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

const projects = [
  {
    title: "E-commerce",
    category: "Web Design",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    status: "Em andamento",
  },
  {
    title: "App de Finanças",
    category: "Desenvolvimento Mobile",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    status: "Em andamento",
  },
  {
    title: "Blog Corporativo",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    status: "Em andamento",
  },
  {
    title: "Landing Page",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    status: "Em andamento",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <section id="projects" className="py-16 sm:py-20 bg-bege">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Meus Projetos</h2>
          <div className="section-divider"></div>
          <p className="text-gray-700 max-w-2xl mx-auto px-4">
            Confira alguns exemplos de sites que eu desenvolvi. Cada projeto é único e personalizado de acordo com as
            necessidades.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-subtle">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative group">
                    <div className="relative h-64 md:h-80 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="absolute inset-0 bg-rosa/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-6 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-6 h-6 text-white mr-2" />
                        <p className="text-white text-xl font-semibold">{project.status}</p>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white mb-4">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-rosa hover:bg-rosa hover:text-white transition-colors duration-300"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-rosa hover:bg-rosa hover:text-white transition-colors duration-300"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-rosa" : "bg-gray-400"
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
