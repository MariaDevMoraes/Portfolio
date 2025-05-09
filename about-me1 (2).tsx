"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, Linkedin, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Criar mensagem para WhatsApp
    const message = `Nome: ${formData.name}%0AEmail: ${formData.email}%0AAssunto: ${formData.subject}%0AMensagem: ${formData.message}`

    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5517996492656?text=${message}`, "_blank")

    // Limpar formulário
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Mostrar mensagem de confirmação em Português
    alert("Mensagem enviada com sucesso! Você será redirecionado para o WhatsApp.")
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-bege">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Vamos Conversar</h2>
          <div className="section-divider"></div>
          <p className="text-gray-700 max-w-2xl mx-auto px-4">
            Estou disponível para desenvolver o site dos seus sonhos. Entre em contato comigo para discutirmos o seu
            projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-semibold text-rosa mb-6">Entre em Contato</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-rosa mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-rosa font-medium">Telefone</h4>
                  <p className="text-gray-700">(17) 99649-2656</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-rosa mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-rosa font-medium">Email</h4>
                  <p className="text-gray-700 break-words">maria0claramoraes@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin className="w-6 h-6 text-rosa mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-rosa font-medium">LinkedIn</h4>
                  <p className="text-gray-700">linkedin.com/in/mariaclaramoraesp</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              <span className="font-medium text-rosa">Disponibilidade:</span> Estou disponível para desenvolver sites
              personalizados para pessoas e empresas.
            </p>

            <Link href="https://wa.me/5517996492656" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center min-h-[44px] w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2" />
                Fale comigo no WhatsApp
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome"
                  required
                  className="w-full px-4 py-3 min-h-[44px] bg-white border border-rosa/30 rounded-lg focus:border-rosa focus:outline-none focus:ring-2 focus:ring-rosa/20 text-gray-700"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu Email"
                  required
                  className="w-full px-4 py-3 min-h-[44px] bg-white border border-rosa/30 rounded-lg focus:border-rosa focus:outline-none focus:ring-2 focus:ring-rosa/20 text-gray-700"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto"
                  required
                  className="w-full px-4 py-3 min-h-[44px] bg-white border border-rosa/30 rounded-lg focus:border-rosa focus:outline-none focus:ring-2 focus:ring-rosa/20 text-gray-700"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua Mensagem"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-rosa/30 rounded-lg focus:border-rosa focus:outline-none focus:ring-2 focus:ring-rosa/20 text-gray-700 resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-outline flex items-center justify-center min-h-[44px] w-full">
                <span>Enviar Mensagem</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
