import { motion } from 'framer-motion'
import { Clock, TrendingDown, Users, BarChart2, ArrowRight, type LucideProps } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { PROBLEMS } from '../../lib/constants'

type IconName = 'Clock' | 'TrendingDown' | 'Users' | 'BarChart2'
const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  Clock,
  TrendingDown,
  Users,
  BarChart2,
}

export function Problems() {
  const { ref, inView } = useInView()

  return (
    <section id="problems" aria-label="Проблемы бизнеса" className="relative py-24 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeader
          badge="Проблемы роста"
          title="Что мешает вашему"
          highlight="бизнесу расти?"
          description="Большинство компаний теряют до 40% потенциальной прибыли из-за неоптимизированных процессов. Узнаёте себя?"
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS.map((problem, i) => {
            const IconComponent = ICON_MAP[problem.icon as IconName]

            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-[#0F1420] border border-[rgba(108,99,255,0.12)] hover:border-[rgba(108,99,255,0.35)] transition-all duration-300 flex items-start gap-5"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(108,99,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] flex items-center justify-center">
                    {IconComponent && <IconComponent size={26} className="text-red-400" strokeWidth={1.5} />}
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-display font-semibold text-[#F0F4FF] text-lg mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-[#8B9ABB] text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            as="a"
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Узнайте, сколько вы теряете — бесплатный аудит
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
