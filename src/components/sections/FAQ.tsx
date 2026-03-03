import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { FAQ_ITEMS } from '../../lib/constants'

export function FAQ() {
  const { ref, inView } = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" aria-label="Часто задаваемые вопросы" className="relative py-24 bg-[#0F1420]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeader
          badge="FAQ"
          title="Часто задаваемые"
          highlight="вопросы"
          inView={inView}
        />

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? 'border-[rgba(108,99,255,0.35)] bg-[rgba(108,99,255,0.05)]'
                  : 'border-[rgba(108,99,255,0.12)] bg-[#080B14] hover:border-[rgba(108,99,255,0.25)]'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-[#F0F4FF] pr-4">{item.question}</span>
                <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? 'gradient-bg' : 'bg-[rgba(108,99,255,0.1)]'
                }`}>
                  {openIndex === i
                    ? <Minus size={14} className="text-white" />
                    : <Plus size={14} className="text-[#6C63FF]" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-[#8B9ABB] text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            as="a"
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Остались вопросы? Получите консультацию
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
