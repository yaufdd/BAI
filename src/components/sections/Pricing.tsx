import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { PRICING } from '../../lib/constants'

export function Pricing() {
  const { ref, inView } = useInView()

  return (
    <section id="pricing" aria-label="Стоимость" className="relative py-24 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeader
          badge="Стоимость"
          title="Прозрачное"
          highlight="ценообразование"
          description="Стоимость определяется после обсуждения вашей задачи. Первая консультация — бесплатно."
          inView={inView}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl border-gradient bg-[#0F1420] shadow-[0_0_60px_rgba(108,99,255,0.15)] p-8 md:p-10">
            <div className="text-center mb-8">
              <p className="text-[#8B9ABB] text-sm mb-3">Пилотный проект</p>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-[#8B9ABB] text-lg">от</span>
                <span className="font-display font-bold text-5xl gradient-text">{PRICING.currency} {PRICING.startingPrice}</span>
              </div>
              <p className="text-[#8B9ABB] text-sm leading-relaxed max-w-md mx-auto">
                {PRICING.description}
              </p>
            </div>

            <div className="border-t border-[rgba(108,99,255,0.12)] pt-8 mb-8">
              <p className="text-[#F0F4FF] text-sm font-semibold mb-4">Что входит:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRICING.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-[#F0F4FF] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {PRICING.cta}
              <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#8B9ABB] text-sm mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          Финальная стоимость определяется после обсуждения вашей задачи.
          Первая консультация — бесплатно.
        </motion.p>
      </div>
    </section>
  )
}
