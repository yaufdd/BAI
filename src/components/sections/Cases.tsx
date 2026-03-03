import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { Button } from '../ui/Button'
import { SCENARIOS } from '../../lib/constants'

const INDUSTRY_COLORS: Record<string, { text: string; badge: string; gradient: string }> = {
  'E-commerce': {
    text: 'text-purple-400',
    badge: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    gradient: 'from-purple-400/5 to-transparent',
  },
  'FinTech': {
    text: 'text-blue-400',
    badge: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    gradient: 'from-blue-400/5 to-transparent',
  },
  'HR & Recruitment': {
    text: 'text-cyan-400',
    badge: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    gradient: 'from-cyan-400/5 to-transparent',
  },
}

export function Cases() {
  const { ref, inView } = useInView()

  return (
    <section id="cases" aria-label="Сценарии применения" className="relative py-24 bg-[#0F1420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.08)] text-[#6C63FF] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
              Сценарии
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F0F4FF] leading-tight">
              Как это может работать <span className="gradient-text">в вашей сфере</span>
            </h2>
          </div>
          <Button
            variant="outline"
            size="md"
            as="a"
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="shrink-0"
          >
            Обсудить ваш сценарий
            <ArrowRight size={16} />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SCENARIOS.map((c, i) => {
            const colors = INDUSTRY_COLORS[c.industry] ?? {
              text: 'text-gray-400',
              badge: 'text-gray-400 bg-gray-400/10 border-gray-400/20',
              gradient: 'from-gray-400/5 to-transparent',
            }

            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative p-7 rounded-2xl bg-gradient-to-br ${colors.gradient} bg-[#080B14] border border-[rgba(108,99,255,0.12)] hover:border-[rgba(108,99,255,0.35)] transition-all duration-300 flex flex-col`}
              >
                <div className="relative flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
                      {c.industry}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#8B9ABB] group-hover:text-[#6C63FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </div>

                  <h3 className="font-display font-semibold text-[#F0F4FF] text-lg mb-3 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-[#8B9ABB] text-sm leading-relaxed mb-6">
                    {c.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {c.potential.map((r) => (
                      <div
                        key={r.label}
                        className="text-center p-3 rounded-xl bg-[rgba(108,99,255,0.06)] border border-[rgba(108,99,255,0.1)]"
                      >
                        <div className="font-display font-bold text-sm gradient-text">{r.metric}</div>
                        <div className="text-[#8B9ABB] text-xs mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
