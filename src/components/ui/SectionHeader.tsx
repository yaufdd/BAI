import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
  className?: string
  inView?: boolean
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  className,
  inView = true,
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center max-w-3xl mx-auto mb-16', className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.08)] text-[#6C63FF] text-sm font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F0F4FF] leading-tight mb-4"
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8B9ABB] text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
