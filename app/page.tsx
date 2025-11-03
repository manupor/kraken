import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Services } from "@/components/services"
import { ESGSection } from "@/components/esg-section"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Services />
      <ESGSection />
      <Contact />
    </main>
  )
}
