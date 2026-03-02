import { Suspense, lazy } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'

const Problems = lazy(() => import('./components/sections/Problems').then(m => ({ default: m.Problems })))
const Solution = lazy(() => import('./components/sections/Solution').then(m => ({ default: m.Solution })))
const HowItWorks = lazy(() => import('./components/sections/HowItWorks').then(m => ({ default: m.HowItWorks })))
const Cases = lazy(() => import('./components/sections/Cases').then(m => ({ default: m.Cases })))
const Pricing = lazy(() => import('./components/sections/Pricing').then(m => ({ default: m.Pricing })))
const FAQ = lazy(() => import('./components/sections/FAQ').then(m => ({ default: m.FAQ })))
const CTAForm = lazy(() => import('./components/sections/CTAForm').then(m => ({ default: m.CTAForm })))

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#6C63FF] border-t-transparent animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B14]">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Problems />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Solution />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Cases />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTAForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
