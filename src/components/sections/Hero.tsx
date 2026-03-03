import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../ui/Button'
import { GridBackground } from '../effects/GridBackground'
import { GlowOrb } from '../effects/GlowOrb'

export function Hero() {
  return (
    <section aria-label="Главный экран" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080B14]">
      <GridBackground />

      <GlowOrb color="primary" size="xl" className="-top-48 -left-48" />
      <GlowOrb color="secondary" size="lg" className="-bottom-32 -right-32" />
      <GlowOrb color="primary" size="md" className="top-1/2 right-1/4 opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.08)] text-[#6C63FF] text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
            ИИ-автоматизация бизнес-процессов
            <ArrowRight size={14} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#F0F4FF] mb-6"
          >
            Автоматизируем бизнес-процессы
            <br />
            <span className="gradient-text">с помощью ИИ,</span>
            <br />
            чтобы вы росли быстрее
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8B9ABB] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Проектируем и внедряем ИИ-решения, которые берут на себя рутину:
            обработку заказов, скрининг кандидатов, аналитику и многое другое.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              as="a"
              href="#cta"
              onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Обсудить задачу
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              as="a"
              href="#cases"
              onClick={(e) => { e.preventDefault(); document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <Play size={16} />
              Примеры сценариев
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[rgba(108,99,255,0.3)] flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
