import { motion } from 'framer-motion'
import { CheckCircle2, BrainCircuit, Workflow, LineChart, Shield, ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { Button } from '../ui/Button'
import { GlowOrb } from '../effects/GlowOrb'

const CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: 'ИИ-агенты работают 24/7',
    description: 'Обрабатывают заказы, отбирают резюме, отвечают клиентам — без больничных, отпусков и выходных.',
  },
  {
    icon: Workflow,
    title: 'Ноль узких мест',
    description: 'Автоматическая оркестрация задач: система справляется с растущей нагрузкой без привлечения новых сотрудников.',
  },
  {
    icon: LineChart,
    title: 'Решения за минуты, а не дни',
    description: 'Дашборды с данными по выручке, конверсии и рискам обновляются в реальном времени для мгновенных решений.',
  },
  {
    icon: Shield,
    title: 'Ваши данные — только ваши',
    description: 'Проектируем решения с учётом требований 152-ФЗ, данные не передаются третьим сторонам. Возможно развёртывание на вашем сервере.',
  },
]

const BENEFITS = [
  'Снижение расходов на рутинные операции',
  'Пилотное внедрение на одном процессе для оценки результата',
  'Интеграция с любым CRM/ERP без замены ваших систем',
  'Обучение на ваших данных для повышения точности',
  'Масштабирование без расширения штата',
  'Прозрачная отчётность и контроль на каждом этапе',
]

export function Solution() {
  const { ref, inView } = useInView()

  return (
    <section id="solution" aria-label="Наше решение" className="relative py-24 bg-[#0F1420] overflow-hidden">
      <GlowOrb color="primary" size="xl" className="-right-48 top-0 opacity-5" />
      <GlowOrb color="secondary" size="lg" className="-left-32 bottom-0 opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.08)] text-[#6C63FF] text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
            Наше решение
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F0F4FF] leading-tight mb-6 text-left"
          >
            ИИ, который работает <span className="gradient-text">на ваш бизнес</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <p className="text-[#8B9ABB] text-lg leading-relaxed max-w-2xl">
              Не просто инструменты — интеллектуальная экосистема, которая трансформирует ваши процессы и приносит измеримый результат.
            </p>
            <Button
              variant="outline"
              size="md"
              as="a"
              href="#how-it-works"
              onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="shrink-0"
            >
              Посмотреть, как это работает
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
                  <p className="text-[#8B9ABB] text-sm leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative animate-float"
          >
            <div className="relative p-8 rounded-3xl bg-[#080B14] border border-[rgba(108,99,255,0.2)] overflow-hidden glow-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(108,99,255,0.05)] to-[rgba(0,212,255,0.03)]" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-[#8B9ABB] text-xs ml-2 font-mono">demo: bai-dashboard</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#0F1420] border border-[rgba(108,99,255,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[#F0F4FF] text-sm">Обработка заказов</span>
                    </div>
                    <span className="text-green-400 text-sm font-mono">авто</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#0F1420] border border-[rgba(108,99,255,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
                      <span className="text-[#F0F4FF] text-sm">Скрининг резюме</span>
                    </div>
                    <span className="text-[#6C63FF] text-sm font-mono">авто</span>
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
                    <span className="text-[#8B9ABB] text-xs">Статус процессов</span>
                    <span className="text-green-400 text-xs font-semibold">Все активны</span>
                  </div>
                  <div className="font-display font-bold text-2xl gradient-text">3 из 3 автоматизированы</div>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-[#8B9ABB] text-xs font-medium uppercase tracking-wider">Преимущества</p>
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
