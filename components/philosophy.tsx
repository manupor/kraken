"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Waves, Target, Users, Lightbulb, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function Philosophy() {
  const differentiators = [
    {
      icon: <Waves className="h-6 w-6 text-white" />,
      title: "Servicio Boutique",
      description:
        "Atención personalizada con expertos senior involucrados desde el inicio hasta el éxito del proyecto.",
      gradient: "from-[#54599B] to-[#078C9D]",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Resultados Tangibles",
      description:
        "Metodología propia orientada a resultados reales, con foco en adopción, escalabilidad y sostenibilidad.",
      gradient: "from-[#078C9D] to-[#54599B]",
      bgGradient: "from-teal-50 to-blue-50",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Rescate de Proyectos",
      description: "Capacidad única para intervenir en proyectos fallidos y reestructurarlos con éxito.",
      gradient: "from-[#DB532B] to-[#54599B]",
      bgGradient: "from-orange-50 to-blue-50",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Desarrollo a Medida",
      description: "Software que responde a procesos reales del cliente y no a limitaciones de plataforma.",
      gradient: "from-[#54599B] to-[#DB532B]",
      bgGradient: "from-blue-50 to-orange-50",
    },
  ]

  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden"
      id="philosophy"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#078C9D]/10 to-transparent transform -skew-y-1"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#078C9D] to-[#54599B] text-white rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Navegando la Complejidad Digital
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#54599B] to-[#078C9D] bg-clip-text text-transparent">
              Kraken Consulting
            </span>{" "}
            es Diferente
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Una firma boutique de consultoría tecnológica nacida con el propósito de resolver los problemas más
            complejos de transformación digital en empresas de LATAM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#54599B] to-[#078C9D] rounded-2xl p-8 mb-16 max-w-4xl mx-auto shadow-2xl"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <div className="w-3 h-3 bg-[#FFB347] rounded-full mr-3"></div>
            Nuestro Propósito
          </h3>
          <p className="text-lg text-gray-100 italic leading-relaxed">
            "Liberar el verdadero valor tecnológico de nuestros clientes, navegando juntos la complejidad de sistemas,
            datos e innovación, con una brújula ética y sostenible."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${item.bgGradient} overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <CardContent className="p-6 relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-800 text-sm leading-relaxed">{item.description}</p>
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
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#078C9D] to-[#54599B] rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-light mb-8 text-center text-white">¿Por qué elegir Kraken Consulting?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "No repetimos fórmulas: te diseñamos la solución exacta que necesitas",
                "Hablamos tu idioma, y también el de la tecnología y tus usuarios",
                "Cumplimos, y no con documentos, sino con resultados",
                "Nos importa tu éxito, tu adopción, tu impacto y tu legado",
                "No solo hacemos tecnología: dejamos huella en la empresa, en las personas y en el planeta",
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-[#FFB347] rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <p className="text-gray-100">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
