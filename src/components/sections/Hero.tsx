import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../ui/Button'
import { GridBackground } from '../effects/GridBackground'
import { GlowOrb } from '../effects/GlowOrb'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080B14]">
      <GridBackground />

      <GlowOrb color="primary" size="xl" className="-top-48 -left-48" />
      <GlowOrb color="secondary" size="lg" className="-bottom-32 -right-32" />
      <GlowOrb color="primary" size="md" className="top-1/2 right-1/4 opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.08)] text-[#6C63FF] text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
            ИИ-автоматизация нового поколения
            <ArrowRight size={14} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#F0F4FF] mb-6"
          >
            Превратите рутину
            <br />
            <span className="gradient-text">в конкурентное</span>
            <br />
            преимущество
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#6B7A99] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Автоматизируем бизнес-процессы с помощью ИИ — от скрининга кандидатов
            до обработки тысяч заказов. Первые результаты уже через 48 часов.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              as="a"
              href="#cta"
              onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Получить бесплатный аудит
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
              Смотреть кейсы
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(108,99,255,0.1)] rounded-2xl overflow-hidden border border-[rgba(108,99,255,0.15)]"
          >
            {[
              { value: '150+', label: 'Клиентов' },
              { value: '3M+', label: 'Часов автоматизировано' },
              { value: '340%', label: 'Средний ROI' },
              { value: '48ч', label: 'Среднее время запуска' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#080B14] px-6 py-5 text-center"
              >
                <div className="font-display font-bold text-2xl md:text-3xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[#6B7A99] text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
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
