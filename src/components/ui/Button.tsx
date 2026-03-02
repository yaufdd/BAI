import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  as: Tag = 'button',
  href,
  ...props
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none overflow-hidden group'

  const variants = {
    primary:
      'gradient-bg text-white glow-primary hover:opacity-90 hover:scale-[1.02]',
    outline:
      'border border-[rgba(108,99,255,0.4)] text-[#F0F4FF] hover:border-[#6C63FF] hover:bg-[rgba(108,99,255,0.08)]',
    ghost:
      'text-[#6B7A99] hover:text-[#F0F4FF] hover:bg-[rgba(108,99,255,0.08)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  if (Tag === 'a') {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  )
}
