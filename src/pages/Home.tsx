import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { Approach } from '@/sections/Approach'
import { Results } from '@/sections/Results'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
