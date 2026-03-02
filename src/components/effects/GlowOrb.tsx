import { cn } from '../../lib/utils'

interface GlowOrbProps {
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function GlowOrb({ color = 'primary', size = 'md', className }: GlowOrbProps) {
  const colors = {
    primary: 'bg-[#6C63FF]',
    secondary: 'bg-[#00D4FF]',
  }

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[600px] h-[600px]',
  }

  return (
    <div
      className={cn(
        'absolute rounded-full blur-3xl opacity-10 pointer-events-none',
        colors[color],
        sizes[size],
        className
      )}
    />
  )
}
