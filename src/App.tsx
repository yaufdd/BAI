import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { SocialProof } from './components/sections/SocialProof'
import { Problems } from './components/sections/Problems'
import { Solution } from './components/sections/Solution'
import { Cases } from './components/sections/Cases'
import { HowItWorks } from './components/sections/HowItWorks'
import { FAQ } from './components/sections/FAQ'
import { Pricing } from './components/sections/Pricing'
import { CTAForm } from './components/sections/CTAForm'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problems />
        <Solution />
        <Cases />
        <HowItWorks />
        <FAQ />
        <Pricing />
        <CTAForm />
      </main>
      <Footer />
    </div>
  )
}
