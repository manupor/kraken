"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#078C9D] to-[#54599B] py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-light text-white mb-4">
            Como el principal Integrador de Soluciones, resolvemos tus desafíos únicos.
          </h3>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Newsletter</h4>
            <p className="text-slate-300 text-sm mb-4">
              Regístrate para recibir el contenido de TI que más te importa. Puedes actualizar tus preferencias o
              cancelar la suscripción en cualquier momento.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Tu email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="w-full bg-gradient-to-r from-[#078C9D] to-[#54599B] hover:from-[#0A9FB5] hover:to-[#6066A8] text-white">
                Suscribirse al newsletter
              </Button>
            </div>
          </div>

          {/* About Kraken */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Acerca de Kraken</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Visión de la empresa
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Reconocimientos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Ciudadanía corporativa
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Sostenibilidad
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Equipo de liderazgo
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Sector Público Kraken | IPS
                </a>
              </li>
            </ul>
          </div>

          {/* Press and Engagement */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Prensa y compromiso</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Sala de prensa
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Relaciones con inversores
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Alianzas
                </a>
              </li>
            </ul>
          </div>

          {/* Help and Support */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Ayuda y soporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Soporte OneCall
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Financiamiento y leasing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Base de conocimiento
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Cuenta Kraken.com
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Seguimiento de pedidos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Políticas de devolución
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image src="/logo.png" alt="Kraken Consulting" width={120} height={36} className="h-8 w-auto" />
            <span className="text-slate-300 text-sm">© 2024 Kraken Consulting. Todos los derechos reservados.</span>
          </div>
          <div className="text-slate-300 text-sm">
            <span>Lea el mensaje de privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
