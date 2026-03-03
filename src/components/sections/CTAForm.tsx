import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { Button } from '../ui/Button'
import { GlowOrb } from '../effects/GlowOrb'
import { sendLeadEmail, type LeadFormData } from '../../lib/emailjs'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function CTAForm() {
  const { ref, inView } = useInView()
  const [state, setState] = useState<FormState>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>()

  const onSubmit = async (data: LeadFormData) => {
    setState('loading')
    try {
      await sendLeadEmail(data)
      setState('success')
      reset()
    } catch {
      setState('error')
    }
  }

  const validateAtLeastOneContact = (fieldName: 'email' | 'phone') => {
    return (value: string | undefined, formValues: LeadFormData) => {
      const otherField = fieldName === 'email' ? formValues.phone : formValues.email
      if (!value && !otherField) {
        return 'Укажите email или телефон'
      }
      return true
    }
  }

  return (
    <section id="cta" aria-label="Форма заявки" className="relative py-24 bg-[#080B14] overflow-hidden">
      <GlowOrb color="primary" size="xl" className="-left-48 top-0 opacity-10" />
      <GlowOrb color="secondary" size="lg" className="-right-32 bottom-0 opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border-gradient bg-[#0F1420] p-8 md:p-14 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(108,99,255,0.06)] to-[rgba(0,212,255,0.03)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.08)] text-[#6C63FF] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
                Бесплатный аудит
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F0F4FF] leading-tight mb-4">
                Готовы автоматизировать
                <span className="gradient-text"> бизнес за 48 часов?</span>
              </h2>
              <p className="text-[#8B9ABB] leading-relaxed mb-8">
                Оставьте заявку — наш эксперт свяжется с вами в течение 2 часов
                и проведёт бесплатный аудит ваших процессов.
              </p>

              <div className="space-y-3">
                {[
                  'Бесплатный анализ 2-х процессов',
                  'Расчёт потенциального ROI',
                  'Дорожная карта внедрения',
                  'Без обязательств и предоплат',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#6C63FF] shrink-0" />
                    <span className="text-[#F0F4FF] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {state === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 glow-primary">
                    <CheckCircle2 size={28} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-[#F0F4FF] text-xl mb-2">
                    Заявка получена!
                  </h3>
                  <p className="text-[#8B9ABB] text-sm mb-6">
                    Наш эксперт свяжется с вами в рабочее время (пн-пт, 9:00–19:00 МСК).
                  </p>

                  <div className="text-left space-y-4 mb-6 p-4 rounded-xl bg-[#080B14] border border-[rgba(108,99,255,0.12)]">
                    <p className="text-[#F0F4FF] text-sm font-semibold">Что будет дальше:</p>
                    <div className="space-y-3">
                      {[
                        { step: '1', text: 'Знакомство — 15-минутный звонок для понимания ваших задач' },
                        { step: '2', text: 'Бесплатный аудит 2-х процессов с расчётом потенциала' },
                        { step: '3', text: 'Расчёт ROI и дорожная карта внедрения' },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{item.step}</span>
                          </div>
                          <span className="text-[#8B9ABB] text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setState('idle')}
                    className="text-[#6C63FF] text-sm hover:underline cursor-pointer"
                  >
                    Отправить ещё одну заявку
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div>
                    <input
                      {...register('name', { required: 'Введите ваше имя' })}
                      placeholder="Ваше имя *"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-[#F0F4FF] placeholder-[#8B9ABB] text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[rgba(108,99,255,0.3)] ${
                        errors.name ? 'border-red-500/50' : 'border-[rgba(108,99,255,0.2)] focus:border-[#6C63FF]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('email', {
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Некорректный email' },
                        validate: validateAtLeastOneContact('email'),
                      })}
                      type="email"
                      placeholder="Email"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-[#F0F4FF] placeholder-[#8B9ABB] text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[rgba(108,99,255,0.3)] ${
                        errors.email ? 'border-red-500/50' : 'border-[rgba(108,99,255,0.2)] focus:border-[#6C63FF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('phone', {
                        pattern: { value: /^[\d\s+\-()]{7,}$/, message: 'Некорректный номер' },
                        validate: validateAtLeastOneContact('phone'),
                      })}
                      type="tel"
                      placeholder="Телефон, например +7 (999) 123-45-67"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-[#F0F4FF] placeholder-[#8B9ABB] text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[rgba(108,99,255,0.3)] ${
                        errors.phone ? 'border-red-500/50' : 'border-[rgba(108,99,255,0.2)] focus:border-[#6C63FF]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('company')}
                      placeholder="Компания (необязательно)"
                      className="w-full px-4 py-3 rounded-xl bg-[#080B14] border border-[rgba(108,99,255,0.2)] focus:border-[#6C63FF] text-[#F0F4FF] placeholder-[#8B9ABB] text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[rgba(108,99,255,0.3)]"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register('message')}
                      placeholder="Расскажите о вашей задаче (необязательно)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B14] border border-[rgba(108,99,255,0.2)] focus:border-[#6C63FF] text-[#F0F4FF] placeholder-[#8B9ABB] text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[rgba(108,99,255,0.3)] resize-none"
                    />
                  </div>

                  {state === 'error' && (
                    <p className="text-red-400 text-sm">
                      Ошибка отправки. Попробуйте ещё раз или напишите нам напрямую.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={state === 'loading'}
                  >
                    {state === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Получить бесплатный аудит
                        <ArrowRight size={16} />
                      </>
                    )}
                  </Button>

                  <p className="text-[#8B9ABB] text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" className="text-[#6C63FF] hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
