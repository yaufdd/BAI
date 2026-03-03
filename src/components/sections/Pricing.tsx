import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { PRICING_PLANS } from '../../lib/constants'

export function Pricing() {
  const { ref, inView } = useInView()

  return (
    <section id="pricing" aria-label="Тарифы" className="relative py-24 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeader
          badge="Тарифы"
          title="Прозрачное"
          highlight="ценообразование"
          description="Без скрытых платежей. Выберите план, который подходит вашему бизнесу прямо сейчас."
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'border-gradient bg-[#0F1420] shadow-[0_0_60px_rgba(108,99,255,0.15)]'
                  : 'bg-[#0F1420] border border-[rgba(108,99,255,0.12)] hover:border-[rgba(108,99,255,0.3)]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-bg text-white text-xs font-semibold glow-primary">
                    <Zap size={12} />
                    Популярный выбор
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-[#F0F4FF] text-xl mb-2">{plan.name}</h3>
                <p className="text-[#8B9ABB] text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  {plan.price === 'По запросу' ? (
                    <span className="font-display font-bold text-3xl text-[#F0F4FF]">{plan.price}</span>
                  ) : (
                    <>
                      <span className="font-display font-bold text-4xl gradient-text">₽ {plan.price}</span>
                      {plan.period && (
                        <span className="text-[#8B9ABB] text-sm">/{plan.period}</span>
                      )}
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.highlighted ? 'gradient-bg' : 'bg-[rgba(108,99,255,0.15)]'
                    }`}>
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-[#F0F4FF] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                size="md"
                className="w-full"
                onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#8B9ABB] text-sm mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          Все тарифы включают бесплатный аудит процессов и расчёт ROI до старта.
          Мы не берём предоплату, пока вы не увидите план внедрения.
        </motion.p>
      </div>
    </section>
  )
}
