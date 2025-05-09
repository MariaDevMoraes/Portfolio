"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, FileCode, Palette } from "lucide-react"

const skills = [
  {
    icon: <FileCode className="w-8 h-8 text-rosa" />,
    title: "HTML",
    description: "Estruturação de página web",
  },
  {
    icon: <Palette className="w-8 h-8 text-rosa" />,
    title: "CSS",
    description: "Estilização de página web",
  },
  {
    icon: <Code className="w-8 h-8 text-rosa" />,
    title: "JavaScript",
    description: "Interatividade em páginas web",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-bege">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Minhas Habilidades</h2>
          <div className="section-divider"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12 px-4">
            Tenho conhecimento em HTML, CSS e JavaScript para criar sites responsivos e funcionais. Estou sempre
            aprendendo para melhorar minhas habilidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-rosa mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/habilidades?from=skills#top" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary min-h-[44px] px-6 py-3"
            >
              Ver Mais Detalhes
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
