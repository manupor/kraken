"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Calendar, Download } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Comienza tu Exploración</h2>
          <p className="text-lg text-gray-700">
            Agenda una consulta gratuita y descubre cómo podemos transformar tu negocio desde las profundidades
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Agenda tu Exploración Gratuita</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nombre completo" className="border-slate-300 text-gray-900" />
                  <Input placeholder="Email corporativo" className="border-slate-300 text-gray-900" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Empresa" className="border-slate-300 text-gray-900" />
                  <Input placeholder="Cargo" className="border-slate-300 text-gray-900" />
                </div>
                <Input placeholder="Teléfono" className="border-slate-300 text-gray-900" />
                <Textarea
                  placeholder="Cuéntanos sobre tu desafío tecnológico actual..."
                  rows={4}
                  className="border-slate-300 text-gray-900"
                />
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="flex-1 bg-gradient-to-r from-[#078C9D] to-[#54599B] hover:from-[#078C9D]/90 hover:to-[#54599B]/90 text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Consulta
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-300 hover:bg-slate-50 bg-transparent text-gray-800"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#078C9D]" />
                  <span className="text-gray-700">contacto@krakenconsulting.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#078C9D]" />
                  <span className="text-gray-700">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#078C9D]" />
                  <span className="text-gray-700">Ciudad de México, México</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Mercados Objetivo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Fase 1 (0-6 meses)</h4>
                    <p className="text-gray-700 text-sm">México, Colombia</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Fase 2 (6-12 meses)</h4>
                    <p className="text-gray-700 text-sm">Chile, Perú, Costa Rica</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Fase 3 (12-24 meses)</h4>
                    <p className="text-gray-700 text-sm">Brasil, Centroamérica</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-[#54599B] to-[#078C9D] text-white rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-100">Únete al movimiento Kraken</h3>
              <p className="text-gray-300 mb-4">Navega distinto. Transforma profundo.</p>
              <p className="text-[#DB532B] font-medium text-sm">
                Porque del fondo del océano vienen las criaturas más poderosas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
