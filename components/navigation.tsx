"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Nuestra Filosofía", href: "#philosophy" },
    { name: "Soluciones", href: "#services" },
    { name: "Impacto ESG", href: "#esg" },
    { name: "Recursos", href: "#resources" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Kraken Consulting" width={400} height={120} className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#54599B] hover:to-[#078C9D] hover:bg-clip-text transition-all duration-300 text-sm font-medium relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#54599B] to-[#078C9D] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                placeholder="Buscar soluciones..."
                className="w-64 pl-10 pr-4 py-2 text-sm border-slate-300 focus:border-[#078C9D] focus:ring-[#078C9D] text-gray-900"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            <Button className="bg-gradient-to-r from-[#078C9D] to-[#54599B] hover:from-[#078C9D]/90 hover:to-[#54599B]/90 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#078C9D] transition-colors duration-200 px-2 py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Input placeholder="Buscar soluciones..." className="mb-4 text-gray-900" />
                <Button className="bg-gradient-to-r from-[#078C9D] to-[#54599B] hover:from-[#078C9D]/90 hover:to-[#54599B]/90 w-full text-white">
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
