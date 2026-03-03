import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const PARTNER_LOGOS = [
  'ТехноГрупп',
  'МаркетПро',
  'ФинСервис',
  'ЛогиТрейд',
  'HR-Платформа',
  'DataSoft',
]

export function SocialProof() {
  const { ref, inView } = useInView()

  return (
    <section aria-label="Нам доверяют" className="relative py-16 bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[#8B9ABB] text-sm font-medium uppercase tracking-wider mb-10"
        >
          Нам доверяют
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-16"
        >
          {PARTNER_LOGOS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-12 px-4 rounded-lg bg-[rgba(108,99,255,0.04)] border border-[rgba(108,99,255,0.08)] w-full"
            >
              <span className="font-display font-semibold text-sm text-[#8B9ABB] opacity-60 select-none">
                {name}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-[#0F1420] border border-[rgba(108,99,255,0.12)]"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-[#F0F4FF] text-lg leading-relaxed mb-4">
            «После внедрения BAI мы сократили время обработки заказов в 5 раз и перевели команду
            на стратегические задачи. ROI окупился за первый месяц.»
          </blockquote>
          <div>
            <p className="text-[#F0F4FF] font-semibold text-sm">Директор по операциям</p>
            <p className="text-[#8B9ABB] text-sm">E-commerce маркетплейс, 200+ сотрудников</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
