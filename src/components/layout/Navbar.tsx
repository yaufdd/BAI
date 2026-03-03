import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from '../ui/Button'
import { NAV_LINKS, COMPANY_NAME } from '../../lib/constants'
import { cn } from '../../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(8,11,20,0.85)] backdrop-blur-xl border-b border-[rgba(108,99,255,0.15)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center glow-primary transition-all group-hover:scale-110">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-[#F0F4FF]">
                {COMPANY_NAME}
                <span className="gradient-text">.</span>
              </span>
            </a>

            <nav aria-label="Основная навигация" className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-[#8B9ABB] hover:text-[#F0F4FF] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Button
                variant="primary"
                size="sm"
                as="a"
                href="#cta"
                onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Получить консультацию
              </Button>
            </div>

            <button
              className="md:hidden text-[#8B9ABB] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(8,11,20,0.97)] backdrop-blur-xl border-b border-[rgba(108,99,255,0.15)] px-4 py-6"
          >
            <nav aria-label="Мобильная навигация" className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-left text-[#F0F4FF] text-base font-medium py-2 border-b border-[rgba(108,99,255,0.1)] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="md"
                className="mt-2 w-full"
                as="a"
                href="#cta"
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Получить консультацию
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
