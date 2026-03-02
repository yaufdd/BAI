import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { SectionHeader } from '../ui/SectionHeader'
import { HOW_IT_WORKS_STEPS } from '../../lib/constants'

export function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section id="how-it-works" className="relative py-24 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeader
          badge="Как это работает"
          title="От аудита до результата"
          highlight="за 48 часов"
          description="Прозрачный процесс внедрения без технических рисков и неожиданных затрат."
          inView={inView}
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[rgba(108,99,255,0.3)] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center glow-primary">
                    <span className="font-display font-bold text-white text-lg">{step.step}</span>
                  </div>
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="lg:hidden absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#6C63FF] to-transparent" />
                  )}
                </div>
                <h3 className="font-display font-semibold text-[#F0F4FF] text-lg mb-2">{step.title}</h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
