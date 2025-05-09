"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-12 bg-bege border-t border-rosa/10">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-rosa mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Maria Clara
        </motion.h2>

        <motion.p
          className="text-rosa mb-4 inline-block max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Criado com o auxílio de inteligência artificial e minhas habilidades.
        </motion.p>

        <motion.p
          className="text-gray-700 text-sm max-w-xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          A IA chegou para ajudar a criar experiências digitais incríveis. Desenvolvido por Maria Clara.
        </motion.p>

        <p className="text-gray-600 text-xs mt-6">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
