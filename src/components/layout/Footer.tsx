import { Zap, Mail, Phone, Send } from 'lucide-react'
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_TG, NAV_LINKS } from '../../lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0F1420] border-t border-[rgba(108,99,255,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center glow-primary">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-[#F0F4FF]">
                {COMPANY_NAME}<span className="gradient-text">.</span>
              </span>
            </a>
            <p className="text-[#6B7A99] text-sm leading-relaxed max-w-xs mb-6">
              Оптимизируем бизнес-процессы с помощью искусственного интеллекта.
              Автоматизируем рутину — вы фокусируетесь на росте.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-2 text-[#6B7A99] hover:text-[#6C63FF] text-sm transition-colors"
              >
                <Mail size={14} />
                {COMPANY_EMAIL}
              </a>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center gap-2 text-[#6B7A99] hover:text-[#6C63FF] text-sm transition-colors"
              >
                <Phone size={14} />
                {COMPANY_PHONE}
              </a>
              <a
                href={COMPANY_TG}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#6B7A99] hover:text-[#6C63FF] text-sm transition-colors"
              >
                <Send size={14} />
                Telegram
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#F0F4FF] font-semibold text-sm mb-4">Навигация</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#6B7A99] hover:text-[#F0F4FF] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#F0F4FF] font-semibold text-sm mb-4">Правовые</p>
            <ul className="flex flex-col gap-3">
              {['Политика конфиденциальности', 'Условия использования', 'Обработка данных'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#6B7A99] hover:text-[#F0F4FF] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(108,99,255,0.1)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7A99] text-xs">
            © {year} {COMPANY_NAME}. Все права защищены.
          </p>
          <p className="text-[#6B7A99] text-xs">
            Сделано с ИИ ❤️ в России
          </p>
        </div>
      </div>
    </footer>
  )
}
