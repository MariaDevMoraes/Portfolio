"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Linkedin, Mail } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-bege">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Sobre Mim</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg text-gray-700 mb-6 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Olá! Sou uma estudante de Sistema de Informação apaixonada por desenvolvimento web e design de interfaces.
            Meu objetivo é criar experiências digitais que não apenas sejam visualmente atraentes, mas também funcionais
            e intuitivas.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 text-center mb-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Com conhecimentos em HTML, CSS e JavaScript para criar sites responsivos e funcionais. Estou sempre buscando
            aprender novas tecnologias e aprimorar minhas habilidades para oferecer as melhores soluções aos meus
            clientes.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="https://wa.me/5517996492656"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="WhatsApp"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white border border-rosa/30 group-hover:bg-rosa transition-all duration-300 cursor-pointer">
                <Phone className="w-5 h-5 text-rosa group-hover:text-white transition-colors duration-300" />
              </div>
            </Link>

            <Link
              href="http://linkedin.com/in/mariaclaramoraesp"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="LinkedIn"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white border border-rosa/30 group-hover:bg-rosa transition-all duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 text-rosa group-hover:text-white transition-colors duration-300" />
              </div>
            </Link>

            <a href="mailto:maria0claramoraes@gmail.com" className="group relative" aria-label="Email">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white border border-rosa/30 group-hover:bg-rosa transition-all duration-300 cursor-pointer">
                <Mail className="w-5 h-5 text-rosa group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
