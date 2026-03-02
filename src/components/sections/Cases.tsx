import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionHeader } from '../ui/SectionHeader'
import { CASES } from '../../lib/constants'

const INDUSTRY_COLORS: Record<string, string> = {
  'E-commerce': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'FinTech': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'HR & Recruitment': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
}

export function Cases() {
  const { ref, inView } = useInView()

  return (
    <section id="cases" className="relative py-24 bg-[#0F1420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeader
          badge="Кейсы"
          title="Реальные результаты"
          highlight="реальных компаний"
          description="Не гипотезы и обещания — только проверенные кейсы с измеримым ROI."
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl bg-[#080B14] border border-[rgba(108,99,255,0.12)] hover:border-[rgba(108,99,255,0.35)] transition-all duration-300 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(108,99,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${INDUSTRY_COLORS[c.industry] ?? 'text-gray-400 bg-gray-400/10 border-gray-400/20'}`}>
                    {c.industry}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#6B7A99] group-hover:text-[#6C63FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>

                <h3 className="font-display font-semibold text-[#F0F4FF] text-lg mb-3 leading-tight">
                  {c.title}
                </h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed mb-6">
                  {c.description}
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {c.results.map((r) => (
                    <div
                      key={r.label}
                      className="text-center p-3 rounded-xl bg-[rgba(108,99,255,0.06)] border border-[rgba(108,99,255,0.1)]"
                    >
                      <div className="font-display font-bold text-lg gradient-text">{r.metric}</div>
                      <div className="text-[#6B7A99] text-xs mt-1 leading-tight">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
