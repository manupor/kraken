"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-[#54599B] to-[#078C9D] py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#078C9D]/20 to-[#54599B]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#54599B]/20 to-[#DB532B]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#DB532B]/10 to-[#078C9D]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#078C9D] to-[#54599B] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <Image
                src="/logo.png"
                alt="Kraken Consulting"
                width={600}
                height={180}
                className="mx-auto mb-12 h-32 md:h-40 w-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-7xl lg:text-8xl font-light text-white mb-8 max-w-5xl mx-auto leading-tight"
            >
              Desde las{" "}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#87CEEB] bg-clip-text text-transparent font-semibold">
                profundidades
              </span>
              , tu transformación comienza aquí
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-100 mb-10 max-w-4xl mx-auto font-light"
            >
              "Tecnología nacida en las profundidades, construida para transformar en la superficie."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto"
            >
              Consultoría tecnológica boutique especializada en transformación digital, soluciones cloud y rescate de
              proyectos fallidos en LATAM.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#078C9D] to-[#54599B] hover:from-[#0A9FB5] hover:to-[#6066A8] text-white px-10 py-6 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Agenda una exploración gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-[#54599B] px-10 py-6 text-xl bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#services">
                  Conoce nuestras soluciones
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
