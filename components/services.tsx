"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Zap, Shield, Code, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const serviceLines = [
    {
      id: "cloud",
      title: "Travesías Cloud",
      subtitle: "Donde comienza la metamorfosis digital",
      icon: <Cloud className="h-5 w-5" />,
      gradient: "from-[#54599B] to-[#078C9D]",
      bgGradient: "from-blue-50 to-cyan-50",
      packages: [
        {
          name: "Tritón Launch™",
          tagline: "Primera ola, máximo impacto",
          description: "Setup express cloud (Salesforce, SAP, Azure). En 30 días, procesos clave en producción.",
          ideal: "PyMEs y equipos piloto",
          gradient: "from-[#54599B] to-[#078C9D]",
          features: [
            "Activación de entorno, configuración express de CRM o ERP",
            "Automatización de procesos clave (ventas, soporte, casos)",
            "Dashboard ejecutivo + capacitaciones prácticas",
            "Go-live garantizado en 30 días",
          ],
        },
        {
          name: "Arrecife Digital™",
          tagline: "Diseñamos tu ecosistema como un arrecife coralino",
          description: "Roadmap cloud modular con visión 360°, procesos + cultura + tecnología.",
          ideal: "Empresas en expansión",
          gradient: "from-[#078C9D] to-[#54599B]",
          features: [
            "Diagnóstico de madurez cloud y cultura organizacional",
            "Diseño modular de arquitectura digital",
            "Roadmap con quick wins, dependencias, y modelo de gobierno TI",
            "Presentación ejecutiva para sponsors no técnicos",
          ],
        },
        {
          name: "Atlántida Pro™",
          tagline: "La joya perdida: implementación total",
          description: "Implementación full-stack: arquitectura, automatización, integraciones, entrenamiento real.",
          ideal: "Corporativos o empresas complejas",
          gradient: "from-[#54599B] to-[#DB532B]",
          features: [
            "Consultoría funcional personalizada",
            "Configuración avanzada (flows, permisos, procesos cruzados)",
            "Integraciones internas con ERPs, legacy y BI",
            "Soporte extendido post-Go-live con adopción monitoreada",
          ],
        },
      ],
    },
    {
      id: "integration",
      title: "Corrientes Conectadas",
      subtitle: "Donde tus sistemas nadan en sincronía",
      icon: <Zap className="h-5 w-5" />,
      gradient: "from-[#078C9D] to-[#DB532B]",
      bgGradient: "from-cyan-50 to-orange-50",
      packages: [
        {
          name: "Kraken Nexus™",
          tagline: "Tu red submarina para un mundo multicloud",
          description:
            "Integraciones API-first o middleware (MuleSoft, Azure Logic Apps, etc.). Flujo limpio, seguro y auditado.",
          ideal: "Entornos híbridos multicloud",
          gradient: "from-[#078C9D] to-[#54599B]",
          features: [
            "Mapeo completo de flujos de datos (bidireccional, eventos, triggers)",
            "Diseño de conectores API-first o middleware",
            "Dashboard técnico con errores en tiempo real y logging auditable",
            "Tiempos de respuesta y tolerancia definidos para cada flujo",
          ],
        },
        {
          name: "SonarWave™",
          tagline: "Datos frescos. Alertas inteligentes. Decisiones confiables",
          description:
            "Sincronización bidireccional + alertas + reconciliación. Dato fresco, confiable, sin duplicidades.",
          ideal: "Empresas que dependen de decisiones",
          gradient: "from-[#54599B] to-[#078C9D]",
          features: [
            "Sincronización programada o en tiempo real",
            "Monitoreo de frescura de datos, anomalías y lógica de reconciliación",
            "Alertas automáticas para stakeholders funcionales y técnicos",
            "Panel de salud de la integración, visible por el cliente",
          ],
        },
        {
          name: "Neural Tide™",
          tagline: "Inteligencia que fluye como una corriente cálida",
          description:
            "IA práctica: lead scoring, predicción de churn, forecast. Integrada a tus plataformas sin humo ni exageros.",
          ideal: "Empresas en adopción de IA",
          gradient: "from-[#DB532B] to-[#078C9D]",
          features: [
            "Casos de uso plug-and-play (churn, lead scoring, asignación inteligente, forecast)",
            "Conexión a Einstein, Vertex AI o Azure ML",
            "Monitoreo ético: métricas de precisión, sesgos, aprendizaje continuo",
            "Panel de decisiones automatizadas con explicabilidad humana",
          ],
        },
      ],
    },
    {
      id: "rescue",
      title: "Misiones de Rescate",
      subtitle: "Proyectos en tormenta, salvados por expertos",
      icon: <Shield className="h-5 w-5" />,
      gradient: "from-[#DB532B] to-[#54599B]",
      bgGradient: "from-orange-50 to-blue-50",
      packages: [
        {
          name: "Sirena Alert™",
          tagline: "El canto que te advierte antes del naufragio",
          description: "Diagnóstico relámpago de proyectos en crisis. Semáforo de salud + escenarios de rescate.",
          ideal: "Proyectos en caos o sin dirección",
          gradient: "from-[#DB532B] to-[#078C9D]",
          features: [
            "Auditoría funcional + técnica",
            "Score de madurez de gobierno, código, adopción",
            "Plan de acción con tres escenarios: reparar, redirigir, reiniciar",
            "Reunión de crisis con decisión ejecutiva",
          ],
        },
        {
          name: "Tridente Reset™",
          tagline: "Segundo intento. Esta vez, con éxito real",
          description: "Rediseño + reimplementación enfocada en adopción y retorno real.",
          ideal: "Proyectos Salesforce, SAP fallidos",
          gradient: "from-[#54599B] to-[#DB532B]",
          features: [
            "Rediseño funcional con foco en usuarios",
            "Refactorización técnica y de configuraciones",
            "Tests de aceptación + nueva adopción",
            "Entrenamiento regenerado, no reciclado",
          ],
        },
        {
          name: "Kraken Purifier™",
          tagline: "Removemos la basura técnica del fondo",
          description:
            "Limpieza de tech debt, flows rotos, triggers antiguos. Tu org respira, escala y se vuelve predecible.",
          ideal: "Orgs saturadas, sin orden técnico",
          gradient: "from-[#078C9D] to-[#DB532B]",
          features: [
            "Auditoría y mapa de deuda técnica",
            "Refactorización de triggers, Apex, LWC, flows y profiles",
            "Mejora de cobertura de pruebas + seguridad",
            "Manual de mantenimiento para tu equipo interno",
          ],
        },
      ],
    },
    {
      id: "development",
      title: "Desarrollo a Medida",
      subtitle: "Tu propio arrecife de innovación",
      icon: <Code className="h-5 w-5" />,
      gradient: "from-[#54599B] to-[#078C9D]",
      bgGradient: "from-blue-50 to-cyan-50",
      packages: [
        {
          name: "Nautilus Forge™",
          tagline: "Forjamos soluciones únicas, bajo presión",
          description:
            "Desarrollo personalizado desde cero. Front + back robusto, UX de alto nivel y conexión a Salesforce/SAP.",
          ideal: "Procesos únicos o exigencias legales",
          gradient: "from-[#54599B] to-[#078C9D]",
          features: [
            "Consultoría funcional + diseño UI/UX",
            "Desarrollo en Node, .NET, Python, React, Vue u otro stack escalable",
            "Conectividad con Salesforce, SAP o sistemas propios",
            "Manual técnico, ambiente seguro y documentación mantenible",
          ],
        },
        {
          name: "Coral DevOps™",
          tagline: "DevOps ágil, automatizado y con visibilidad cristalina",
          description: "DevOps como debe ser: pipelines limpios, QA automatizado, CI/CD eficiente y visible.",
          ideal: "Equipos internos que necesitan orden",
          gradient: "from-[#078C9D] to-[#54599B]",
          features: [
            "Repositorios limpios, estrategias de branches y merge controlado",
            "CI/CD pipelines con testing y control de calidad automatizado",
            "Políticas de rollback, ambientes de preproducción y gobernanza",
            "Capacitación a tu equipo técnico",
          ],
        },
      ],
    },
  ]

  return (
    <section
      className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden"
      id="services"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[#078C9D]/20 to-[#54599B]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-[#DB532B]/20 to-[#078C9D]/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#54599B] to-[#078C9D] text-white rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Soluciones Premium
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#54599B] to-[#078C9D] bg-clip-text text-transparent">
              Soluciones Kraken
            </span>
          </h2>
          <p className="text-lg text-gray-800">
            Cuatro líneas de servicio diseñadas para navegar cualquier desafío tecnológico
          </p>
        </motion.div>

        <Tabs defaultValue="cloud" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-gradient-to-r from-slate-100 to-blue-100 p-2 rounded-2xl">
            {serviceLines.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center gap-2 text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-slate-50 data-[state=active]:shadow-lg rounded-xl transition-all duration-300 text-gray-800"
              >
                <div className={`p-1 rounded-lg bg-gradient-to-r ${service.gradient}`}>{service.icon}</div>
                <span className="hidden sm:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceLines.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div
                  className={`text-center mb-12 p-8 rounded-2xl bg-gradient-to-r ${service.bgGradient} border border-white/50`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-4 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-800">{service.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.packages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group"
                    >
                      <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative">
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.gradient}`}></div>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-lg text-gray-900">{pkg.name}</CardTitle>
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${pkg.gradient} shadow-lg`}></div>
                          </div>
                          <CardDescription
                            className={`text-sm font-medium bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
                          >
                            {pkg.tagline}
                          </CardDescription>
                          <p className="text-gray-800 text-sm">{pkg.description}</p>
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-slate-100 to-blue-100 text-gray-800 w-fit">
                            Ideal para: {pkg.ideal}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 mb-6">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2">
                                <div
                                  className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${pkg.gradient}`}
                                ></div>
                                <span className="text-sm text-gray-800">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            variant="outline"
                            className={`w-full border-2 hover:bg-gradient-to-r ${pkg.gradient} hover:text-white hover:border-transparent bg-transparent transition-all duration-300 group-hover:scale-105 text-gray-800 border-gray-300`}
                          >
                            Más información
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
