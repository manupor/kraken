"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, Shield, TreePine, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"

export function ESGSection() {
  const esgPillars = [
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Environmental (Ambiental)",
      gradient: "from-[#078C9D] to-[#54599B]",
      bgGradient: "from-cyan-50 to-blue-50",
      items: [
        "Diseño de soluciones digitales bajo principios de eficiencia energética",
        "Arquitecturas serverless en plataformas cloud con políticas ambientales certificadas",
        "Monitoreo y cálculo de CO₂ generado por los ambientes cloud",
        "Programa Kraken Forest 2030: reforestación de manglares y carbono azul",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Social (Social)",
      gradient: "from-[#54599B] to-[#078C9D]",
      bgGradient: "from-blue-50 to-cyan-50",
      items: [
        "Inclusión de talento diverso: mujeres, neurodivergentes, mayores de 40",
        "Kraken Rising Talents: programa regional de becas en desarrollo cloud",
        "Capacitación gratuita a ONGs, emprendimientos sociales y universidades públicas",
        "Participación en hackatones de impacto social y apoyo a iniciativas educativas",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Governance (Gobernanza)",
      gradient: "from-[#DB532B] to-[#54599B]",
      bgGradient: "from-orange-50 to-blue-50",
      items: [
        "Certificación interna ESG por proyecto con métricas de impacto",
        "Reportes de avance en proyectos abiertos al cliente en tiempo real",
        "Compromiso con tecnología ética: privacidad, inclusión algorítmica, transparencia",
        "Alineación de métricas ESG con objetivos de negocio para sostenibilidad",
      ],
    },
  ]

  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-900 via-[#54599B] to-[#078C9D] relative overflow-hidden"
      id="esg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#078C9D]/20 to-[#54599B]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-[#54599B]/20 to-[#DB532B]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#DB532B]/10 to-[#078C9D]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#078C9D] to-[#54599B] text-white rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Sostenibilidad Premium
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#87CEEB] bg-clip-text text-transparent">
              Kraken Blue Sustainability™
            </span>
          </h2>
          <p className="text-lg text-gray-100">Nuestra sostenibilidad no es adorno, es ADN.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {esgPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full border-0 bg-gradient-to-br ${pillar.bgGradient} hover:shadow-2xl transition-all duration-500 overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      {pillar.icon}
                    </motion.div>
                    <CardTitle className="text-lg text-gray-900">{pillar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-3">
                    {pillar.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${pillar.gradient} shadow-sm`}
                        ></div>
                        <span className="text-gray-800 text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#078C9D] via-[#54599B] to-[#DB532B] rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <TreePine className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-light text-white mb-4">Kraken Forest 2030</h3>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Por cada proyecto facturado mayor a $10,000 USD, plantamos 30 árboles en manglares de LATAM, contribuyendo
              al carbono azul y la biodiversidad marina.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-2xl mx-auto relative z-10">
            <motion.div
              className="text-xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <AnimatedCounter
                  end={500}
                  duration={2500}
                  suffix="+"
                  className="text-3xl font-bold text-[#FFB347] block mb-2"
                />
                <span className="text-gray-100">Árboles plantados</span>
              </div>
            </motion.div>

            <motion.div
              className="text-xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <AnimatedCounter end={25} duration={2000} className="text-3xl font-bold text-[#FFB347] block mb-2" />
                <span className="text-gray-100">Becas otorgadas</span>
              </div>
            </motion.div>

            <motion.div
              className="text-xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <AnimatedCounter
                  end={100}
                  duration={2200}
                  suffix="%"
                  className="text-3xl font-bold text-[#FFB347] block mb-2"
                />
                <span className="text-gray-100">Proyectos certificados ESG</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
