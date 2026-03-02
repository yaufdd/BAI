import { motion } from 'framer-motion'
import { CheckCircle2, BrainCircuit, Workflow, LineChart, Shield } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionHeader } from '../ui/SectionHeader'
import { GlowOrb } from '../effects/GlowOrb'

const CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: 'ИИ-агенты 24/7',
    description: 'Интеллектуальные агенты берут на себя рутинные задачи, не требуя перерывов и выходных.',
  },
  {
    icon: Workflow,
    title: 'Умная оркестрация',
    description: 'Автоматически распределяем задачи между модулями, исключая узкие места в процессах.',
  },
  {
    icon: LineChart,
    title: 'Real-time аналитика',
    description: 'Дашборды с живыми данными — принимайте решения на основе фактов, а не интуиции.',
  },
  {
    icon: Shield,
    title: 'Enterprise-безопасность',
    description: 'Шифрование AES-256, соответствие 152-ФЗ, полный аудит всех действий системы.',
  },
]

const BENEFITS = [
  'Снижение операционных расходов на 40–80%',
  'Запуск первого ИИ-процесса за 48 часов',
  'Интеграция с любым CRM/ERP без замены систем',
  'Обучение на ваших данных — точность от 95%',
  'Масштабирование без роста штата',
  'ROI уже в первый месяц',
]

export function Solution() {
  const { ref, inView } = useInView()

  return (
    <section id="solution" className="relative py-24 bg-[#0F1420] overflow-hidden">
      <GlowOrb color="primary" size="xl" className="-right-48 top-0 opacity-5" />
      <GlowOrb color="secondary" size="lg" className="-left-32 bottom-0 opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeader
          badge="Наше решение"
          title="ИИ, который работает"
          highlight="на ваш бизнес"
          description="Мы не просто внедряем инструменты — мы создаём интеллектуальную экосистему, которая трансформирует ваши процессы изнутри."
          inView={inView}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-5 rounded-2xl bg-[#080B14] border border-[rgba(108,99,255,0.12)] hover:border-[rgba(108,99,255,0.35)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(108,99,255,0.12)] flex items-center justify-center mb-3 group-hover:bg-[rgba(108,99,255,0.2)] transition-colors">
                    <cap.icon size={20} className="text-[#6C63FF]" />
                  </div>
                  <h3 className="font-semibold text-[#F0F4FF] text-sm mb-1">{cap.title}</h3>
                  <p className="text-[#6B7A99] text-xs leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-[#080B14] border border-[rgba(108,99,255,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(108,99,255,0.05)] to-[rgba(0,212,255,0.03)]" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-[#6B7A99] text-xs ml-2 font-mono">bai-dashboard.app</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#0F1420] border border-[rgba(108,99,255,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[#F0F4FF] text-sm">Обработка заказов</span>
                    </div>
                    <span className="text-green-400 text-sm font-mono">2 847/сут</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#0F1420] border border-[rgba(108,99,255,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
                      <span className="text-[#F0F4FF] text-sm">Скрининг резюме</span>
                    </div>
                    <span className="text-[#6C63FF] text-sm font-mono">451 кандидат</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#0F1420] border border-[rgba(108,99,255,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                      <span className="text-[#F0F4FF] text-sm">Риск-мониторинг</span>
                    </div>
                    <span className="text-[#00D4FF] text-sm font-mono">real-time</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-[rgba(108,99,255,0.1)] to-[rgba(0,212,255,0.05)] border border-[rgba(108,99,255,0.2)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#6B7A99] text-xs">Экономия за этот месяц</span>
                    <span className="text-green-400 text-xs font-semibold">+23%</span>
                  </div>
                  <div className="font-display font-bold text-2xl gradient-text">₽ 1 240 000</div>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-[#6B7A99] text-xs font-medium uppercase tracking-wider">Преимущества включены</p>
                  {BENEFITS.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-[#6C63FF] shrink-0 mt-0.5" />
                      <span className="text-[#F0F4FF] text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
